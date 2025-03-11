import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.roles.createMany({
  data: [
    { role: "Secretario General" },
    { role: "Vice-Secretario General" },
    { role: "Ministro de Desarrollo Social" },
    { role: "Ministro de Economía" },
    { role: "Defensor" },
    { role: "Ayudante del Defensor" },
    { role: "Diputado" },
  ],
});

await prisma.persons.createMany({
  data: [
    {
      fullName: "Ricardo A. Sanjur G.",
      birthday: new Date("2002-06-20"),
      email: "ricardosanjurg@gmail.com",
      alias: "Ricky",
      hobby:
        "Jugar Ajedrez, Aprender Nuevas Tecnologias, Gym, Youtube, Mangas y Anime",
      favoriteFood: "Ramen y Sushi",
      favoriteDessert: "Cinabon",
      favoriteColor: "Celeste y Blanco",
      dreamAspiration:
        "Ser Desarrollador FullStack y Llegar a ser GM en Ajedrez",
      favoriteBook: "El Origen de los guardianes",
      favoriteMusic: "Techno",
      roleId: 4,
    },
    {
      fullName: "Yeisury Y. Coronel S.",
      birthday: new Date("2003-08-07"),
      email: "coronelyeisury5@gmail.com",
      alias: "Yeisu",
      hobby: "Ver Instagram, Youtube, joder a Paul, y la natación",
      favoriteFood: "Pasta",
      favoriteDessert: "Dulce de chocolate",
      favoriteColor: "Rosado y Verde",
      dreamAspiration: "Graduarme, ser millonaria, y tener un marido fiel",
      favoriteSerieMovie: "",
      favoriteMusicGenre: "",
      roleId: 3,
    },
    {
      fullName: "Fredy O. Villarreal DG",
      birthday: new Date("2002-06-10"),
      email: "fredyhayabusa09@gmail.com",
      alias: "Swify",
      hobby: "Programar, gaming, y ver series",
      favoriteFood: "Chow Mein",
      favoriteDessert: "Helado en galleta",
      favoriteColor: "Azul y Verde",
      dreamAspiration: "Trabajar para Microsoft o Apple",
      favoriteSerieMovie: "",
      favoriteMusicGenre: "",
      roleId: 2,
    },
    {
      fullName: "Cristian A. Montenegro M.",
      birthday: new Date("2006-04-23"),
      email: "antionio_valoy@hotmail.com",
      alias: "Arkay",
      hobby: `Percusión, leer variedad de cosas, estudiar sociología, economía, política, historia, aspectos de geografía, astronomía, y otras ciencias, escribir (historias cortas), calistenia, basketball, volleyball, cualquier tipo de videojuegos (EXCEPTO gachas), socializar (mentira, ahora será; antes me daba ansiedad), productividad, aprendiendo idiomas, debate, filosofía, y otras cosas que ya ni me acuerdo. Ah, apoyar y reírme del Paul.`,
      favoriteFood: "Todo lo que tenga harina",
      favoriteColor: "Azúl, Dorado.",
      favoriteDessert: "ni idea",
      favoriteMusicGenre: "todo",
      roleId: 1,
    },
  ],
});

// Events

await prisma.events.create({
  data: {
    title: "Event 1",
    description: "Description 1",
    date: new Date(),
    files: {
      create: [
        {
          title: "File 1",
          description: "Description 1",
          url: "https://example.com",
        },
        {
          title: "File 2",
          description: "Description 2",
          url: "https://example.com",
        },
      ],
    },
  },
});
