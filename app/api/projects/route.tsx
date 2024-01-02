import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

// Adding NextRequest prevents caching
export async function GET(request: NextRequest) {
  const projects = await prisma.project.findMany({
    where: {
      isPublished: {
        not: true,
      },
    },
  });

  return NextResponse.json(projects);
}
