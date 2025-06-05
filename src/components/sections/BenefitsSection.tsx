import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Building, Clock, Wallet, Users, LineChart } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const [userRef, userInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ownerRef, ownerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const userBenefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Ahorra tiempo',
      description: 'Encuentra parqueadero rápidamente sin dar vueltas por el centro.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-primary" />,
      title: 'Conoce las tarifas',
      description: 'Visualiza precios y métodos de pago antes de llegar al parqueadero.'
    },
    {
      icon: <Car className="h-6 w-6 text-primary" />,
      title: 'Seguridad para tu vehículo',
      description: 'Elige parqueaderos con buenas calificaciones de otros usuarios.'
    }
  ];

  const ownerBenefits = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Atrae más clientes',
      description: 'Mayor visibilidad para tu parqueadero en toda la ciudad.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: 'Mejora tu ocupación',
      description: 'Aumenta el porcentaje de ocupación de tu parqueadero.'
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: 'Optimiza tu operación',
      description: 'Accede a estadísticas sobre uso y preferencias de los usuarios.'
    }
  ];

  return (
    <section className="section" id="beneficios">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Beneficios para Todos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Me Parqueo crea valor para conductores y dueños de parqueaderos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Users */}
          <motion.div
            ref={userRef}
            initial={{ opacity: 0, y: 20 }}
            animate={userInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Car size={32} className="text-primary mr-4" />
              <h3 className="text-2xl font-semibold">Para Conductores</h3>
            </div>

            <div className="space-y-6">
              {userBenefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={userInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-soft"
                >
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">{benefit.title}</h4>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={userInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <a 
                href="#download" 
                className="btn-primary"
              >
                Descargar App
              </a>
            </motion.div>
          </motion.div>

          {/* For Parking Owners */}
          <motion.div
            ref={ownerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ownerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Building size={32} className="text-secondary mr-4" />
              <h3 className="text-2xl font-semibold">Para Dueños de Parqueaderos</h3>
            </div>

            <div className="space-y-6">
              {ownerBenefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={ownerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-soft"
                >
                  <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-lg mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">{benefit.title}</h4>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ownerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 text-center"
            >
              <a 
                href="#contacto" 
                className="btn-outline"
              >
                Contactar
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;