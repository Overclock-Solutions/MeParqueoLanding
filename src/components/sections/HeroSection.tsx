import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import AppStoreButtons from "../ui/AppStoreButtons";

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const problemSection = document.getElementById("problema");
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-hero-pattern"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="font-bold mb-6">
              ¿Cansado de buscar parqueadero en el centro de Montería?
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Me Parqueo te muestra en tiempo real dónde hay parqueaderos
              disponibles cerca de ti, con fotos, tarifas y medios de pago.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href="#download"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md flex items-center shadow-md transition-colors"
              >
                <Download size={20} className="mr-2" />
                Descargar App
              </a>

              <button
                onClick={scrollToNextSection}
                className="bg-transparent hover:bg-white/20 text-white border border-white py-3 px-6 rounded-md transition-colors"
              >
                Conoce más
              </button>
            </div>

            <AppStoreButtons className="mt-2" />
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-xs sm:max-w-sm">
              {/* Phone mockup - Completamente rediseñado */}
              <div className="relative z-10 border-8 border-black rounded-[3rem] shadow-xl overflow-hidden">
                {/* Removido aspect ratio fijo que causaba problemas */}
                <div className="bg-black">
                  {/* Usado una imagen que debe tener proporción 9:19 (1080x2280px) */}
                  <img
                    src="https://res.cloudinary.com/dxmwapxmo/image/upload/v1746335307/meparqueov4.png"
                    alt="Me Parqueo App Interface"
                    className="w-full object-cover"
                    style={{ aspectRatio: "9/19" }}
                  />
                </div>
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-primary-light/40 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Desliza</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} className="text-white/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
