import prisma from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.events.findMany({
    include: {
      files: true,
    },
  });

  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const events = await prisma.events.create({
    data: {
      title: data.title,
      description: data.description,
      date: data.date,
    },
  });

  return NextResponse.json(events);
}
