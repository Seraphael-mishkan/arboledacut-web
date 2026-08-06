import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, CheckCircle, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    services: [] as string[],
    message: '',
  });

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const propertyLabels: Record<string, string> = {
      'quinta': 'Quinta / Rancho',
      'casa-descanso': 'Casa de Descanso',
      'residencia': 'Residencia',
      'evento': 'Quinta para Eventos',
      'otro': 'Otro',
    };

    const propertyText = propertyLabels[formData.property] || formData.property || 'No especificada';
    const servicesText = formData.services.length > 0 ? formData.services.join(', ') : 'Ninguno seleccionado';

    let messageText = `🌿 *NUEVA SOLICITUD DE COTIZACIÓN* 🌿\n\n`;
    messageText += `👤 *Nombre:* ${formData.name}\n`;
    messageText += `📱 *Teléfono:* ${formData.phone}\n`;
    messageText += `🏡 *Tipo de propiedad:* ${propertyText}\n`;
    messageText += `🛠️ *Servicios de interés:* ${servicesText}\n`;
    if (formData.message.trim()) {
      messageText += `💬 *Mensaje adicional:* ${formData.message.trim()}\n`;
    }
    messageText += `\n✨ *Enviado desde Arboledacut Web*`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/527353346855?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const serviceOptions = [
    'Cuidado de jardines',
    'Limpieza de alberca',
    'Poda de árboles',
    'Limpieza de terrenos y maleza',
    'Mantenimiento general',
  ];

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-cta relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 hero-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 rounded-full text-base sm:text-lg font-bold shadow-md shadow-emerald-900/30 mb-6">
              Cotización Gratuita
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transforma tu quinta{' '}
              <span className="text-emerald-300">hoy mismo</span>
            </h2>
            <p className="mt-6 text-lg text-emerald-100/70 leading-relaxed">
              Solicita tu cotización sin compromiso. Nos pondremos en contacto contigo
              en menos de 2 horas para agendar una visita a tu propiedad.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, text: '7353346855', label: 'Llámanos' },
                { icon: MessageCircle, text: 'WhatsApp disponible', label: 'Escríbenos' },
                { icon: MapPin, text: 'Yautepec Morelos Mexico', label: 'Cobertura' },
                { icon: Clock, text: 'Lun-Sáb 8:00am - 5:00pm', label: 'Horario' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/15 flex items-center justify-center group-hover:bg-emerald-400/25 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-300/60 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  ¡Abriendo WhatsApp!
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Se ha generado tu cotización estructurada. Si no se abrió WhatsApp automáticamente, haz clic en el botón de abajo para enviar tu mensaje.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-emerald-600 font-medium hover:underline block mx-auto"
                >
                  Volver al formulario
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Solicita tu cotización gratis
                </h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 transition-colors"
                        placeholder="735 334 6855"
                      />
                    </div>
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Tipo de propiedad *
                    </label>
                    <select
                      required
                      value={formData.property}
                      onChange={e => setFormData({ ...formData, property: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 hover:border-emerald-300 focus:border-emerald-500 transition-colors bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="quinta">Quinta / Rancho</option>
                      <option value="casa-descanso">Casa de Descanso</option>
                      <option value="residencia">Residencia</option>
                      <option value="evento">Quinta para Eventos</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Servicios que te interesan
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                            formData.services.includes(service)
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Mensaje adicional
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu propiedad, ubicación, etc."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full mt-6 inline-flex items-center justify-center gap-2 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-600/20 active:scale-[0.98]"
                >
                  <Send className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Enviar Solicitud
                </button>

                <p className="mt-4 text-xs text-slate-400 text-center">
                  Al enviar aceptas ser contactado por nuestro equipo. Sin spam, lo prometemos.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
