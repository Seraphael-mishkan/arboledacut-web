import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '50+', label: 'Quintas Atendidas', icon: '🏡' },
  { value: '98%', label: 'Clientes Satisfechos', icon: '⭐' },
  { value: '5+', label: 'Años de Experiencia', icon: '🏆' },
  { value: '24/7', label: 'Soporte Disponible', icon: '📞' },
];

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl hover:bg-emerald-50/50 transition-all duration-300 hover:scale-105 cursor-default"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-12 border-t border-slate-100"
        >
          <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-wider mb-6">
            Confían en nosotros dueños de propiedades en
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-slate-300">
            {['Yautepec', 'Morelos', 'México'].map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-lg font-semibold text-slate-300 hover:text-emerald-500 transition-colors cursor-default"
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
