import { NextResponse } from "next/server";
import prisma from '../../../prisma/client';
import { getProjectId } from "../utils/getProjectId";


export async function GET() {

  const projectId = await getProjectId("Homepage")

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