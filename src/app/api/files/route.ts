import prisma from "@db/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { uploadFileToBlob } from "@shared/services/blob";

export async function GET() {
  const files = await prisma.files.findMany();

  return NextResponse.json(files);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const url = await uploadFileToBlob(data.file, data.name);
  const files = await prisma.files.create({
    data: {
      eventId: data.eventId,
      title: data.name,
      description: data.description,
      url: url,
    },
  });

  return NextResponse.json(files);
}
