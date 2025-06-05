import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('problema')}
            className="text-neutral-800 hover:text-primary font-medium"
          >
            Problema
          </button>
          <button 
            onClick={() => scrollToSection('solucion')}
            className="text-neutral-800 hover:text-primary font-medium"
          >
            Solución
          </button>
          <button 
            onClick={() => scrollToSection('tecnologia')}
            className="text-neutral-800 hover:text-primary font-medium"
          >
            Tecnología
          </button>
          <button 
            onClick={() => scrollToSection('beneficios')}
            className="text-neutral-800 hover:text-primary font-medium"
          >
            Beneficios
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-neutral-800 hover:text-primary font-medium"
          >
            Preguntas Frecuentes
          </button>
          <a 
            href="#download" 
            className="btn-primary flex items-center"
          >
            <Download size={20} className="mr-2" />
            Descargar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 text-neutral-800 hover:text-primary"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('problema')}
            className="text-neutral-800 hover:text-primary py-2 font-medium"
          >
            Problema
          </button>
          <button 
            onClick={() => scrollToSection('solucion')}
            className="text-neutral-800 hover:text-primary py-2 font-medium"
          >
            Solución
          </button>
          <button 
            onClick={() => scrollToSection('tecnologia')}
            className="text-neutral-800 hover:text-primary py-2 font-medium"
          >
            Tecnología
          </button>
          <button 
            onClick={() => scrollToSection('beneficios')}
            className="text-neutral-800 hover:text-primary py-2 font-medium"
          >
            Beneficios
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-neutral-800 hover:text-primary py-2 font-medium"
          >
            Preguntas Frecuentes
          </button>
          <a 
            href="#download" 
            className="btn-primary flex items-center justify-center"
            onClick={closeMenu}
          >
            <Download size={20} className="mr-2" />
            Descargar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;