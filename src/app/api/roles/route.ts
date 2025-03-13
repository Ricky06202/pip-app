import prisma from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const roles = await prisma.roles.findMany();

  return NextResponse.json(roles);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const roles = await prisma.roles.create({
    data: {
      role: data.role,
    },
  });

  return NextResponse.json(roles);
}
