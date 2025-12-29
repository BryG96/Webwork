
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, ChevronRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[4rem] group-hover:bg-emerald-500/10 transition-colors"></div>

      <div className="flex justify-between items-start mb-6">
        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
          {job.type}
        </span>
        {parseInt(job.id) === 1 && (
          <span className="flex items-center gap-1 text-amber-600 text-[10px] font-black uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full">
            <TrendingUp size={12} /> Hot
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold font-headline text-slate-900 group-hover:text-emerald-600 transition-colors mb-2 leading-tight">
        {job.title}
      </h3>
      <p className="text-slate-400 font-bold text-sm uppercase tracking-wide mb-8">{job.company}</p>

      <div className="space-y-4 mb-10 flex-grow">
        <div className="flex items-center gap-3 text-slate-600 font-medium">
          <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-500">
            <MapPin size={16} />
          </div>
          {job.location}
        </div>
        <div className="flex items-center gap-3 text-slate-600 font-medium">
          <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-500">
            <Briefcase size={16} />
          </div>
          {job.salary}
        </div>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-900 group-hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all transform group-hover:shadow-xl shadow-slate-900/10"
      >
        Ver Detalles <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <div className="mt-4 text-center">
        <span className="text-slate-300 text-[10px] flex items-center justify-center gap-1 font-bold uppercase tracking-widest">
          <Clock size={12} /> Publicado hace 2 días
        </span>
      </div>
    </motion.div>
  );
};

export default JobCard;
