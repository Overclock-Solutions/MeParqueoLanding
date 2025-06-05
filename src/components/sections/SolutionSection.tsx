import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MapPin, FileText, Smartphone, Shield } from "lucide-react";

const features = [
  {
    icon: <Clock size={24} className="text-primary" />,
    title: "Disponibilidad en tiempo real",
    description:
      "Muestra la disponibilidad que hay en cada parqueadero al instante.",
  },
  {
    icon: <MapPin size={24} className="text-primary" />,
    title: "Ubicación precisa en el mapa",
    description:
      "Permite encontrar rápidamente los parqueaderos más cercanos y trazar sus rutas.",
  },
  {
    icon: <FileText size={24} className="text-primary" />,
    title: "Información detallada",
    description:
      "Horarios, tarifas, tipo de parqueadero (techado, vigilado, etc.).",
  },
  {
    icon: <Smartphone size={24} className="text-primary" />,
    title: "Interfaz simple y rápida",
    description:
      "Diseñada para usarse fácilmente desde el celular mientras se está en camino.",
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "Red de parqueaderos aliados",
    description: "Solo muestra opciones verificadas y seguras.",
  },
];

const SolutionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section" id="solucion">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Nuestra Solución: Me Parqueo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Una app móvil que te muestra en tiempo real dónde hay parqueaderos
            disponibles en el centro de Montería.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - App video mockup */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative z-20 border-8 border-black rounded-[3rem] shadow-xl overflow-hidden w-72 sm:w-80 md:w-96">
              <div className="aspect-[9/19] bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/dxmwapxmo/video/upload/v1746336031/demovideoparqueo.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="/src/assets/app-demo.gif"
                    alt="Me Parqueo App Demo"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl"></div>
            </div>

            <div className="absolute bottom-10 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/4 -left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Características principales
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <a href="#download" className="btn-primary text-lg px-8 py-4">
                Probar la app
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
