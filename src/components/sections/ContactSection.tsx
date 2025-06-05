import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Send } from "lucide-react";
import { useStore } from "../../store";
import emailjs from "@emailjs/browser"; // Asegúrate de tener esto arriba

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { submitContactForm, formSubmitted } = useStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    role: "user", // 'user' or 'owner'
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          role: formData.role,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      submitContactForm(formData); 
    } catch (error) {
      console.error("❌ Error al enviar el mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    }
  };
  return (
    <section className="section bg-neutral-50" id="contacto">
      <div className="container-custom">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contacto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Estamos aquí para responder tus preguntas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Ponte en contacto</h3>
            <p className="text-neutral-600 mb-8">
              Ya sea que tengas preguntas sobre la app, quieras unirte como
              parqueadero, o simplemente quieras dejarnos un comentario, estamos
              aquí para escucharte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">
                    Correo Electrónico
                  </h4>
                  <p className="text-neutral-600">
                    contacto.meparqueo@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Teléfono</h4>
                  <p className="text-neutral-600">+57 31163477127</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-soft p-8"
          >
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-success/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-success" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-neutral-600">
                  Gracias por contactarnos. Hemos recibido tu mensaje y te
                  responderemos lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    ¿Eres usuario o dueño de parqueadero?
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="user">Usuario</option>
                    <option value="owner">Dueño de parqueadero</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
