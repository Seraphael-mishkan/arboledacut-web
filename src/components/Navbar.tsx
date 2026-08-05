import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-500 pointer-events-none"
      >
        <div className="w-fit mr-auto lg:mx-auto lg:w-full lg:max-w-5xl pointer-events-auto">
          {/* Long Oval Pill Bar (Contracted pill on mobile, full bar on PC) */}
          <div
            className={`flex items-center justify-between gap-3 sm:gap-6 px-3.5 sm:px-6 py-1.5 sm:py-2.5 lg:py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-emerald-950/95 backdrop-blur-2xl border border-emerald-500/40 shadow-2xl shadow-black/60'
                : 'bg-gradient-to-r from-emerald-950/90 via-emerald-900/90 to-emerald-950/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-black/40'
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group relative z-10 my-0.5">
              <img
                src="/logo.png"
                alt="Arboledacut Logo"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-2xl -my-3 sm:-my-4 lg:-my-5 filter brightness-105"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-base font-semibold text-emerald-100/90 hover:text-white hover:bg-emerald-800/50 transition-all duration-300 hover:scale-105"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+521234567890"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-base font-semibold text-emerald-200/95 hover:text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Llamar
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-base font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40 active:scale-95 shadow-md shadow-emerald-500/30"
              >
                Cotización Gratis
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-emerald-100 hover:bg-emerald-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 bg-emerald-950/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl rounded-3xl lg:hidden max-w-md mx-auto overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-emerald-100 hover:text-white hover:bg-emerald-800/40 rounded-2xl font-medium transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+521234567890"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-emerald-500/30 text-emerald-200 rounded-2xl font-medium hover:bg-emerald-800/30 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Llamar Ahora
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full px-4 py-3 bg-emerald-500 text-white text-center rounded-2xl font-semibold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/30"
                >
                  Cotización Gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

