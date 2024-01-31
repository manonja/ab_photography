import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { getProjectId } from "../../utils/getProjectId";


const prisma = new PrismaClient()

export async function GET() {

  const projectId = await getProjectId("7 Rad")

  if (!projectId) {
    return NextResponse.json({ error: 'Project Id is missing' }, { status: 400 });
  }

  const photos = await prisma.photo.findMany({
    where: {
      projectId: projectId,
    },
  });

  return NextResponse.json(photos);

}