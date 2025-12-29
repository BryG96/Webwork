
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, UserPlus, FileCheck, Briefcase, Star, Globe, CheckCircle, Quote } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';
import JobCard from '../components/JobCard';
import { JOBS_DATA, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Si el usuario viene de otra página con el estado de scroll
    if (location.state?.scrollToApply) {
      const element = document.getElementById('aplicar');
      if (element) {
        // Pequeño timeout para asegurar que el DOM esté listo y la navegación completada
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Limpiar el estado para que no vuelva a scrollear al recargar
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Ciudad Europea"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Líderes en recolocación europea para profesionales
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-headline text-white leading-[1.1] text-balance">
              Tu Carrera Sin <span className="text-emerald-400">Fronteras</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Conectamos talento excepcional de habla hispana con las empresas más innovadoras de Europa. Evaluamos tu perfil, gestionamos tu aplicación y te acompañamos en tu nueva vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#aplicar"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('aplicar')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-emerald-900/30 text-center"
              >
                Iniciar Aplicación
              </a>
              <Link
                to="/jobs"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20 text-center flex items-center justify-center gap-2"
              >
                Ver Vacantes <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar / Logos */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-8">Empresas que confían en nuestro talento</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['TechCorp', 'EuroMed', 'NordicEng', 'GlobalLogistics', 'IberiaData'].map((logo) => (
              <span key={logo} className="text-2xl font-black font-headline text-slate-900">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Refined UX */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-slate-900 mb-6">Tu camino al éxito en 3 pasos</h2>
            <p className="text-xl text-slate-500 leading-relaxed">Nuestro proceso está diseñado para ser ágil, transparente y personalizado según tus objetivos profesionales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {[
              {
                icon: <UserPlus size={40} className="text-emerald-600" />,
                title: "Envía tu Perfil",
                desc: "Regístrate en nuestro portal y sube tu CV. No importa tu ubicación actual."
              },
              {
                icon: <FileCheck size={40} className="text-blue-600" />,
                title: "Evaluación Personalizada",
                desc: "Un consultor especializado analiza tu experiencia y potencial en el mercado europeo."
              },
              {
                icon: <Briefcase size={40} className="text-indigo-600" />,
                title: "Recibe Ofertas",
                desc: "Te presentamos oportunidades que encajan con tu perfil y te preparamos para las entrevistas."
              }
            ].map((step, idx) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={idx} 
                className="relative z-10 group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-600 text-white shadow-xl rounded-2xl flex items-center justify-center font-bold font-headline text-xl">
                  {idx + 1}
                </div>
                <div className="mb-8 bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold font-headline text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-headline text-slate-900 mb-6">Oportunidades que transforman vidas</h2>
              <p className="text-xl text-slate-500 leading-relaxed">Explora nuestras vacantes más destacadas para este mes.</p>
            </div>
            <Link to="/jobs" className="group flex items-center gap-3 text-emerald-600 font-bold text-lg">
              Explorar todas las vacantes <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {JOBS_DATA.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Split Section: Info + Form */}
      <section id="aplicar" className="py-32 bg-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold font-headline text-slate-900 leading-tight">Es momento de <br/><span className="text-emerald-600">expandir tu mundo</span>.</h2>
                <p className="text-xl text-slate-500 leading-relaxed">
                  No dejes que las dudas te detengan. Miles de profesionales ya han transformado su futuro con nosotros. Nuestro equipo te guiará en cada fase del proceso.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Sin costos para el candidato", color: "bg-emerald-50 text-emerald-600" },
                  { label: "Soporte en trámites de visa", color: "bg-blue-50 text-blue-600" },
                  { label: "Preparación técnica", color: "bg-indigo-50 text-indigo-600" },
                  { label: "Consejería cultural", color: "bg-amber-50 text-amber-600" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center`}>
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-slate-700 font-bold">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <Quote className="absolute -top-4 -right-4 text-emerald-500 opacity-20" size={120} />
                <div className="flex text-emerald-500 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl italic font-medium opacity-90 mb-8 leading-relaxed">
                  "El proceso fue increíblemente humano. No me sentí como un número, sino como un profesional con un proyecto de vida."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-tr from-emerald-500 to-emerald-300 rounded-2xl"></div>
                  <div>
                    <p className="font-bold text-lg">Ricardo Velásquez</p>
                    <p className="text-sm opacity-60">Senior Dev • Berlín, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ApplicationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
