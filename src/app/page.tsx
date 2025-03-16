"use client";
import { Fade } from "react-awesome-reveal";
import { Hero } from "@home/components/hero";
import { Team } from "@home/components/team";
import { Timeline } from "@home/components/timeline";
import { usePersons } from "@shared/hooks/usePersons";
import { Person, Role } from "../modules/shared/types/APIObjectsTypes";

export default function Home() {
  // Datos de ejemplo para los miembros del equipo
  const teamMembers = usePersons();

  // Actualizar los datos de ejemplo para la línea de tiempo con fechas más detalladas
  const timelineEvents = [
    {
      id: 1,
      date: "2015-03-15",
      title: "Fundación",
      description:
        "Nuestra organización fue fundada con la misión de transformar el sector.",
    },
    {
      id: 2,
      date: "2015-07-22",
      title: "Primera Oficina",
      description:
        "Abrimos nuestra primera oficina oficial en el centro de la ciudad.",
    },
    {
      id: 3,
      date: "2017-02-10",
      title: "Expansión Internacional",
      description:
        "Abrimos nuestras primeras oficinas internacionales en Europa.",
    },
    {
      id: 4,
      date: "2017-09-05",
      title: "Apertura en Asia",
      description: "Expandimos nuestras operaciones al mercado asiático.",
    },
    {
      id: 5,
      date: "2019-04-18",
      title: "Lanzamiento de Producto Estrella",
      description: "Lanzamos nuestro producto más innovador hasta la fecha.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      date: "2019-11-30",
      title: "Primer Millón de Usuarios",
      description: "Alcanzamos nuestro primer millón de usuarios activos.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      date: "2021-01-15",
      title: "Premio a la Innovación",
      description:
        "Recibimos reconocimiento internacional por nuestras contribuciones al sector.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      date: "2021-08-07",
      title: "Nueva Sede Central",
      description:
        "Inauguramos nuestra nueva sede central con instalaciones de vanguardia.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      date: "2023-02-28",
      title: "Expansión Global",
      description: "Llegamos a 50 países en los cinco continentes.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 10,
      date: "2023-10-12",
      title: "Presente y Futuro",
      description: "Continuamos creciendo y expandiendo nuestra visión global.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <Hero
        title="Nuestra Organización"
        description="Transformando el futuro a través de la innovación y el compromiso con la excelencia."
      />

      {/* Team Section */}
      <section id="equipo" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member: Person) => (
              <Fade direction="up" triggerOnce key={member.id}>
                <Team
                  member={{
                    id: member.id!,
                    name: member.fullName,
                    role: (member.role as Role).role,
                    image: member.photo,
                  }}
                />
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="historia" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestra Historia
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>
    </main>
  );
}
