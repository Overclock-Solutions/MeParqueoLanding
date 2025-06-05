import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppStoreButtons from "../ui/AppStoreButtons";

const DownloadSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="section bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden"
      id="download"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Descarga Me Parqueo y deja de preocuparte por encontrar dónde
            parquear
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white mb-8"
          >
            Disponible para iOS y Android. Descarga gratis y empieza a disfrutar
            del centro de Montería sin preocupaciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <AppStoreButtons />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* <div className="flex justify-center items-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl shadow-xl max-w-full h-auto"
              >
                <source src="/src/assets/app-showcase.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video *\/}
                <img
                  src="/src/assets/app-showcase.gif"
                  alt="Me Parqueo App en uso"
                  className="rounded-xl shadow-xl max-w-full h-auto"
                />
              </video>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
