
import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import JobCard from '../components/JobCard';
import { JOBS_DATA } from '../constants';

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = JOBS_DATA.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20">
      <div className="bg-slate-900 text-white py-20 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Vacantes Disponibles</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Encuentra tu próximo reto profesional entre nuestras ofertas seleccionadas en Alemania, Suecia, España y más.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-28">
              <h3 className="text-lg font-bold font-headline mb-6 flex items-center gap-2">
                <Filter size={20} className="text-emerald-500" /> Filtros
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-3">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Puesto o ciudad..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-3">Categoría</label>
                  <div className="space-y-2">
                    {['Tecnología', 'Salud', 'Ingeniería', 'Administración'].map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-slate-600 text-sm group-hover:text-emerald-600 transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-3">Ubicación</label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none">
                    <option>Todos los países</option>
                    <option>Alemania</option>
                    <option>España</option>
                    <option>Suecia</option>
                    <option>Francia</option>
                  </select>
                </div>

                <button className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                  <SlidersHorizontal size={18} /> Limpiar Filtros
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-500 font-medium">Mostrando {filteredJobs.length} vacantes encontradas</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Ordenar por:</span>
                <select className="bg-transparent font-bold text-sm outline-none">
                  <option>Más recientes</option>
                  <option>Salario (Mayor)</option>
                  <option>Ubicación</option>
                </select>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-20 rounded-3xl text-center shadow-sm border border-slate-100">
                <Search size={64} className="mx-auto text-slate-200 mb-6" />
                <h3 className="text-2xl font-bold font-headline mb-2">No encontramos resultados</h3>
                <p className="text-slate-500">Intenta con otros términos de búsqueda o filtros.</p>
              </div>
            )}

            <div className="mt-16 flex justify-center gap-4">
              <button className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">1</button>
              <button className="w-10 h-10 rounded-xl bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center font-bold">2</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
