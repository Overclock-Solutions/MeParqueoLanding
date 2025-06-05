import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Rocket, Heart } from "lucide-react";

const ImpactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: "60+", label: "Parqueaderos censados" },
    { value: "56", label: "Parqueaderos para carros" },
    { value: "10M+", label: "COP para dotación tecnológica" },
  ];

  return (
    <section className="section bg-neutral-900 text-white" id="impacto">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            Impacto y Visión a Futuro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90"
          >
            Más que una app, es una solución para transformar la ciudad
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold mb-2 text-primary-light">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-primary-light" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Reactivación Comercial
            </h3>
            <p className="text-white/80">
              Facilitar el parqueo en el centro de Montería contribuirá
              directamente a la reactivación del comercio local, permitiendo que
              más personas visiten los establecimientos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Heart size={24} className="text-primary-light" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Desarrollo Local</h3>
            <p className="text-white/80">
              Me Parqueo es un ejemplo de cómo podemos desarrollar soluciones
              tecnológicas desde y para nuestra ciudad, impulsando el ecosistema
              de innovación local.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Rocket size={24} className="text-primary-light" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expansión Nacional</h3>
            <p className="text-white/80">
              Nuestra visión a futuro es expandir Me Parqueo a otras ciudades
              colombianas que enfrentan problemas similares, creando una red
              nacional de parqueaderos inteligentes.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#download"
            className="btn-secondary btn-lg inline-flex items-center"
          >
            Forma parte del cambio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
