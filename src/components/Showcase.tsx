import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Equipo profesional capacitado y uniformado',
  'Reportes fotográficos después de cada visita',
  'Horarios flexibles adaptados a ti',
  'Atención personalizada garantizada',
];

export default function Showcase() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/8134746/pexels-photo-8134746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350&w=300"
                    alt="Pool maintenance"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/6195118/pexels-photo-6195118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                    alt="Cleaning service"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                    alt="Garden care"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/29702290/pexels-photo-29702290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350&w=300"
                    alt="Luxury pool"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Badge overlay */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-2xl px-6 py-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                  ✨
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-800">+50 Quintas</p>
                  <p className="text-sm text-slate-500">confían en nosotros</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              ¿Por qué Arboledacut?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Profesionalismo que se{' '}
              <span className="text-gradient">nota</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Nos tomamos en serio el cuidado de tu propiedad. Procesos claros,
              resultados visibles y un trato cercano que nos distingue.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-600 group-hover:text-slate-800 transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contacto"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="group inline-flex items-center gap-2 mt-10 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-600/20 active:scale-95"
            >
              Quiero una Cotización
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
