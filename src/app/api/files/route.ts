import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { uploadFileToBlob } from "@shared/services/blob";

export async function GET() {
  const files = await prisma.files.findMany();

  return NextResponse.json(files);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const files = await prisma.files.create({
    data: {
      eventId: data.eventId,
      title: data.name,
      description: data.description,
      url: data.url,
    },
  });

  return NextResponse.json(files);
}
