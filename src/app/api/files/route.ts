import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const files = await prisma.files.findMany();

  return NextResponse.json(files);
}
