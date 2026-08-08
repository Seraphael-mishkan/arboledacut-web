import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle, ArrowRight, MoveHorizontal, Sparkles, TouchpadIcon as Touch } from 'lucide-react';

const features = [
  'Equipo capacitado',
  'Reportes fotográficos después de cada visita',
  'Horarios flexibles adaptados a ti',
  'Atención personalizada garantizada',
];

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
    setHasInteracted(true);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  // Gentle auto-hint animation on mobile scroll into view
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      if (!hasInteracted) setSliderPos(40);
    }, 800);
    const timeout2 = setTimeout(() => {
      if (!hasInteracted) setSliderPos(60);
    }, 1600);
    const timeout3 = setTimeout(() => {
      if (!hasInteracted) setSliderPos(50);
    }, 2400);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [hasInteracted]);

  return (
    <div className="relative w-full max-w-lg mx-auto pb-12 sm:pb-10">
      {/* Mobile Top Instruction Banner (Exclusive for mobile) */}
      <div className="sm:hidden mb-3 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600/90 text-white rounded-full shadow-md text-xs font-bold tracking-wide animate-pulse">
        <Touch className="w-4 h-4" />
        <span>TOCA Y DESLIZA LA LÍNEA PARA COMPARAR</span>
        <MoveHorizontal className="w-4 h-4" />
      </div>

      {/* Slider Box */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
        className="relative w-full h-[360px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 cursor-ew-resize select-none group bg-slate-900 touch-pan-y"
      >
        {/* AFTER Image (Background) */}
        <img
          src="/antes-despues/despues.jpg"
          alt="Resultado Después - Arboledacut"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE Image (Overlay Clipped with polygon) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <img
            src="/antes-despues/antes.jpg"
            alt="Estado Antes - Arboledacut"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_20px_rgba(16,185,129,1)] pointer-events-none z-20"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Knob Handle with Pulsing Effect on Mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-13 h-13 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-white shadow-2xl border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform ring-4 ring-emerald-400/60 animate-pulse sm:animate-none">
            <MoveHorizontal className="w-7 h-7 sm:w-6 sm:h-6 stroke-[3]" />
          </div>

          {/* Floating Pill on Line for Mobile */}
          <div className="sm:hidden absolute top-1/4 -translate-x-1/2 bg-black/80 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-400/50 uppercase tracking-wider whitespace-nowrap shadow-lg">
            ◀ DESLIZA ▶
          </div>
        </div>

        {/* Corner Badges */}
        <div className="absolute top-4 left-4 z-10 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-xl pointer-events-none">
          Antes
        </div>
        <div className="absolute top-4 right-4 z-10 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-600/95 backdrop-blur-md border border-emerald-400/40 text-white text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-xl pointer-events-none">
          Después
        </div>
      </div>

      {/* Floating Trust Badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-emerald-200/80 rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3.5 shadow-xl z-30 flex items-center gap-3 whitespace-nowrap"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs sm:text-sm font-extrabold text-slate-900">+50 Propiedades</p>
          <p className="text-[10px] sm:text-xs text-slate-500 font-medium">confían en nosotros</p>
        </div>
      </motion.div>

      {/* Desktop Subtext instruction */}
      <p className="hidden sm:flex text-center text-xs font-medium text-slate-400 mt-6 items-center justify-center gap-1.5">
        <MoveHorizontal className="w-3.5 h-3.5 text-emerald-500" />
        Desliza la barra para comparar el Antes y Después
      </p>
    </div>
  );
}

export default function Showcase() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Before / After Interactive Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <BeforeAfterSlider />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-emerald-100/90 text-emerald-800 border border-emerald-300/80 rounded-full text-base sm:text-lg font-bold shadow-sm shadow-emerald-500/10 mb-6">
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
                  <span className="text-slate-600 group-hover:text-slate-800 transition-colors font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contacto"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="group inline-flex items-center gap-2 mt-10 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-600/20 active:scale-95 text-base sm:text-lg shadow-md"
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
