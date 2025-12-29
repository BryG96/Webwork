
import React, { useState } from 'react';
import { Send, CheckCircle, Upload, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    profesion: '',
    experiencia: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        profesion: '',
        experiencia: '',
        mensaje: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-emerald-100 text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] mb-4">
              <CheckCircle size={56} />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-headline text-slate-900 text-balance">¡Perfil Recibido con Éxito!</h2>
              <p className="text-lg text-slate-500 max-w-sm mx-auto leading-relaxed">
                Tu viaje a Europa ha comenzado. Un especialista en talento internacional revisará tu información en las próximas 48 horas.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              Enviar otro perfil
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative"
          >
            <div className="mb-12">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Paso Final</span>
              <h2 className="text-4xl font-bold font-headline text-slate-900 mt-2 mb-4">Inicia tu Aplicación</h2>
              <p className="text-slate-500 text-lg">Cuéntanos sobre ti y evaluaremos tu perfil sin costo.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Nombre Completo</label>
                  <input
                    required
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-300"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Email Corporativo/Personal</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-300"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">WhatsApp</label>
                  <input
                    required
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-300"
                    placeholder="+34 000 000 000"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Área de Experiencia</label>
                  <select
                    required
                    name="profesion"
                    value={formData.profesion}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
                  >
                    <option value="">Selecciona área</option>
                    <option value="it">Tecnología (Software, Data, Cloud)</option>
                    <option value="salud">Sector Salud (Enfermería, Médicos)</option>
                    <option value="ingenieria">Ingeniería (Civil, Industrial)</option>
                    <option value="finanzas">Finanzas & Negocios</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Adjunta tu CV actualizado</label>
                <div className="relative group">
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-2xl group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-all bg-slate-50">
                    <Upload className="text-slate-400 group-hover:text-emerald-500 mb-3" size={32} />
                    <p className="text-sm text-slate-500">Arrastra tu CV o <span className="text-emerald-600 font-bold">explora archivos</span></p>
                    <p className="text-[10px] text-slate-400 mt-2 uppercase">Formatos: PDF, DOCX (Máx. 5MB)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-blue-50/50 text-blue-800 rounded-2xl border border-blue-100">
                <AlertCircle size={20} className="shrink-0 mt-0.5 text-blue-600" />
                <p className="text-xs leading-relaxed font-medium">
                  Al enviar, aceptas que procesemos tus datos para fines de reclutamiento según el RGPD. Tu información es confidencial y segura.
                </p>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-emerald-900/20 flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-70 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={24} className="animate-spin" /> Procesando Perfil...
                  </>
                ) : (
                  <>
                    Enviar Postulación <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationForm;
