import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const file = await prisma.files.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(file);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  const file = await prisma.files.update({
    where: { id: Number(id) },
    data: {
      title: data.name,
      description: data.description,
      url: data.url,
      eventId: data.eventId,
    },
  });

  return NextResponse.json(file);
}
