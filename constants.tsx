
import { Job, BlogPost, Testimonial } from './types';

export const COLORS = {
  primary: '#0f172a', // Slate-900
  secondary: '#1e293b', // Slate-800
  accent: '#059669', // Emerald-600
  text: '#334155', // Slate-700
};

export const JOBS_DATA: Job[] = [
  {
    id: '1',
    title: 'Ingeniero de Software Senior',
    company: 'TechBerlin Solutions',
    location: 'Berlín, Alemania',
    salary: '€65,000 - €85,000',
    type: 'Tiempo Completo',
    description: 'Buscamos un ingeniero con experiencia en ecosistemas React/Node para liderar proyectos innovadores en el corazón de Europa.',
    requirements: ['5+ años de experiencia', 'Inglés fluido', 'Pasaporte europeo o disponibilidad para reubicación'],
    responsibilities: ['Desarrollo de nuevas funcionalidades', 'Mentoría de juniors', 'Arquitectura de sistemas'],
    postedAt: '2024-05-15'
  },
  {
    id: '2',
    title: 'Enfermero/a Especializado',
    company: 'Hospital Universitario Madrid',
    location: 'Madrid, España',
    salary: '€32,000 - €45,000',
    type: 'Tiempo Completo',
    description: 'Oportunidad para enfermeros titulados que busquen estabilidad y desarrollo profesional en centros de primer nivel.',
    requirements: ['Grado en Enfermería homologado', 'Experiencia en cuidados críticos', 'B1 de español'],
    responsibilities: ['Cuidado directo del paciente', 'Gestión de medicación', 'Coordinación con equipo médico'],
    postedAt: '2024-05-14'
  },
  {
    id: '3',
    title: 'Arquitecto de Nube (Cloud)',
    company: 'Nordic Cloud Systems',
    location: 'Estocolmo, Suecia',
    salary: '€70,000 - €95,000',
    type: 'Remoto / Híbrido',
    description: 'Diseño e implementación de infraestructuras escalables en AWS/Azure para el mercado nórdico.',
    requirements: ['Certificación AWS/Azure Solutions Architect', 'Experiencia con Kubernetes', 'Inglés C1'],
    responsibilities: ['Migración a la nube', 'Optimización de costes', 'Seguridad cloud'],
    postedAt: '2024-05-12'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'guia-cv-europeo',
    title: 'Cómo adaptar tu CV para el mercado europeo',
    excerpt: 'El formato Europass ya no es el único estándar. Descubre qué buscan realmente los reclutadores en 2024.',
    content: 'En Europa, la brevedad y la claridad son clave. Un CV no debe exceder las dos páginas...',
    image: 'https://picsum.photos/seed/cv/800/400',
    date: '2024-05-10',
    author: 'Elena García'
  },
  {
    id: '2',
    slug: 'coste-vida-alemania',
    title: 'Realidad del coste de vida en Alemania',
    excerpt: '¿Es suficiente un sueldo de 50k? Desglosamos gastos reales en alquiler, comida y transporte.',
    content: 'Alemania ofrece una gran calidad de vida, pero los impuestos y el seguro médico son factores a considerar...',
    image: 'https://picsum.photos/seed/berlin/800/400',
    date: '2024-05-08',
    author: 'Markus Weber'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    role: 'Ingeniero Civil',
    content: 'Gracias a Grupo Euro Trabajo conseguí una oferta en Lyon en menos de 3 meses. El acompañamiento fue excepcional.',
    location: 'Lyon, Francia',
    image: 'https://picsum.photos/seed/person1/200/200'
  },
  {
    id: '2',
    name: 'Sofía Martínez',
    role: 'Especialista en Marketing',
    content: 'Mi sueño era vivir en Ámsterdam. Ellos no solo encontraron el puesto, me ayudaron con toda la documentación.',
    location: 'Ámsterdam, Países Bajos',
    image: 'https://picsum.photos/seed/person2/200/200'
  }
];
