import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, AlertCircle, Shield, Ban } from 'lucide-react';

const problems = [
  {
    icon: <Clock size={36} className="text-error" />,
    title: 'Pérdida de tiempo',
    description: 'Dar vueltas por el centro buscando un parqueadero disponible, a veces sin éxito.'
  },
  {
    icon: <AlertCircle size={36} className="text-warning" />,
    title: 'Falta de información',
    description: 'Desconocer qué parqueaderos están disponibles, sus tarifas y horarios.'
  },
  {
    icon: <Shield size={36} className="text-error" />,
    title: 'Inseguridad',
    description: 'Preocupación por la seguridad del vehículo al dejarlo en lugares desconocidos.'
  },
  {
    icon: <Ban size={36} className="text-warning" />,
    title: 'Zona ZER',
    description: 'Restricciones y regulaciones de la Zona de Estacionamiento Regulado.'
  }
];

const ProblemSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-neutral-50" id="problema">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            La problemática del parqueo en Montería
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Parquear en el centro de Montería se ha convertido en un dolor de cabeza para los ciudadanos y visitantes.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card card-hover flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-white shadow-soft">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-neutral-600">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-neutral-100 p-6 sm:p-8 rounded-xl border border-neutral-200"
        >
          <blockquote className="text-xl italic text-neutral-700 mb-4">
            "Siempre que voy al centro tengo que salir con una hora de anticipación solo para encontrar dónde parquear mi carro. Es frustrante dar vueltas y vueltas sin encontrar un espacio disponible."
          </blockquote>
          <p className="font-medium text-right">— Carlos M., conductor en Montería</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;