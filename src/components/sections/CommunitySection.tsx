import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Clock, ShieldCheck } from 'lucide-react';
import AppStoreButtons from '../ui/AppStoreButtons';

const benefits = [
  {
    icon: <Clock size={28} className="text-white" />,
    title: 'Ahorra tiempo',
    description: 'Deja de dar vueltas buscando un lugar disponible. Con Me Parqueo lo encuentras directamente.'
  },
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: 'Mayor seguridad',
    description: 'Conoce de antemano los parqueaderos con mejor seguridad y valoraciones.'
  },
  {
    icon: <Users size={28} className="text-white" />,
    title: 'Apoya el comercio local',
    description: 'Al parquear con facilidad, tienes más tiempo para disfrutar del centro y sus comercios.'
  }
];

const CommunitySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section bg-primary-dark text-white" id="community">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            Únete a la Comunidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            Sé parte de la solución y ayuda a transformar la movilidad en Montería
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-xl md:text-2xl mb-8 text-white">
            Al utilizar y recomendar Me Parqueo, estás contribuyendo a mejorar la movilidad en Montería y apoyando el desarrollo de tecnología local.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/90">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Descarga la app y comienza a disfrutar de estos beneficios</h3>
          <div className="flex justify-center">
            <AppStoreButtons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;