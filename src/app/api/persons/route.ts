import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const persons = await prisma.persons.findMany({
    include: {
      role: true,
    },
  });

  return NextResponse.json(persons);
}
