import { getPerson } from "@shared/services/personsServices";
import { notFound } from "next/navigation";
import noImage from "@public/no_image.jpeg";
import { getSocialLinks } from "@shared/logic/getSocialLinks";
import { parseMember } from "@shared/logic/parseMember";
import { SocialIcon } from "@shared/components/socialIcon";
import type { Role } from "@shared/types/APIObjectsTypes";
import {
  Article,
  Cake,
  CalendarMonth,
  Dining,
  Favorite,
  Info,
  MilitaryTech,
  MusicNote,
  Palette,
  Person,
  SportsEsports,
  Star,
  TheaterComedy,
} from "@mui/icons-material";

export default async function MemberPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  if (!id) {
    return notFound();
  }

  const person = await getPerson(Number(id));

  if (!person) {
    return notFound();
  }

  const socials = getSocialLinks(parseMember(person));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Hero Section - Rediseñado */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8 transition-all hover:shadow-lg">
        {/* Banner superior con degradado */}
        <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 w-full"></div>

        <div className="px-6 pb-6">
          <div className="flex flex-col items-center md:items-start md:flex-row md:gap-8">
            {/* Foto con posición ajustada */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white p-1 -mt-16 md:-mt-20 mb-4 md:mb-0 overflow-hidden border-4 border-white shadow-xl">
              <img
                src={person.photo || noImage.src}
                alt={person.fullName}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Nombre e información principal */}
            <div className="flex-1 text-center md:text-left md:pt-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {person.fullName}
              </h1>

              <div className="flex flex-col divide-y divide-gray-100">
                <div className="flex justify-between items-center gap-3 py-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Person className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500">Alias</h3>
                    <p className="text-lg font-medium text-gray-800">
                      {person.alias}
                    </p>
                  </div>

                  <div className="bg-purple-100 p-2 rounded-full">
                    <CalendarMonth className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500">
                      Fecha de nacimiento
                    </h3>
                    <p className="text-lg font-medium text-gray-800">
                      {new Date(person.birthday).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <MilitaryTech className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Rol en el Partido
                    </h3>
                    <p className="text-lg font-medium text-gray-800">
                      {(person.role as Role).role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          {socials.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start border-t pt-4 border-gray-100">
              {socials.map((network, index) => (
                <SocialIcon
                  key={index}
                  personName={person.fullName}
                  platform={network.platform}
                  url={network.url}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Información Personal */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8 transition-all hover:shadow-lg">
        <div className="flex items-center gap-2 mb-4 border-b pb-2 border-gray-200">
          <Info className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Información Personal
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Biografía */}
          {person.bio && (
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Person className="h-5 w-5 text-blue-600" />
                Biografía:
              </h3>
              <p className="text-gray-700 ml-7">{person.bio}</p>
            </div>
          )}

          {/* Hobbies */}
          <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Favorite className="h-5 w-5 text-pink-600" />
              Hobbies:
            </h3>
            <div className="flex flex-wrap gap-2 ml-7">
              {person.hobby
                ?.split(/,(?![^(]*\)) | y (?![^(]*\))/)
                .map((hobby, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                  >
                    {hobby.trim()}
                  </span>
                ))}
            </div>
          </div>

          {/* Favoritos */}
          {(person.favoriteFood ||
            person.favoriteDessert ||
            person.favoriteColor ||
            person.favoriteSerieMovie ||
            person.favoriteMusicGenre ||
            person.favoriteVideoGame) && (
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Favoritos:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-7">
                {person.favoriteFood && (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <Dining className="h-4 w-4 text-amber-600" />
                      Comida:
                    </h4>
                    <p className="text-gray-600">{person.favoriteFood}</p>
                  </div>
                )}
                {person.favoriteDessert && (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <Cake className="h-4 w-4 text-red-500" />
                      Postre:
                    </h4>
                    <p className="text-gray-600">{person.favoriteDessert}</p>
                  </div>
                )}
                {person.favoriteColor && (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <Palette className="h-4 w-4 text-green-600" />
                      Color:
                    </h4>
                    <p className="text-gray-600">{person.favoriteColor}</p>
                  </div>
                )}
                {person.favoriteSerieMovie && (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <TheaterComedy className="h-4 w-4 text-indigo-600" />
                      Serie/Movie:
                    </h4>
                    <p className="text-gray-600">{person.favoriteSerieMovie}</p>
                  </div>
                )}
                {person.favoriteMusicGenre && (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <MusicNote className="h-4 w-4 text-cyan-600" />
                      Género Musical:
                    </h4>
                    <p className="text-gray-600">{person.favoriteMusicGenre}</p>
                  </div>
                )}
                {person.favoriteVideoGame && (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <SportsEsports className="h-4 w-4 text-violet-600" />
                      Videojuego:
                    </h4>
                    <p className="text-gray-600">{person.favoriteVideoGame}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Sueños y Aspiraciones */}
          {person.dreamAspiration && (
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-600" />
                Sueños y Aspiraciones:
              </h3>
              <p className="text-gray-700 ml-7">{person.dreamAspiration}</p>
            </div>
          )}
        </div>
      </div>

      {/* Mensaje al Partido */}
      {person.message && (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8 transition-all hover:shadow-lg">
          <div className="flex items-center gap-2 mb-4 border-b pb-2 border-gray-200">
            <Article className="h-6 w-6 text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Mensaje al Partido
            </h2>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 bg-teal-50 rounded-lg p-4 border border-teal-100">
            {person.message?.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
