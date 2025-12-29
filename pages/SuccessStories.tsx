
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Quote, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const SuccessStories: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToApply: true } });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Success" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-8">Nuestras <span className="text-emerald-400">Historias</span> de Éxito</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Descubre los recorridos de profesionales que confiaron en nosotros para dar el gran salto a Europa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid of Stories */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {TESTIMONIALS.map((story, idx) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 hover:shadow-2xl transition-all group"
            >
              <div className="shrink-0 relative">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] object-cover shadow-2xl relative z-10"
                />
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-xl group-hover:bg-emerald-500/20 transition-colors"></div>
              </div>
              
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex text-emerald-500 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <Quote className="text-slate-100 mb-2" size={40} />
                  <p className="text-xl text-slate-700 font-medium leading-relaxed italic mb-6">
                    "{story.content}"
                  </p>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-headline text-slate-900">{story.name}</h3>
                    <p className="text-slate-500 font-medium">{story.role}</p>
                    <p className="text-emerald-600 flex items-center gap-1 text-sm font-bold">
                      <MapPin size={14} /> {story.location}
                    </p>
                  </div>
                </div>
                
                <button className="text-slate-900 font-bold flex items-center gap-2 group-hover:gap-4 transition-all border-b-2 border-emerald-500 w-fit pb-1">
                  Leer entrevista completa <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-bold font-headline">¿Quieres ser nuestra próxima historia?</h2>
            <p className="text-xl opacity-90 max-w-xl mx-auto">Tu futuro en Europa comienza con una simple decisión hoy. Permítenos acompañarte.</p>
            <button 
              onClick={handleApplyClick}
              className="inline-block bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
            >
              Aplicar ahora mismo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
