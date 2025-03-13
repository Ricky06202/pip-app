import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const role = await prisma.roles.findUnique({
    where: { id: Number(id) },
  });

  if (!role) {
    return NextResponse.json({ message: "Role not found" }, { status: 404 });
  }

  return NextResponse.json(role);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const role = await prisma.roles.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(role);
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const data = await request.json();
  const role = await prisma.roles.update({
    where: { id: Number(id) },
    data: {
      role: data.role,
    },
  });

  return NextResponse.json(role);
}
