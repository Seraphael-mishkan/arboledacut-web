import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          playsInline
          loop={false}
          className="w-full h-full object-cover"
        />
        {/* Green Overlay Gradient for readability & brand identity */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/75 to-emerald-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-transparent to-emerald-950/90" />
      </div>

      {/* Ambient glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-25 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 shadow-lg shadow-emerald-950/30"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-300 text-sm font-medium">Servicio Premium para Quintas</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl"
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
          className="mt-6 text-lg sm:text-xl text-emerald-100/80 max-w-2xl leading-relaxed"
        >
          Limpieza profesional, jardines perfectos y albercas cristalinas.
          Nos encargamos de todo para que tú solo disfrutes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/40 active:scale-95 text-lg"
          >
            Solicita tu Cotización
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 text-lg"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-emerald-300/90"
        >
          {[
            { icon: Shield, text: 'Garantía de Satisfacción' },
            { icon: Star, text: '+200 Quintas Atendidas' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-emerald-950/40 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/20">
              <item.icon className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
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

