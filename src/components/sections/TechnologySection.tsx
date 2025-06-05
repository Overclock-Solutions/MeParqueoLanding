import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wifi, Signal, Cloud, Zap } from 'lucide-react';

const TechnologySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Wifi className="h-6 w-6 text-primary" />,
      title: 'Dispositivo LoRa',
      description: 'Tecnología de bajo consumo que transmite datos de disponibilidad en tiempo real.'
    },
    {
      icon: <Signal className="h-6 w-6 text-primary" />,
      title: 'No requiere Internet',
      description: 'Funciona mediante una red de sensores independiente de la conexión a Internet.'
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: 'Datos en la nube',
      description: 'Toda la información se sincroniza y se almacena en la nube para mayor confiabilidad.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Bajo consumo',
      description: 'Tecnología de bajo consumo energético que permite una larga duración de batería.'
    }
  ];

  return (
    <section className="section bg-neutral-50" id="tecnologia">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Tecnología Innovadora
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hecha en Montería para Montería
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Tecnología LoRa" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right - Features */}
          <div ref={ref}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-semibold mb-6"
            >
              Cómo funciona nuestra tecnología
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-600 mb-8"
            >
              Utilizamos dispositivos con tecnología LoRa instalados en los parqueaderos para monitorear la disponibilidad en tiempo real. Esta información se transmite a nuestra aplicación, permitiéndote encontrar un lugar disponible sin dar vueltas innecesarias.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-soft"
                >
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 p-4 bg-primary/10 rounded-lg text-center"
            >
              <p className="font-semibold text-primary-dark">
                ¡Más de 60 parqueaderos censados y 56 para carros disponibles en nuestra red!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;