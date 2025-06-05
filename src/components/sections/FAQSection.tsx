import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo sé si hay cupo en un parqueadero?",
    answer:
      "La app te muestra en tiempo real la disponibilidad de cada parqueadero. Los parqueaderos con cupo disponible aparecerán claramente marcados en el mapa con un indicador de ocupación.",
  },
  {
    question: "¿Qué pasa si no tengo internet?",
    answer:
      "Me Parqueo está diseñado para funcionar incluso con conexiones lentas o intermitentes. La app almacena en caché la información reciente para que puedas consultar los últimos datos disponibles aunque pierdas momentáneamente la conexión.",
  },
  {
    question: "¿Es gratis la aplicación?",
    answer:
      "Sí, la aplicación Me Parqueo es completamente gratuita para los usuarios. Nuestro modelo de negocio se basa en alianzas con los parqueaderos, no en cobrar a quienes buscan dónde aparcar.",
  },
  {
    question: "¿Dónde está disponible Me Parqueo?",
    answer:
      "Actualmente Me Parqueo está disponible exclusivamente en el centro de Montería, con planes de expansión a otras zonas de la ciudad y eventualmente a otras ciudades de Colombia.",
  },
  {
    question: "¿Puedo reservar un espacio de parqueo?",
    answer:
      "En la versión actual, Me Parqueo muestra la disponibilidad en tiempo real pero no permite reservas. Estamos trabajando en implementar un sistema de reservas para versiones futuras de la aplicación.",
  },
  {
    question: "¿Cómo puedo agregar mi parqueadero a la app?",
    answer:
      "Si eres dueño de un parqueadero y quieres aparecer en Me Parqueo, puedes contactarnos a través del formulario en nuestra página web o escribirnos directamente a contacto.meparqueo@gmail.com para iniciar el proceso de integración.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Resolvemos tus dudas sobre Me Parqueo
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-lg transition-all duration-200 ${
                  openIndex === index ? 'border-primary bg-primary/5' : 'border-neutral-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary" />
                  ) : (
                    <ChevronDown className="text-neutral-500" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-700 mb-4">
            ¿No encuentras respuesta a tu pregunta?
          </p>
          <a 
            href="#contacto" 
            className="btn-outline"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;