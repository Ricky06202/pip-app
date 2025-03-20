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
        <div className="bg-white shadow-sm rounded-lg mb-6">
          <div className="bg-blue-800 text-white p-6 rounded-t-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-white shadow-md flex-shrink-0">
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
                  <MilitaryTech className="h-5 w-5" />
                  <span className="text-xl font-medium">
                    {(person.role as Role).role}
                  </span>
                </div>

                {person.alias && (
                  <div className="text-white/80 text-sm">
                    <span className="font-medium">Alias:</span> {person.alias}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
                <CalendarMonth className="h-5 w-5 text-gray-600" />
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
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-700" />
                    Biografía
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 whitespace-pre-line">
                    {person.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Message to Party */}
            {person.message && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Article className="h-5 w-5 text-blue-700" />
                    Mensaje al Partido
                  </h2>
                </div>
                <div className="p-6">
                  <div className="text-gray-700 whitespace-pre-line">
                    {person.message}
                  </div>
                </div>
              </div>
            )}

            {/* Dreams and Aspirations */}
            {person.dreamAspiration && (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-700" />
                    Sueños y Aspiraciones
                  </h2>
                </div>
                <div className="p-6">
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
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Favorite className="h-5 w-5 text-blue-700" />
                    Intereses
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {person.hobby
                      ?.split(/,(?![^(]*\)) | y (?![^(]*\))/)
                      .map((hobby, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
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
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-700" />
                    Información Personal
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {person.favoriteFood && (
                      <div className="flex items-start gap-3">
                        <Dining className="h-5 w-5 text-gray-500 mt-0.5" />
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
                        <Cake className="h-5 w-5 text-gray-500 mt-0.5" />
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
                        <Palette className="h-5 w-5 text-gray-500 mt-0.5" />
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
                        <TheaterComedy className="h-5 w-5 text-gray-500 mt-0.5" />
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
                        <MusicNote className="h-5 w-5 text-gray-500 mt-0.5" />
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
                        <SportsEsports className="h-5 w-5 text-gray-500 mt-0.5" />
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
