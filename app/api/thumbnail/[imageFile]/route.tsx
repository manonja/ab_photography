import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';
import fetch from 'node-fetch'

// Initialize the Prisma client
const prisma = new PrismaClient();

type HandlerParams = {
    params: { imageFile: string };
};

export async function GET(req: Request, { params }: HandlerParams): Promise<NextResponse> {
    const { imageFile } = params;

    const imageId = imageFile.split(".jpg")[0]

    if (imageId == imageFile) {
        return NextResponse.json({ error: `Can only retrieve jpg` }, { status: 404 });
    }

    console.log(imageId)

    // Retrieve the project by name
    const image = await prisma.photo.findUnique({
        where: { id: imageId }
    });

    if (!image) {
        return NextResponse.json({ error: `Photo '${imageId}' not found` }, { status: 404 });
    }

    // Fetch the image from its URL
    const response = await fetch(image.desktop_blob);

    if (!response.ok) {
        throw new Error(`Failed to fetch image from URL: ${image.desktop_blob}`);
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



    // Return all thumbnails in a response
    console.log("THUMBNAILS:", thumbnail)
    return new NextResponse(thumbnail, { headers: { 'Content-Type': 'image/jpeg' } });
}
