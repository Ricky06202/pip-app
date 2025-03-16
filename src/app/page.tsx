"use client";
import { Fade } from "react-awesome-reveal";
import { Hero } from "@home/components/hero";
import { Team } from "@home/components/team";
import { Timeline, TimelineEvent } from "@home/components/timeline";
import { usePersons } from "@shared/hooks/usePersons";
import { Person, Role } from "@shared/types/APIObjectsTypes";
import { useEvents } from "@shared/hooks/useEvents";
import { Event } from "@shared/types/APIObjectsTypes";

export default function Home() {
  // Datos de ejemplo para los miembros del equipo
  const teamMembers = usePersons();
  const eventsList = useEvents();
  const timelineEvents: TimelineEvent[] = eventsList.map((event: Event) => ({
    id: event.id!,
    date: event.date,
    title: event.title,
    description: event.description,
    image: undefined,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <Hero
        title="Partido Internacional Paulista"
        description="Unidos por un mismo objetivo, creando un futuro mejor!"
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
                    email: member.email,
                    github: member.github,
                    facebook: member.facebook,
                    instagram: member.instagram,
                    twitter: member.twitter,
                    linkedin: member.linkedin,
                    youtube: member.youtube,
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
          {timelineEvents.length > 0 && <Timeline events={timelineEvents} />}
        </div>
      </section>
    </main>
  );
}
