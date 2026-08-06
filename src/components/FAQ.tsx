import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué zonas cubren?',
    answer: 'Cubrimos Yautepec Morelos Mexico y zonas cercanas. Si tu propiedad está fuera de estas zonas, contáctanos para verificar disponibilidad.',
  },
  {
    question: '¿Necesito estar presente durante el servicio?',
    answer: 'No es necesario. La mayoría de nuestros clientes nos proporcionan acceso a su propiedad y reciben reportes fotográficos después de cada visita. Nuestro personal está verificado y asegurado para tu tranquilidad.',
  },
  {
    question: '¿Qué pasa si no estoy satisfecho con el servicio?',
    answer: 'Tenemos garantía de satisfacción al 100%. Si algo no cumple con tus expectativas, regresamos a corregirlo sin costo adicional dentro de las siguientes 48 horas. Tu satisfacción es nuestra prioridad.',
  },
  {
    question: '¿Puedo cambiar o cancelar mi plan en cualquier momento?',
    answer: 'Sí, nuestros planes son flexibles y sin contratos de permanencia. Puedes modificar, pausar o cancelar tu plan con 15 días de anticipación sin penalizaciones.',
  },
  {
    question: '¿Qué incluye el reporte fotográfico?',
    answer: 'Después de cada visita, recibirás por WhatsApp un reporte con fotos del antes y después de cada área atendida: jardines, alberca, interiores y exteriores. Así puedes verificar el trabajo desde cualquier lugar.',
  },
  {
    question: '¿Proporcionan los materiales y productos de limpieza?',
    answer: 'Sí, nosotros llevamos todo el equipo, herramientas y productos necesarios. Usamos productos ecológicos y de alta calidad. Los químicos para la alberca también están incluidos en nuestros planes.',
  },
  {
    question: '¿Cuánto tiempo tarda el servicio?',
    answer: 'Depende del tamaño de tu propiedad y los servicios contratados. En promedio, un servicio completo toma entre 3 y 6 horas. Te damos un estimado exacto en tu cotización personalizada.',
  },
  {
    question: '¿Cómo inicio el servicio?',
    answer: 'Es muy sencillo: 1) Solicita tu cotización gratis, 2) Agendamos una visita para conocer tu propiedad, 3) Te presentamos un plan personalizado, 4) ¡Comenzamos! Todo el proceso toma menos de una semana.',
  },
];

function FAQItem({ faq, index, isOpen, toggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'border-emerald-200 bg-emerald-50/50 shadow-sm' 
          : 'border-slate-200 bg-white hover:border-emerald-200'
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className={`text-base lg:text-lg font-semibold transition-colors ${
          isOpen ? 'text-emerald-800' : 'text-slate-800'
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-emerald-600 text-white rotate-0' : 'bg-slate-100 text-slate-500'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm lg:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-16 pb-24 lg:pt-20 lg:pb-32 bg-white relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-emerald-100/90 text-emerald-800 border border-emerald-300/80 rounded-full text-base sm:text-lg font-bold shadow-sm shadow-emerald-500/10 mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-700" />
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            ¿Tienes <span className="text-gradient">dudas</span>?
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Aquí respondemos las preguntas más comunes de nuestros clientes.
          </p>
        </motion.div>

        {/* FAQ list */}
        {isVisible && (
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-10 border border-emerald-500/40 shadow-2xl shadow-emerald-950/20 relative overflow-hidden group text-center sm:text-left"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ¿No encontraste tu <span className="text-emerald-400">respuesta</span>?
              </h3>
              <p className="text-emerald-100/90 text-base sm:text-lg font-medium leading-relaxed">
                Estamos aquí para ayudarte. Escríbenos directamente y resolveremos todas tus dudas.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 whitespace-nowrap text-base sm:text-lg shadow-lg flex-shrink-0"
            >
              Escríbenos directamente
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
