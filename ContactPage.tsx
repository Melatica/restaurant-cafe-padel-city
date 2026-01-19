import React, { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'al02000854@tecmilenio.mx',
      description: 'Responderemos en 24 horas'
    },
    {
      icon: '📱',
      title: 'Teléfono',
      value: '+52 9818290717',
      description: 'Lunes a Viernes, 9:00 - 18:00'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'San Francisco de Campeche, Campeche, México',
      description: 'Oficina principal'
    }
  ];

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes comentarios sobre nuestro restaurante o sugerencia? Estamos aquí para ayudarte
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section className="bg-card rounded-lg shadow-md p-8" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="text-2xl font-bold mb-6 text-card-foreground">
              Envíanos un mensaje
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">¡Mensaje enviado!</h3>
                <p className="text-gray-600">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-card-foreground">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                      aria-describedby="name-error"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-card-foreground">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@email.com"
                      aria-describedby="email-error"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-card-foreground">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      aria-describedby="subject-error"
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="general">Consulta general</option>
                      <option value="wireframes">Wireframes y diseño</option>
                      <option value="accessibility">Accesibilidad web</option>
                      <option value="technical">Soporte técnico</option>
                      <option value="partnership">Colaboración</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-card-foreground">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Escribe tu mensaje aquí..."
                      aria-describedby="message-error"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Nota sobre privacidad:</strong> Esta aplicación es un ejemplo de wireframe. 
                      Los datos del formulario no se almacenan ni procesan realmente.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Enviar mensaje de contacto"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Contact Information */}
          <section aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="text-2xl font-bold mb-6 text-foreground">
              Información de contacto
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4" role="img" aria-label={info.title}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Preguntas frecuentes
              </h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    <span className="font-medium text-card-foreground">
                      ¿Como recervar una mesa?
                    </span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 p-3 text-gray-600">
                    Contacta nuestro Whatsapp (9818290717).
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    <span className="font-medium text-card-foreground">
                      ¿Horario de servicio?
                    </span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 p-3 text-gray-600">
                    De 7:00 a 23:00.
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('home')}
            className="text-secondary hover:text-blue-600 transition-colors focus:outline-none focus:underline"
            aria-label="Volver al inicio"
          >
            ← Volver al Inicio
          </button>
        </div>
      </div>
    </main>
  );
}