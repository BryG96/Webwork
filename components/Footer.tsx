
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Globe className="text-emerald-500" size={32} />
              <span className="text-2xl font-bold font-headline tracking-tight text-white">
                Grupo Euro<span className="text-emerald-500">Trabajo</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Expertos en conectar el talento de habla hispana con las mejores corporaciones en el continente europeo. Tu éxito profesional es nuestra misión.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-headline text-lg font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/jobs" className="hover:text-emerald-400 transition-colors">Ofertas de Trabajo</Link></li>
              <li><Link to="/nosotros" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/historias-de-exito" className="hover:text-emerald-400 transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog & Consejos</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-white font-headline text-lg font-bold">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terminos-y-condiciones" className="hover:text-emerald-400 transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/politica-de-privacidad" className="hover:text-emerald-400 transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/politica-de-cookies" className="hover:text-emerald-400 transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-headline text-lg font-bold">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0" size={20} />
                <span>Paseo de la Castellana 200, 28046 Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-500 shrink-0" size={20} />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0" size={20} />
                <span>info@grupoeurotrabajo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Grupo Euro Trabajo S.L. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/mapa-sitio" className="hover:text-white transition-colors">Mapa del Sitio</Link>
            <span>Hecho con confianza en Europa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
