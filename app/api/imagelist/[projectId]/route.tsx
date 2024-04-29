import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';
import fetch from 'node-fetch'

// Initialize the Prisma client
const prisma = new PrismaClient();

type HandlerParams = {
    params: { projectId: string };
};

interface ImageItem {
    id: string;
    caption: string;
    thumbnail?: string; // Make the thumbnail property optional
}

export async function GET(req: Request, { params }: HandlerParams): Promise<NextResponse> {
    const { projectId } = params;

    console.log(projectId)

    // Retrieve the project by name
    const imageList = await prisma.photo.findMany({
        where: { projectId: projectId },
        orderBy: [
            {
                sequence: 'asc'
            }],
        select: {
            id: true,
            caption: true,
            desktop_blob: true,
        }
    });

    const updatedImageList = imageList.map(item => ({
        ...item,
        thumbnail: `/api/thumbnail/${item.id}.jpg`
    }));

    // Return all thumbnails in a response
    console.log("Project overview:", updatedImageList)
    return NextResponse.json(updatedImageList);
}
