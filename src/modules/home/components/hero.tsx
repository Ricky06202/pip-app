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
          // src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fd9ac8c8a6bdceb3bc665a6203125a3fe709f6b15.jpg&sp=1742153312Te5b9773a14ccbcd4919f47cd537d4aafb96a57aa4235d9d8aa9b5a19725c5a36"
          src="https://w.wallhaven.cc/full/l8/wallhaven-l85ewq.jpg"
          alt="Imagen representativa de la organización"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
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
