
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import SuccessStories from './pages/SuccessStories';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LegalPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
    <h1 className="text-4xl font-bold font-headline mb-8">{title}</h1>
    <div className="prose prose-slate lg:prose-xl space-y-6 text-slate-600 leading-relaxed">
      <p>Este es un texto legal de ejemplo para Grupo Euro Trabajo.</p>
      <p>Nuestro compromiso con la transparencia y la legalidad es total. Todos nuestros procesos de reclutamiento siguen estrictas normativas europeas e internacionales de contratación ética.</p>
      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Protección de Datos (RGPD)</h2>
      <p>Grupo Euro Trabajo S.L. garantiza que el tratamiento de sus datos personales se realiza conforme al Reglamento General de Protección de Datos (UE) 2016/679. Sus datos solo se utilizarán con el fin de gestionar su carrera laboral hacia Europa.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/historias-de-exito" element={<SuccessStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terminos-y-condiciones" element={<LegalPage title="Términos y Condiciones" />} />
            <Route path="/politica-de-privacidad" element={<LegalPage title="Política de Privacidad" />} />
            <Route path="/politica-de-cookies" element={<LegalPage title="Política de Cookies" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
