import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "../../../../lib/prisma";

// POST /api/projects/projects
export async function GET(request: NextRequest) {
  const result = getProjects;

  return NextResponse.json({ result });
}
