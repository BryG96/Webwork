
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/34912345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-90 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap hidden md:block border border-slate-100">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  );
};

export default WhatsAppButton;
