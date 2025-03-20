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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with member name and role */}
        <div className="bg-white shadow-sm rounded-lg mb-6 overflow-hidden">
          <div className="bg-blue-600 text-white p-6 rounded-t-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                <img
                  src={person.photo || noImage.src}
                  alt={person.fullName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {person.fullName}
                </h1>
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-amber-100 p-1.5 rounded-full">
                    <MilitaryTech className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-xl font-medium">
                    {(person.role as Role).role}
                  </span>
                </div>

                {person.alias && (
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-1.5 rounded-full">
                      <Person className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium">Alias: {person.alias}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-md border border-purple-100">
                <div className="bg-purple-100 p-1.5 rounded-full">
                  <CalendarMonth className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Fecha de nacimiento
                  </span>
                  <p className="font-medium">
                    {new Date(person.birthday).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              {socials.length > 0 && (
                <div className="flex flex-wrap gap-3 ml-auto">
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
        </div>

        {/* Two column layout for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Biography and Message */}
          <div className="lg:col-span-2 space-y-6">
            {/* Biography Section */}
            {person.bio && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-blue-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <div className="bg-blue-100 p-1.5 rounded-full">
                      <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    Biografía
                  </h2>
                </div>
                <div className="p-6 bg-blue-50 border-t border-blue-100">
                  <p className="text-gray-700 whitespace-pre-line">
                    {person.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Message to Party */}
            {person.message && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-teal-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <div className="bg-teal-100 p-1.5 rounded-full">
                      <Article className="h-5 w-5 text-teal-600" />
                    </div>
                    Mensaje al Partido
                  </h2>
                </div>
                <div className="p-6 bg-teal-50 border-t border-teal-100">
                  <div className="text-gray-700 whitespace-pre-line">
                    {person.message}
                  </div>
                </div>
              </div>
            )}

            {/* Dreams and Aspirations */}
            {person.dreamAspiration && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-amber-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <div className="bg-amber-100 p-1.5 rounded-full">
                      <Star className="h-5 w-5 text-amber-600" />
                    </div>
                    Sueños y Aspiraciones
                  </h2>
                </div>
                <div className="p-6 bg-amber-50 border-t border-amber-100">
                  <p className="text-gray-700">{person.dreamAspiration}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Personal Information */}
          <div className="space-y-6">
            {/* Hobbies */}
            {person.hobby && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-pink-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <div className="bg-pink-100 p-1.5 rounded-full">
                      <Favorite className="h-5 w-5 text-pink-600" />
                    </div>
                    Intereses
                  </h2>
                </div>
                <div className="p-6 bg-pink-50 border-t border-pink-100">
                  <div className="flex flex-wrap gap-2">
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
              </div>
            )}

            {/* Favorites */}
            {(person.favoriteFood ||
              person.favoriteDessert ||
              person.favoriteColor ||
              person.favoriteSerieMovie ||
              person.favoriteMusicGenre ||
              person.favoriteVideoGame) && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-purple-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <div className="bg-purple-100 p-1.5 rounded-full">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    Información Personal
                  </h2>
                </div>
                <div className="p-6 bg-purple-50 border-t border-purple-100">
                  <div className="space-y-4">
                    {person.favoriteFood && (
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 p-1.5 rounded-full">
                          <Dining className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700">
                            Comida favorita
                          </h4>
                          <p className="text-gray-600">{person.favoriteFood}</p>
                        </div>
                      </div>
                    )}

                    {person.favoriteDessert && (
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 p-1.5 rounded-full">
                          <Cake className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700">
                            Postre favorito
                          </h4>
                          <p className="text-gray-600">
                            {person.favoriteDessert}
                          </p>
                        </div>
                      </div>
                    )}

                    {person.favoriteColor && (
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <Palette className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700">
                            Color favorito
                          </h4>
                          <p className="text-gray-600">
                            {person.favoriteColor}
                          </p>
                        </div>
                      </div>
                    )}

                    {person.favoriteSerieMovie && (
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 p-1.5 rounded-full">
                          <TheaterComedy className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700">
                            Serie/Película favorita
                          </h4>
                          <p className="text-gray-600">
                            {person.favoriteSerieMovie}
                          </p>
                        </div>
                      </div>
                    )}

                    {person.favoriteMusicGenre && (
                      <div className="flex items-start gap-3">
                        <div className="bg-cyan-100 p-1.5 rounded-full">
                          <MusicNote className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700">
                            Género musical
                          </h4>
                          <p className="text-gray-600">
                            {person.favoriteMusicGenre}
                          </p>
                        </div>
                      </div>
                    )}

                    {person.favoriteVideoGame && (
                      <div className="flex items-start gap-3">
                        <div className="bg-violet-100 p-1.5 rounded-full">
                          <SportsEsports className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700">
                            Videojuego favorito
                          </h4>
                          <p className="text-gray-600">
                            {person.favoriteVideoGame}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
