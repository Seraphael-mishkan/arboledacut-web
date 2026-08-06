import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Clock, Shield, Smile, Camera, Repeat, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Deja de preocuparte por el mantenimiento. Nosotros nos encargamos de todo mientras tú disfrutas tu tiempo libre.',
  },
  {
    icon: Shield,
    title: 'Tranquilidad Total',
    description: 'Personal capacitado, tu propiedad está en las mejores manos posibles.',
  },
  {
    icon: Smile,
    title: 'Satisfacción Garantizada',
    description: 'Si algo no te satisface, regresamos a corregirlo sin costo extra. Tu felicidad es nuestra prioridad.',
  },
  {
    icon: Camera,
    title: 'Reportes con Fotos',
    description: 'Recibe reportes fotográficos de antes y después en cada visita. Transparencia total desde tu celular.',
  },
  {
    icon: Repeat,
    title: 'Servicio Consistente',
    description: 'El mismo equipo asignado a tu propiedad siempre. Conocen tu propiedad como la palma de su mano.',
  },
  {
    icon: HeartHandshake,
    title: 'Sin Contratos Forzosos',
    description: 'Sin letras chiquitas ni permanencia obligatoria. Te quedas porque quieres, no porque debes.',
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-emerald-950 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 hero-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full text-base sm:text-lg font-bold shadow-md shadow-emerald-900/30 mb-6">
            Beneficios Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Más que limpieza,{' '}
            <span className="text-emerald-400">tranquilidad</span>
          </h2>
          <p className="mt-6 text-lg text-emerald-100/60 leading-relaxed">
            Descubre por qué varios propietarios confían en Arboledacut
            para el cuidado de sus propiedades.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-3xl p-8 hover:bg-white/12 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6 group-hover:bg-emerald-500/25 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-emerald-100/50 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
