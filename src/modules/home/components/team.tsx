"use client";

import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import noImage from "@/public/no_image.jpeg";

interface SocialLink {
  platform: "linkedin" | "twitter" | "github" | "instagram" | "email";
  url: string;
}

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image?: string;
    bio?: string;
    socials?: SocialLink[];
    department?: string;
  };
}

export function Team({ member }: TeamMemberProps) {
  // Función para renderizar el icono correcto según la plataforma
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <LinkedIn className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "github":
        return <GitHub className="w-5 h-5" />;

      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "email":
        return <Email className="w-5 h-5" />;
      default:
        return null;
    }
  };

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
      <div className="aspect-square relative overflow-hidden rounded-t-lg">
        <img
          src={member.image || noImage.src}
          alt={`Foto de ${member.name}`}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`}
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Información básica visible siempre */}
      <div className="p-4 bg-white transition-all duration-300 group-hover:bg-gray-50">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>

        {/* Bio con expansión */}
        {member.bio && (
          <div className="mt-2 overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
            <p className="text-sm text-gray-500 line-clamp-3">{member.bio}</p>
          </div>
        )}

        {/* Enlaces sociales */}
        {member.socials && member.socials.length > 0 && (
          <div className="mt-3 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {member.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label={`${social.platform} de ${member.name}`}
              >
                {renderSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Overlay para interacción en dispositivos móviles */}
      <div className="absolute inset-0 md:hidden bg-black/0 hover:bg-black/10 transition-colors z-10"></div>

      {/* Borde decorativo */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-300"></div>

      {/* Efecto de brillo en hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
    </div>
  );
}
