import { uploadFileToBlob } from "@/src/modules/shared/services/blob";
import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const file = await prisma.files.findUnique({
    where: { id: Number(id) },
  });

  if (!file) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  return NextResponse.json(file);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const file = await prisma.files.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(file);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();
  const url = data.file
    ? await uploadFileToBlob(data.file, data.name)
    : undefined;
  const file = await prisma.files.update({
    where: { id: Number(id) },
    data: {
      title: data.name,
      description: data.description,
      url: url,
      eventId: data.eventId,
    },
  });

  return NextResponse.json(file);
}
