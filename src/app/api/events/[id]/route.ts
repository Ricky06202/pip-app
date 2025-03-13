import prisma from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = await prisma.events.findUnique({
    where: { id: Number(id) },
    include: { files: true },
  });

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = await prisma.events.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(event);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  const event = await prisma.events.update({
    where: { id: Number(id) },
    data: {
      title: data.title,
      description: data.description,
      date: data.date,
    },
  });

  return NextResponse.json(event);
}
