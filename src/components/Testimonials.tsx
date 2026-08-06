import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María Elena García',
    role: 'Dueña de Quinta en Yautepec Morelos',
    image: 'https://images.pexels.com/photos/28589009/pexels-photo-28589009.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
    text: 'Desde que contraté a Arboledacut, mi quinta siempre está impecable. Llego los fines de semana y todo está perfecto: el jardín podado y la alberca cristalina. ¡Son increíbles!',
    rating: 5,
  },
  {
    name: 'Roberto Martínez',
    role: 'Casa de Descanso en Cuautla Morelos',
    image: 'https://images.pexels.com/photos/590472/pexels-photo-590472.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
    text: 'Antes tenía que ir cada semana a supervisar a los jardineros. Con Arboledacut, me mandan reportes con fotos y todo queda perfecto. Me ahorro tiempo y estrés. Totalmente recomendados.',
    rating: 5,
  },
  {
    name: 'Ana Sofía López',
    role: 'Propiedad en Tepoztlán Morelos',
    image: 'https://images.pexels.com/photos/16933979/pexels-photo-16933979.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
    text: 'Contraté el plan premium y vale cada peso. Mi propiedad se ve mejor que cuando la compré. El equipo es muy profesional, puntual y respetuoso. Los mejores del mercado sin duda.',
    rating: 5,
  },
  {
    name: 'Carlos Villarreal',
    role: 'Quinta para Eventos en Yautepec Morelos',
    image: 'https://images.pexels.com/photos/18689091/pexels-photo-18689091.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=100&w=100',
    text: 'Rento mi quinta para eventos y Arboledacut la deja impecable antes y después de cada evento. Mis clientes siempre quedan encantados. Son el complemento perfecto para mi negocio.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-emerald-100/90 text-emerald-800 border border-emerald-300/80 rounded-full text-base sm:text-lg font-bold shadow-sm shadow-emerald-500/10 mb-6">
            <Star className="w-5 h-5 fill-emerald-600 text-emerald-600" />
            Testimonios Reales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Lo que dicen nuestros{' '}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Más de 50 propietarios confían en nosotros. Estas son sus experiencias.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-emerald-200 mb-4 group-hover:text-emerald-300 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
