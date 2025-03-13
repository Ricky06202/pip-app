import { prisma } from "@db/prisma";
import { NextRequest, NextResponse } from "next/server";

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
  const persons = await prisma.persons.create({
    data: {
      photo: data.photo,
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
