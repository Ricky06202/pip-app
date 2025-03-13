import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { uploadFileToBlob } from "@shared/services/blob";

export async function GET() {
  const persons = await prisma.persons.findMany({
    include: {
      role: true,
    },
  });

  return NextResponse.json(persons);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const photo = await uploadFileToBlob(data.photo, data.fullName);
  const persons = await prisma.persons.create({
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

  return NextResponse.json(persons);
}
