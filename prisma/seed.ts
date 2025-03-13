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
      favoriteSerieMovie: "El Origen de los guardianes",
      favoriteMusicGenre: "Techno",
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
      message: `Vice Secretario del Partido Internacional Paulista

Es un honor dirigirme a ustedes en esta ocasión tan especial. Mi nombre es Fredy Villarreal, estudiante de la Universidad Tecnológica de Panamá, sede Chiriquí. Nací el 10 de junio de 2002 y a lo largo de mi vida me he considerado una persona pacífica, siempre dispuesto a solucionar cualquier problema que surja dentro de nuestro partido.

En mi tiempo libre, disfruto de la lectura, ver animes y series, así como de la música, que considero una de mis grandes pasiones. Amo enfrentar nuevos desafíos y aprender constantemente, porque el crecimiento personal y colectivo es clave para el éxito de cualquier organización.

Ser parte del Partido Internacional Paulista es un privilegio que valoro enormemente. Compartir este camino con todos ustedes y trabajar juntos en la construcción de un futuro mejor es una experiencia única e inigualable. Espero que sigamos disfrutando de más momentos memorables y fortaleciendo nuestros lazos de unidad y compromiso.

¡ARRIBA EL PIP, CARAJO!`,
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
      favoriteVideoGame:
        "ni idea; tengo muchos, tal vez, For Honor, Dance of Fire and Ice, Halo CE (más probable este), Age of Empires 2, Call of Duty 2004, Call of Duty 2, RDR2, Dead Cells, Dark Souls, SEKIRO (god), Left 4 Dead 2, War in the East (mentira que aún soy malo), muchos más ahí",
      roleId: 1,
    },
    {
      fullName: "Aurora A. Acosta de León",
      birthday: new Date("2006-04-21"),
      email: "elly.oceans19@gmail.com",
      alias: "Chelly",
      hobby: "Leer, Ver k-dramas, Jugar en mi Psvita",
      favoriteColor: "Morado",
      dreamAspiration:
        "Construir una vida lejos del ruido de la ciudad, en un hogar donde reine la paz y el amor. Formar una familia con un hombre fiel, alguien que valore cada risa, cada locura y cada detalle.",
      message: `Soy Aurora A. Acosta de León, aunque muchos me conocen como Chelly o "tetona". Soy una mezcla de locura, dulzura y determinación. Amo perderme en los libros, emocionarme con los k-dramas y disfrutar de la adrenalina de los videojuegos en mi Psvita. El morado es mi color favorito, porque refleja mi esencia: intensa, profunda y llena de vida. Me encanta soñar en grande y vivir cada momento con pasión, siempre con una sonrisa en el rostro y una chispa de espontaneidad en el corazón. Mi mayor anhelo es construir una vida lejos del ruido de la ciudad, en un hogar donde reine la paz y el amor. Sueño con formar una familia con un hombre fiel, alguien que valore cada risa, cada locura y cada detalle. No quiero riquezas desbordantes, pero sí la estabilidad suficiente para vivir sin preocupaciones, disfrutando de cada instante con las personas que más amo. Sé que mi camino apenas comienza, pero tengo la certeza de que lograré cada una de mis metas con esfuerzo, fe y una dosis de mi inquebrantable determinación. Nací el 21 de abril del 2006 "cagada" pero nací, mi correo electrónico es elly.oceans19@gmail.com`,
      roleId: 5,
    },
    {
      fullName: "Paul Sánchez",
      birthday: new Date("2004-11-24"),
      email: "paulanibalsanchez24@gmail.com",
      alias: "Paul, Awebao, Idiota",
      hobby: "La guitarra, Skate, Jugar videojuegos, Películas",
      favoriteFood: "La pasta",
      favoriteColor: "Negro, rojo, blanco, gris",
      dreamAspiration: "Ser un músico reconocido",
      roleId: 6,
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

await prisma.events.create({
  data: {
    title: "Event 2",
    description: "Description 2",
    date: new Date("2022-10-01"),
    files: {
      create: [
        {
          title: "File 3",
          description: "Description 3",
          url: "https://example.com",
        },
      ],
    },
  },
});

await prisma.events.create({
  data: {
    title: "Event 3",
    description: "Description 3",
    date: new Date("2022-10-02"),
    files: {
      create: [
        {
          title: "File 4",
          description: "Description 4",
          url: "https://example.com",
        },
        {
          title: "File 5",
          description: "Description 5",
          url: "https://example.com",
        },
        {
          title: "File 6",
          description: "Description 6",
          url: "https://example.com",
        },
      ],
    },
  },
});
