
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/', { state: { scrollToApply: true } });
    
    // Si ya estamos en la home, el useEffect de Home.tsx se encargará, 
    // pero forzamos el scroll por si acaso para una respuesta inmediata.
    if (window.location.hash === '#/' || window.location.hash === '') {
      const element = document.getElementById('aplicar');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Ofertas de Trabajo', path: '/jobs' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Historias de Éxito', path: '/historias-de-exito' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
              <Globe size={24} />
            </div>
            <span className={`text-xl font-bold font-headline tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Grupo Euro<span className="text-emerald-500">Trabajo</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleApplyClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-1 shadow-lg"
            >
              Aplicar Ahora <ChevronRight size={16} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-headline font-bold text-slate-900 hover:text-emerald-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleApplyClick}
            className="w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold"
          >
            Aplicar Ahora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
