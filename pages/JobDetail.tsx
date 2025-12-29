
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Briefcase, Clock, Calendar, CheckCircle2, ArrowRight, Globe } from 'lucide-react';
import { JOBS_DATA } from '../constants';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = JOBS_DATA.find(j => j.id === id);

  if (!job) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-bold font-headline">Vacante no encontrada</h2>
        <Link to="/jobs" className="text-emerald-600 mt-4 inline-block">Volver al listado</Link>
      </div>
    );
  }

  const handleApplyClick = () => {
    navigate('/', { state: { scrollToApply: true } });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/jobs" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-8 transition-colors font-medium">
          <ChevronLeft size={20} /> Volver a todas las vacantes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase">{job.type}</span>
                <span className="text-slate-400 text-sm flex items-center gap-1"><Calendar size={14} /> Publicado el {job.postedAt}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-headline text-slate-900 mb-4">{job.title}</h1>
              <p className="text-xl text-slate-600 font-medium mb-10">{job.company}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Ubicación</p>
                    <p className="font-bold text-slate-900">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Compensación</p>
                    <p className="font-bold text-slate-900">{job.salary}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-slate-900 mb-4">Descripción del Puesto</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-headline text-slate-900 mb-4">Responsabilidades Clave</h3>
                  <ul className="space-y-4">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-headline text-slate-900 mb-4">Requisitos del Candidato</h3>
                  <ul className="space-y-4">
                    {job.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0 mt-2.5"></div>
                        <span className="text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold font-headline mb-6">¿Te interesa este puesto?</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Aplica ahora y un consultor experto evaluará tu perfil para esta y otras posiciones similares en Europa.
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleApplyClick}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                >
                  Aplicar Ahora <ArrowRight size={20} />
                </button>
                <p className="text-xs text-center text-slate-500">Te redirigiremos a nuestro formulario centralizado.</p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-emerald-400"><Globe size={18} /></div>
                  <p className="text-sm">Abierto a candidatos internacionales con alto nivel profesional.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-emerald-400"><Clock size={18} /></div>
                  <p className="text-sm">Proceso de respuesta estimado: 3 a 5 días hábiles.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
              <h4 className="font-bold font-headline text-emerald-900 mb-4 text-lg">Guía de Relocalización</h4>
              <p className="text-emerald-800 text-sm mb-6 leading-relaxed">
                Descubre cómo gestionamos el visado, el alojamiento inicial y la integración para esta ubicación.
              </p>
              <button className="text-emerald-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Saber más <ArrowRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
