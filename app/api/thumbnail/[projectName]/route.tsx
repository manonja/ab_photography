import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';
import fetch from 'node-fetch'

// Initialize the Prisma client
const prisma = new PrismaClient();

type HandlerParams = {
    params: { projectName: string };
};

export async function GET(req: Request, { params }: HandlerParams): Promise<NextResponse> {
    const { projectName } = params;

    // Retrieve the project by name
    const project = await prisma.project.findUnique({
        where: { title: projectName },
        include: { photos: true }
    });

    if (!project) {
        return NextResponse.json({ error: `Project '${projectName}' not found` }, { status: 404 });
    }

    const thumbnails: Buffer[] = [];

    for (const photo of project.photos) {
        try {
            // Fetch the image from its URL
            const response = await fetch(photo.desktop_blob);
            if (!response.ok) {
                throw new Error(`Failed to fetch image from URL: ${photo.desktop_blob}`);
            }
            const buffer = await response.arrayBuffer();

            // Process the image using Sharp
            const thumbnail = await sharp(buffer)
                .resize(300, 300, {
                    fit: 'cover',  // Maintain aspect ratio and center
                    position: 'center'
                })
                .jpeg()  // Convert to JPEG
                .toBuffer();

            thumbnails.push(thumbnail);
        } catch (error: any) {
            console.error(`Error processing image: ${error.message}`);
        }
    }

    // Return all thumbnails in a response
    return new NextResponse(Buffer.concat(thumbnails), { headers: { 'Content-Type': 'image/jpeg' } });
}
