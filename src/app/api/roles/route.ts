import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const roles = await prisma.roles.findMany();

  return NextResponse.json(roles);
}
