import { ArrowDownward } from "@mui/icons-material";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Imagen representativa de la organización"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeIn"
          style={{ animation: "fadeIn 1s ease-out forwards" }}
        >
          {title}
        </h1>
        <p
          className="text-xl md:text-2xl max-w-3xl mx-auto opacity-0"
          style={{ animation: "fadeIn 1s ease-out 0.5s forwards" }}
        >
          {description}
        </p>
        <div
          className="mt-10 opacity-0"
          style={{ animation: "fadeIn 1s ease-out 1s forwards" }}
        >
          <a
            href="#historia"
            className="px-8 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Flecha de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#equipo" className="text-white">
          <ArrowDownward className="h-6 w-6" />
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
