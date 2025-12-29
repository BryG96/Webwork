
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-headline text-slate-900 mb-8">Blog & Guías</h1>
          <p className="text-xl text-slate-600">Todo lo que necesitas saber para triunfar en tu proceso de relocalización y carrera en Europa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-3xl mb-6 shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </Link>
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                </div>
                <h2 className="text-3xl font-bold font-headline text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                  Leer artículo completo <ArrowRight size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80" alt="pattern" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold font-headline">Recibe ofertas y consejos exclusivos</h2>
            <p className="text-slate-400 text-lg">Suscríbete a nuestra newsletter mensual y sé el primero en enterarte de las nuevas vacantes y cambios en las leyes laborales europeas.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder:text-slate-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
