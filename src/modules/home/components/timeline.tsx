"use client";

import { useRef, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export interface TimelineEvent {
  id: number;
  date: string; // formato YYYY-MM-DD
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

// Función para formatear la fecha
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return date.toLocaleDateString("es-ES", options);
};

// Función para obtener el año de una fecha
const getYear = (dateString: string) => {
  return dateString.split("-")[0];
};

// Función para agrupar eventos por año
const groupEventsByYear = (events: TimelineEvent[]) => {
  const grouped: Record<string, TimelineEvent[]> = {};

  // Crear una copia para no modificar el array original
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  sortedEvents.forEach((event) => {
    const year = getYear(event.date);
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(event);
  });

  return grouped;
};

export function Timeline({ events }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeYears, setActiveYears] = useState<Record<string, boolean>>({});

  // Memoizar los eventos agrupados para evitar recálculos en cada render
  const groupedEvents = useRef(groupEventsByYear(events));
  const years = useRef(Object.keys(groupedEvents.current).sort());

  // Configurar observadores una sola vez al montar el componente
  useEffect(() => {
    // Inicializar el estado de años activos
    const initialActiveYears: Record<string, boolean> = {};
    years.current.forEach((year) => {
      initialActiveYears[year] = false;
    });
    setActiveYears(initialActiveYears);

    // Configurar observadores de intersección para cada sección de año
    const yearObserver = new IntersectionObserver(
      (entries) => {
        const updatedYears: Record<string, boolean> = {};
        let hasChanges = false;

        entries.forEach((entry) => {
          const yearId = entry.target.getAttribute("data-year");
          if (yearId) {
            updatedYears[yearId] = entry.isIntersecting;
            hasChanges = true;
          }
        });

        // Solo actualizar el estado si hay cambios reales
        if (hasChanges) {
          setActiveYears((prev) => ({
            ...prev,
            ...updatedYears,
          }));
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px -300px 0px",
        threshold: 0,
      }
    );

    // Observar cada sección de año
    const yearSections = document.querySelectorAll(".year-section");
    yearSections.forEach((section) => {
      yearObserver.observe(section);
    });

    return () => {
      yearObserver.disconnect();
    };
  }, []); // Dependencia vacía para que solo se ejecute al montar

  return (
    <div ref={timelineRef} className="relative">
      {/* Línea vertical principal */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

      {years.current.map((year, yearIndex) => (
        <div key={year} className="mb-16 relative">
          {/* Indicador de año que sigue al scroll */}
          <div
            className={`sticky top-4 z-30 w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 ${
              activeYears[year]
                ? "bg-primary scale-110"
                : "bg-primary/70 scale-100"
            }`}
          >
            {year}
          </div>

          {/* Sección de eventos del año */}
          <div className="year-section" data-year={year}>
            {groupedEvents.current[year].map((event, eventIndex) => (
              <Fade direction="up" triggerOnce damping={0.2} key={event.id}>
                <div
                  className={`mb-16 flex flex-col ${
                    eventIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Punto en la línea de tiempo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>

                  {/* Contenido */}
                  <div
                    className={`w-full md:w-1/2 ${
                      eventIndex % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } mb-8 md:mb-0`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-4">
                        {formatDate(event.date)}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Imagen */}
                  {event.image && (
                    <div
                      className={`w-full md:w-1/2 ${
                        eventIndex % 2 === 0 ? "md:pl-12" : "md:pr-12"
                      }`}
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
