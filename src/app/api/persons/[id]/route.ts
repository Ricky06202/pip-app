import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const person = await prisma.persons.findUnique({
    where: { id: Number(id) },
    include: {
      role: true,
    },
  });

  if (!person) {
    return NextResponse.json({ message: "Person not found" }, { status: 404 });
  }

  return NextResponse.json(person);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const person = await prisma.persons.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(person);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  const event = await prisma.persons.update({
    where: { id: Number(id) },
    data: {
      photo: data.photo,
      fullName: data.fullName,
      birthday: data.birthday,
      email: data.email,
      facebook: data.facebook,
      instagram: data.instagram,
      twitter: data.twitter,
      linkedin: data.linkedin,
      youtube: data.youtube,
      alias: data.alias,
      hobby: data.hobby,
      favoriteFood: data.favoriteFood,
      favoriteDessert: data.favoriteDessert,
      favoriteColor: data.favoriteColor,
      dreamAspiration: data.dreamAspiration,
      favoriteSerieMovie: data.favoriteSerieMovie,
      favoriteMusicGenre: data.favoriteMusicGenre,
      favoriteVideoGame: data.favoriteVideoGame,
      message: data.message,
      bio: data.bio,
      roleId: data.roleId,
    },
  });

  return NextResponse.json(event);
}
