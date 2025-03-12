import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.events.findMany({
    include: {
      files: true,
    },
  });

  return NextResponse.json(events);
}
