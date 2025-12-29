
import React from 'react';
import { Target, Heart, Shield, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-8">Nuestra Misión es Tu <span className="text-emerald-400">Progreso</span>.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              En Grupo Euro Trabajo, creemos que el talento no tiene fronteras. Nacimos con el objetivo de simplificar la compleja transición laboral hacia Europa para profesionales cualificados de habla hispana.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Team" className="w-full h-full object-cover" />
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-headline text-slate-900">Más que una agencia, un aliado estratégico.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fundada en 2018, Grupo Euro Trabajo ha evolucionado de ser una pequeña consultora a convertirse en un referente de la recolocación europea. Entendemos los retos: el idioma, los visados, las diferencias culturales y el rigor técnico de los países nórdicos y centroeuropeos.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nuestro equipo está compuesto por expertos en RRHH, abogados especializados en migración laboral y ex-profesionales que, como tú, un día decidieron emprender su carrera en Europa.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Office"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-emerald-600 text-white p-10 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold font-headline mb-2">100%</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Compromiso ético</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-headline text-slate-900 mb-6">Nuestros Valores</h2>
            <p className="text-slate-600">Lo que nos guía en cada colocación y en cada asesoría.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Shield className="text-emerald-600" size={32} />, title: "Transparencia", desc: "Información real sobre salarios y costes de vida." },
              { icon: <Target className="text-blue-600" size={32} />, title: "Precisión", desc: "No te enviamos a cualquier puesto, solo al ideal para ti." },
              { icon: <Users className="text-indigo-600" size={32} />, title: "Cercanía", desc: "Hablamos tu idioma y entendemos tu cultura." },
              { icon: <Heart className="text-rose-600" size={32} />, title: "Pasión", desc: "Amamos ver el crecimiento profesional de nuestra red." }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold font-headline text-slate-900">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
