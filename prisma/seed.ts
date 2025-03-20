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
    { role: "Mascota" },
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
        "Jugar Ajedrez, Aprender Nuevas Tecnologías, Gym, YouTube, Mangas y Anime",
      favoriteFood: "Ramen y Sushi",
      favoriteDessert: "Cinnabon",
      favoriteColor: "Celeste y Blanco",
      dreamAspiration:
        "Ser Desarrollador FullStack y Llegar a ser GM en Ajedrez",
      favoriteSerieMovie: "El Origen de los guardianes",
      favoriteMusicGenre: "Techno",
      roleId: 4,
    },
    {
      photo:
        "https://tf6vqc9e5h8pmy4g.public.blob.vercel-storage.com/Yeisury%20Perfil.jpg",
      fullName: "Yeisury Yarelis Coronel Saldaña",
      birthday: new Date("2003-08-07"),
      email: "ycoronels@icloud.com",
      instagram: "https://www.instagram.com/yeisu_07",
      facebook: "https://www.facebook.com/yeisury.coronel.5",
      alias: "Yeisu, Sury, Yary",
      hobby: "Natación, pasear, ir al gym",
      favoriteFood: "Pasta",
      favoriteDessert: "Dulce de chocolate",
      favoriteColor: "Verde y rosado",
      dreamAspiration:
        "Ser millonaria, tener mi marca se ropa, casarme con un hombre amoroso fiel, y cristiano, y lograr ser alguien con mucho conocimientos académicos",
      favoriteSerieMovie:
        "Besos kitty, rey eterno monarca, aterrizaje de emergencia en tu corazón",
      favoriteMusicGenre: "Pop, reguetón, bachata, baladas",
      favoriteVideoGame: "Fornite",
      message: "ARRIBA PAULISTAAAA!!! Siempre unidos",
      bio: "Soy una persona que siempre ve lo positivo de la vida, aunque esté pasando por cosas difíciles intento llevarlo de la mejor manera, me encanta estar con mis amigos ellos hacen que mi vida sea más divertida, fue lo mejor que me pudo pasar en la etapa universitaria. Y amo fugarme de las clases para seguir en el desorden, y que mi risa se escuche desde la entrada de la universidad, ellos no lo saben, pero hacen que mi etapa universitaria sea especial y siempre los recordaré, y ojalá esta amistad sea para siempre aún que cada uno seamos personas tan dintintas",
      roleId: 3,
    },
    {
      fullName: "Fredy O. Villarreal DG",
      birthday: new Date("2002-06-10"),
      email: "fredyhayabusa09@gmail.com",
      alias: "Swify",
      hobby: "Programar, gaming y ver series",
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
      hobby: `Percusión, leer variedad de cosas, estudiar sociología, economía, política, historia, aspectos de geografía, astronomía y otras ciencias, escribir (historias cortas), calistenia, basketball, volleyball, cualquier tipo de videojuegos (EXCEPTO gachas), socializar (mentira, ahora será; antes me daba ansiedad), productividad, aprendiendo idiomas, debate, filosofía, y otras cosas que ya ni me acuerdo. Ah! apoyar y reírme del Paul.`,
      favoriteFood: "Todo lo que tenga harina",
      favoriteColor: "Azul, Dorado.",
      favoriteDessert: "ni idea",
      favoriteMusicGenre: "todo",
      favoriteVideoGame:
        "ni idea; tengo muchos, tal vez, For Honor, Dance of Fire and Ice, Halo CE (más probable este), Age of Empires 2, Call of Duty 2004, Call of Duty 2, RDR2, Dead Cells, Dark Souls, SEKIRO (god), Left 4 Dead 2, War in the East (mentira que aún soy malo), muchos más ahí",
      roleId: 1,
    },
    {
      photo:
        "https://tf6vqc9e5h8pmy4g.public.blob.vercel-storage.com/Aurora%20Perfil.jpg",
      fullName: "Aracelly Aurora Acosta De León",
      birthday: new Date("2006-04-21"),
      email: "elly.oceans19@gmail.com",
      instagram: "https://www.instagram.com/aurorittaaa_/",
      alias: "Chelly, Ara, tetona",
      hobby:
        "Ver k-dramas, leer, escuchar música, ver tik tok, jugar fut, joder, jugar videojuegos, tomarle fotos al cielo, caminar por allí, ir al gym (recién)",
      favoriteFood: "Pasta",
      favoriteDessert: "Tres leches",
      favoriteColor: "Morado",
      dreamAspiration:
        "Ser una gran profesional con un hombre que me ame de verdad, ya saben la vida de ensueño",
      favoriteSerieMovie: "Belleza verdadera, a dos metros de tí",
      favoriteMusicGenre: "Le jalo a todo",
      favoriteVideoGame: "lo que sea en verdad",
      roleId: 5,
    },
    {
      photo:
        "https://tf6vqc9e5h8pmy4g.public.blob.vercel-storage.com/Paul%20Perfil.jpg",
      fullName: "Paul A. Sanchez J.",
      birthday: new Date("2004-11-24"),
      email: "paulanibalsanchez24@gmail.com",
      alias: "Paul, nose q mas",
      hobby: "Guitarra, dibujo, pintar, escribir canciones",
      favoriteFood: "Lasaña, macarrones, lo q sea de pasta",
      favoriteDessert: "Flan, cheesecake",
      favoriteColor: "Negro, blanco",
      dreamAspiration: "Tener algo de reconocimiento por mi musica",
      favoriteSerieMovie: "Piratas del caribe/Flash",
      favoriteMusicGenre: "Grunge, Hard rock, rock,",
      favoriteVideoGame: "Sea of thieves, Project zomboid, The forest",
      roleId: 8,
    },
    {
      fullName: "Roderick",
      birthday: new Date("2004-11-24"),
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
