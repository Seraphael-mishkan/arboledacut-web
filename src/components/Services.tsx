import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplets, TreePine, Fence, Trees, Check } from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: 'Cuidado de',
    titleHighlight: 'Jardines',
    description:
      'Mantenemos tus áreas verdes impecables con un servicio profesional y constante que transforma tu propiedad.',
    features: [
      'Poda de pasto y arbustos',
      'Diseño paisajístico',
      'Cajetes a jardineras',
      'Riego programado',
      'Fertilización y abonado',
    ],
    image:
      'https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    gradient: 'from-emerald-600 to-green-700',
    accentColor: '#10b981',
    iconBg: 'bg-emerald-500',
  },
  {
    icon: Droplets,
    title: 'Limpieza de',
    titleHighlight: 'Alberca',
    description:
      'Agua cristalina garantizada. Nos encargamos del mantenimiento completo para que solo te preocupes por disfrutar.',
    features: [
      'Aspirado y cepillado de paredes',
      'Limpieza de filtros y bombas',
      'Mantenimiento químico del agua',
      'Revisión semanal de equipos',
      'Reporte de estado por visita',
    ],
    image:
      'https://images.pexels.com/photos/8134746/pexels-photo-8134746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    gradient: 'from-sky-600 to-blue-700',
    accentColor: '#0ea5e9',
    iconBg: 'bg-sky-500',
  },
  {
    icon: TreePine,
    title: 'Poda de',
    titleHighlight: 'Árboles',
    description:
      'Servicio profesional y seguro para el cuidado de tus árboles.',
    features: [
      'Poda de formación y saneamiento',
      'Retiro de ramas y troncos',
      'Limpieza del área de trabajo',
    ],
    image:
      'https://images.pexels.com/photos/7174105/pexels-photo-7174105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    gradient: 'from-teal-600 to-emerald-700',
    accentColor: '#14b8a6',
    iconBg: 'bg-teal-500',
  },
  {
    icon: Trees,
    title: 'Limpieza de',
    titleHighlight: 'Terrenos',
    description:
      'Desmonte y limpieza completa de terrenos rurales, quintas abandonadas y lotes con exceso de vegetación.',
    features: [
      'Desmonte y chapeo',
      'Poda de maleza y hierba alta',
      'Limpieza de terrenos rurales',
      'Preparación de terrenos',
      'Retiro de escombro vegetal',
    ],
    image:
      'https://images.pexels.com/photos/19084142/pexels-photo-19084142.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    gradient: 'from-lime-600 to-green-700',
    accentColor: '#84cc16',
    iconBg: 'bg-lime-600',
  },
  {
    icon: Fence,
    title: 'Mantenimiento',
    titleHighlight: 'General',
    description:
      'Reparaciones, pintura e impermeabilización. Mantenemos tu propiedad en las mejores condiciones posibles.',
    features: [
      'Reparaciones menores',
      'Pintura interior y exterior',
      'Impermeabilización',
      'Mantenimiento preventivo',
      'Inspección general de propiedad',
    ],
    image:
      'https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    gradient: 'from-amber-500 to-orange-600',
    accentColor: '#f59e0b',
    iconBg: 'bg-amber-500',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="servicios"
      className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-emerald-100/90 text-emerald-800 border border-emerald-300/80 rounded-full text-base sm:text-lg font-bold shadow-sm shadow-emerald-500/10 mb-6 tracking-wide uppercase">
            <Leaf className="w-5 h-5 text-emerald-700" />
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 leading-[1.1] tracking-tight">
            Todo lo que tu propiedad{' '}
            <span className="text-gradient">necesita</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Quintas, residencias, casas condominales, ranchos y fraccionamientos
            completos.
            <br className="hidden sm:block" />
            Ofrecemos un servicio integral para que tu propiedad luzca perfecta
            en todo momento.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-emerald-600/15 transition-all duration-500 hover:-translate-y-3 border border-slate-100/80"
            >
              {/* Image with overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title + ' ' + service.titleHighlight}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70 mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Icon badge */}
                <div
                  className={`absolute top-5 left-5 w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg shadow-black/20`}
                >
                  <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Title on image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {service.title}{' '}
                    <span
                      style={{
                        color: service.accentColor,
                        textShadow: `0 0 20px ${service.accentColor}60`,
                      }}
                    >
                      {service.titleHighlight}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <p className="text-slate-600 text-base leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                    >
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: service.accentColor }}
                        strokeWidth={3}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
