import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplets, SprayCan, TreePine, Fence, Sun } from 'lucide-react';

const services = [
  {
    icon: SprayCan,
    title: 'Limpieza Integral',
    description: 'Limpieza profunda de interiores y exteriores. Pisos, ventanas, baños, cocinas y áreas comunes impecables.',
    image: 'https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    icon: Leaf,
    title: 'Cuidado de Jardines',
    description: 'Poda, diseño paisajístico, sistema de riego, control de plagas y mantenimiento de áreas verdes.',
    image: 'https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'from-emerald-500 to-green-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: Droplets,
    title: 'Limpieza de Alberca',
    description: 'Mantenimiento químico, limpieza de filtros, aspirado, balance de pH y agua cristalina garantizada.',
    image: 'https://images.pexels.com/photos/8134746/pexels-photo-8134746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'from-sky-500 to-blue-600',
    bgLight: 'bg-sky-50',
    textColor: 'text-sky-600',
  },
  {
    icon: TreePine,
    title: 'Poda de Árboles',
    description: 'Poda profesional y segura de árboles de cualquier tamaño. Retiro de ramas y troncos incluido.',
    image: 'https://images.pexels.com/photos/7174105/pexels-photo-7174105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'from-teal-500 to-emerald-600',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    icon: Fence,
    title: 'Mantenimiento General',
    description: 'Reparaciones menores, pintura, impermeabilización, cercas y mantenimiento preventivo de tu propiedad.',
    image: 'https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    icon: Sun,
    title: 'Preparación para Eventos',
    description: 'Dejamos tu quinta lista para fiestas, reuniones o rentas. Limpieza express y montaje de áreas.',
    image: 'https://images.pexels.com/photos/19084142/pexels-photo-19084142.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            <Leaf className="w-4 h-4" />
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Todo lo que tu quinta{' '}
            <span className="text-gradient">necesita</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Ofrecemos un servicio integral para que tu propiedad luzca perfecta en todo momento,
            sin que tengas que preocuparte por nada.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-600/10 transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Más información →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
