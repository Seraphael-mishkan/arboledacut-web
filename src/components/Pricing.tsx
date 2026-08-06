import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Esencial',
    description: 'Ideal para casas residenciales pequeñas con mantenimiento básico.',
    price: '1,700',
    frequency: '/quincena',
    popular: false,
    note: '*Precio válido para zona Yautepec, en otras zonas el precio se ajusta.',
    features: [
      'Poda de jardín semanal',
      'Riego de pasto 2 veces por semana',
      'Mantenimiento básico de alberca',
      'Reporte fotográfico por visita',
      'Soporte por WhatsApp',
    ],
    cta: 'Empezar Ahora',
  },
  {
    name: 'Premium',
    description: 'El más popular. Cuidado completo para tu propiedad.',
    price: '4,999',
    frequency: '/mes',
    popular: true,
    note: '*Precio válido para zona Yautepec, en otras zonas el precio se ajusta.',
    features: [
      { text: 'Mantenimiento completo semanal', isTitle: true },
      {
        text: 'Cuidado integral de jardines:',
        subItems: ['Poda de pasto', 'Poda de arbustos', 'Cajetes a jardineras', '2 riegos semanales'],
      },
      'Mantenimiento semanal de alberca',
      'Reportes con fotos antes/después',
      'Equipo asignado exclusivo',
    ],
    cta: 'Elegir Premium',
  },
  {
    name: 'Hacienda',
    description: 'Para grandes propiedades con necesidades especiales.',
    price: 'Personalizado',
    frequency: '',
    popular: false,
    features: [
      'Todo lo del plan Premium',
      'Visitas diarias disponibles',
      'Diseño paisajístico incluido',
      'Mantenimiento de equipos',
      'Limpieza de terrenos y maleza',
      'Gerente de cuenta dedicado',
      'Supervisión en sitio',
    ],
    cta: 'Contactar',
  },
];

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="precios" className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Planes y Precios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Inversión inteligente para{' '}
            <span className="text-gradient">tu propiedad</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Planes flexibles diseñados para cada tipo de propiedad. Sin contratos de permanencia.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                plan.popular
                  ? 'bg-emerald-950 text-white shadow-2xl shadow-emerald-900/30 ring-2 ring-emerald-500/30 lg:scale-105'
                  : 'bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-emerald-500/30">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    Más Popular
                  </div>
                </div>
              )}

              <div className="flex-1">
                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.popular ? 'text-emerald-200/70' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className="mt-6 mb-8">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== 'Personalizado' && (
                      <span className={`text-lg ${plan.popular ? 'text-emerald-300/80' : 'text-slate-400'}`}>$</span>
                    )}
                    <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    {plan.frequency && (
                      <span className={`text-base ${plan.popular ? 'text-emerald-300/70' : 'text-slate-400'}`}>
                        {plan.frequency}
                      </span>
                    )}
                  </div>
                  {plan.price !== 'Personalizado' && (
                    <p className={`mt-1 text-xs font-medium ${plan.popular ? 'text-emerald-300/50' : 'text-slate-400'}`}>
                      MXN
                    </p>
                  )}
                  {plan.note && (
                    <p className={`mt-2 text-[11px] leading-snug font-normal ${plan.popular ? 'text-emerald-200/60' : 'text-slate-400'}`}>
                      {plan.note}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((featureItem, i) => {
                    const isObj = typeof featureItem === 'object';
                    const text = isObj ? featureItem.text : featureItem;
                    const isTitle = isObj && featureItem.isTitle;
                    const subItems = isObj ? featureItem.subItems : undefined;

                    if (isTitle) {
                      return (
                        <li key={i} className="pt-1 pb-2 mb-3 border-b border-emerald-800/60">
                          <h4 className="text-base font-bold text-emerald-300 tracking-wide">
                            {text}
                          </h4>
                        </li>
                      );
                    }

                    return (
                      <li key={i} className="space-y-1.5">
                        <div className="flex items-start gap-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.popular ? 'text-emerald-400' : 'text-emerald-500'
                          }`} />
                          <span className={`text-sm ${plan.popular ? 'text-emerald-100/90' : 'text-slate-600'}`}>
                            {text}
                          </span>
                        </div>
                        {subItems && (
                          <ul className="pl-8 space-y-1 text-xs text-emerald-200/80">
                            {subItems.map((sub, j) => (
                              <li key={j} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 flex-shrink-0" />
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <a
                href="#contacto"
                className={`group w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-slate-400 text-sm"
        >
          ¿Necesitas algo diferente? Armamos un plan 100% personalizado para ti.{' '}
          <a href="#contacto" className="text-emerald-600 font-medium hover:underline">Contáctanos</a>
        </motion.p>
      </div>
    </section>
  );
}
