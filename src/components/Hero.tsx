import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Sparkles, RefreshCw } from 'lucide-react';

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="relative h-screen min-h-[650px] flex flex-col justify-between overflow-hidden bg-black">
      {/* Background Video — object-cover on all screens, fades out on mobile when video ends */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 ${
          videoEnded ? 'opacity-0 sm:opacity-100' : 'opacity-100'
        }`}
      >
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={() => setVideoEnded(true)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Mobile-Only End Screen: full-screen image covering Hero when video ends */}
      <div
        className={`absolute inset-0 z-0 sm:hidden transition-opacity duration-700 overflow-hidden pointer-events-none ${
          videoEnded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="/imagen-celulares.jpg"
          alt="Arboledacut Mobile Background"
          className="w-full h-full object-cover filter brightness-95"
        />
        {/* Dark overlay for readability of hero elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-emerald-950/50 to-black/80" />
      </div>

      {/* Top Header Text Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 text-center flex flex-col items-center">
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex flex-col items-center pointer-events-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-500/30 mb-6 shadow-xl">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">
              Servicio Premium para tu Propiedad
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-2xl">
            Tu propiedad,{' '}
            <span className="relative inline-block">
              <span className="text-gradient">siempre</span>
            </span>{' '}
            impecable
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg sm:text-xl text-emerald-50 max-w-2xl leading-relaxed drop-shadow-lg font-medium">
            Limpieza profesional, jardines perfectos y albercas cristalinas.
            Nos encargamos de todo para que tú solo disfrutes.
          </p>
        </motion.div>
      </div>

      {/* Bottom CTA Buttons Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-28 text-center flex flex-col items-center w-full mt-auto">
        <motion.div
          animate={{
            y: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center w-full sm:w-auto"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/40 active:scale-95 text-base sm:text-lg shadow-xl border border-emerald-400/30"
          >
            Solicita tu Cotización
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-emerald-950/85 hover:bg-emerald-900/95 backdrop-blur-md border border-emerald-500/40 text-white transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-xl font-semibold rounded-2xl"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Sub-elements: Trust badges or replay button */}
        <div className="mt-4 sm:mt-6 h-8 flex items-center justify-center">
          {!videoEnded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 text-emerald-300"
            >
              {[
                { icon: Shield, text: 'Garantía de Satisfacción' },
                { icon: Star, text: '+50 Propiedades Atendidas' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-emerald-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-emerald-500/30 shadow-lg"
                >
                  <item.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setVideoEnded(false)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-200 hover:text-white bg-emerald-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 transition-all hover:bg-emerald-900 shadow-md"
            >
              <RefreshCw className="w-3 h-3 text-emerald-400" />
              Repetir Video
            </motion.button>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 80C840 87 960 93 1080 90C1200 87 1320 73 1380 66.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
