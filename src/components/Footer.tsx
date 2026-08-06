import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  servicios: [
    { label: 'Cuidado de Jardines', href: '#servicios' },
    { label: 'Limpieza de Alberca', href: '#servicios' },
    { label: 'Poda de Árboles', href: '#servicios' },
    { label: 'Mantenimiento General', href: '#servicios' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#beneficios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 67 240 53 360 48C480 43 600 48 720 53.3C840 59 960 64 1080 61.3C1200 59 1320 48 1380 42.7L1440 37V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#020617"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Arboleda<span className="text-emerald-400">cut</span>
              </span>
            </a>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Cuidado profesional premium para quintas, casas de descanso y propiedades.
              Tu tranquilidad es nuestra misión.
            </p>

          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">7353346855</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Yautepec Morelos Mexico</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Arboledacut. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
