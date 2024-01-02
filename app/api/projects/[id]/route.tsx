import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";


// Adding NextRequest prevents caching
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const project = await prisma.project.findUnique({
        where: {
            title: params.id
        }
    })


    // fetch data from a db
    // if data is not found, we return a 404 error
    // else we return the data
    if (!project) {
        return NextResponse.json({error: "Project not found"}, {status: 404})
    }

    return NextResponse.json(project)
}