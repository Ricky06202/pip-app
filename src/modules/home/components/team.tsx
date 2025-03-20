"use client";

import noImage from "@public/no_image.jpeg";
import { SocialIcon } from "@shared/components/socialIcon";
import { getSocialLinks } from "@shared/logic/getSocialLinks";
import Link from "next/link";

export interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  department?: string;
  email?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export function Team(member: TeamMemberProps) {
  const socials = getSocialLinks(member);

  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white">
      {/* Etiqueta de departamento (si existe) */}
      {member.department && (
        <div className="absolute top-2 right-2 z-20">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {member.department}
          </span>
        </div>
      )}

      {/* Contenedor de la imagen */}
      <Link
        href={{
          pathname: `/member/${member.name.split(" ").join("-")}`,
          query: { id: member.id },
        }}
      >
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <img
            src={member.image || noImage.src}
            alt={`Foto de ${member.name}`}
            className={` w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Información básica visible siempre */}
      <div className="p-4 bg-white transition-all duration-300 group-hover:bg-gray-50">
        <Link
          href={{
            pathname: `/member/${member.name.split(" ").join("-")}`,
            query: { id: member.id },
          }}
        >
          <h3 className="hover:text-primary transition-colors duration-200 hover:underline text-xl font-bold text-gray-900">
            {member.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">{member.role}</p>

        {/* Bio con expansión */}
        {member.bio && (
          <div className="mt-2 overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
            <p className="text-sm text-gray-500 line-clamp-3">{member.bio}</p>
          </div>
        )}

        {/* Enlaces sociales */}
        {socials.length > 0 && (
          <div className="mt-3 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {socials.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform}
                url={social.url}
                personName={member.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Overlay para interacción en dispositivos móviles */}
      <div className="absolute inset-0 md:hidden bg-black/0 hover:bg-black/10 transition-colors z-10 pointer-events-none"></div>

      {/* Borde decorativo */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-300 z-10 pointer-events-none"></div>

      {/* Efecto de brillo en hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 z-10 pointer-events-none"></div>
    </div>
  );
}
