import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'


// Adding NextRequest prevents caching
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const prisma = new PrismaClient()


    if (!params.id) {
        return NextResponse.json({error: "Photo not found"}, {status: 404})
    }

    const photo = await prisma.photo.findUnique({
        where: {
          id: params.id,
        },
      });
 

      return NextResponse.json(photo, {status: 200});

}