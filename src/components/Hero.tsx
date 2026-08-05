import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Star, Sparkles, RefreshCw } from 'lucide-react';

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video — 100% Natural without any color/gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={() => setVideoEnded(true)}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center flex flex-col items-center justify-between min-h-[70vh]">
        {/* Top Text Section — Fades out when video ends to reveal 3D Arboledacut text */}
        <AnimatePresence>
          {!videoEnded && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 mb-8 shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">Servicio Premium para Quintas</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-2xl"
              >
                Tu quinta,{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">siempre</span>
                </span>{' '}
                impecable
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-emerald-50 max-w-2xl leading-relaxed drop-shadow-lg font-medium"
              >
                Limpieza profesional, jardines perfectos y albercas cristalinas.
                Nos encargamos de todo para que tú solo disfrutes.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer when video ended to keep CTA buttons cleanly at bottom */}
        {videoEnded && <div className="flex-1" />}

        {/* Bottom CTA Buttons — ALWAYS VISIBLE (Never disappear) */}
        <div className="mt-auto pt-6 flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/40 active:scale-95 text-lg shadow-xl border border-emerald-400/30"
            >
              Solicita tu Cotización
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-950/80 hover:bg-emerald-900/90 backdrop-blur-md border border-emerald-500/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 text-lg shadow-xl"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* Trust badges / Replay button */}
          <AnimatePresence>
            {!videoEnded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-300"
              >
                {[
                  { icon: Shield, text: 'Garantía de Satisfacción' },
                  { icon: Star, text: '+200 Quintas Atendidas' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-emerald-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/30 shadow-lg">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold text-white">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <button
                  onClick={() => setVideoEnded(false)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300/80 hover:text-white bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-500/20 transition-all hover:bg-emerald-900/80"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Mostrar Título Principal
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 80C840 87 960 93 1080 90C1200 87 1320 73 1380 66.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

