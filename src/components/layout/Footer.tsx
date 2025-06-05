import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Logo className="h-10 w-auto mb-4" inverted />
            <p className="text-neutral-300 mt-4">
              Encuentra parqueaderos disponibles en tiempo real en el centro de
              Montería. Hecho en Montería para Montería.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problema"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Problemática
                </a>
              </li>
              <li>
                <a
                  href="#solucion"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Nuestra Solución
                </a>
              </li>
              <li>
                <a
                  href="#tecnologia"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Tecnología
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-neutral-300" />
                <span className="text-neutral-300">
                  contacto.meparqueo@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-neutral-300" />
                <span className="text-neutral-300">+57 3116347712</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>&copy; {currentYear} Me Parqueo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;