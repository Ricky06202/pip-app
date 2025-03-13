import { uploadFileToBlob } from "@/src/modules/shared/services/blob";
import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const person = await prisma.persons.findUnique({
    where: { id: Number(id) },
  });

  if (!person) {
    return NextResponse.json({ message: "Person not found" }, { status: 404 });
  }

  return NextResponse.json(person);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const person = await prisma.persons.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(person);
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const data = await request.json();
  const photo = data.photo
    ? await uploadFileToBlob(data.photo, data.fullName)
    : undefined;
  const event = await prisma.persons.update({
    where: { id: Number(id) },
    data: {
      photo: photo,
      fullName: data.fullName,
      birthday: data.birthday,
      email: data.email,
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
      roleId: data.roleId,
    },
  });

  return NextResponse.json(event);
}
