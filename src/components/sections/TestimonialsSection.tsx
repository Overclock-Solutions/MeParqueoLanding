import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Antes me tomaba hasta 30 minutos encontrar dónde parquear, ahora con Me Parqueo lo encuentro en menos de 5 minutos. Es un cambio total en mi rutina diaria.",
    author: "María G.",
    role: "Contadora",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    content: "Como dueño de un parqueadero, he notado un aumento del 40% en la ocupación desde que me uní a Me Parqueo. Los clientes llegan directo sin dar vueltas.",
    author: "Carlos R.",
    role: "Dueño de parqueadero",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    content: "Me encanta poder ver las tarifas antes de llegar. Ya no me llevo sorpresas desagradables y puedo planificar mejor mis gastos cuando visito el centro.",
    author: "Laura M.",
    role: "Profesora",
    rating: 4,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const generateStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section className="section bg-neutral-50" id="testimonios">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Lo que Dicen Nuestros Usuarios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experiencias reales de personas que utilizan Me Parqueo en su día a día
          </motion.p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-soft p-6 relative"
            >
              <div className="absolute -top-6 left-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="flex mb-4">
                  {generateStars(testimonial.rating)}
                </div>
                <p className="text-neutral-700 mb-4">"{testimonial.content}"</p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-medium mb-4">¿Quieres compartir tu experiencia con Me Parqueo?</p>
          <a 
            href="#contacto" 
            className="btn-primary"
          >
            Enviar testimonio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;