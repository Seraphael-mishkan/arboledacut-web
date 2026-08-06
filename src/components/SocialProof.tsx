import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '50+', label: 'Propiedades Atendidas', icon: '/icons/casa.png' },
  { value: '98%', label: 'Clientes Satisfechos', icon: '/icons/estrella.png' },
  { value: '5+', label: 'Años de Experiencia', icon: '/icons/trofeo.png' },
  { value: '24/7', label: 'Soporte Disponible', icon: '/icons/telefonomensaje.png' },
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
              className="group text-center p-6 rounded-2xl hover:bg-emerald-50/50 transition-all duration-300 hover:scale-105 cursor-default flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center p-2 rounded-2xl bg-emerald-50/80 group-hover:bg-emerald-100/90 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 pt-14 border-t border-slate-100 text-center"
        >
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #064e3b 0%, #059669 40%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            }}
          >
            Confían en nosotros
          </h3>
          <p className="text-slate-400 text-sm sm:text-base font-medium uppercase tracking-[0.2em] mb-8">
            Dueños de propiedades en
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10">
            {['Yautepec', 'Morelos', 'México'].map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 200 }}
                className="relative text-xl sm:text-2xl font-bold text-slate-700 hover:text-emerald-600 transition-colors duration-300 cursor-default px-4 sm:px-6"
              >
                {city}
                {i < 2 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
