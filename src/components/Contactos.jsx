import React, { useState } from "react";

const Contactos = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("+593999140946");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              CONTÁCTANOS
            </span>
          </h1>
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              ¡Estaremos a la orden!
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conectamos tu negocio a la velocidad del éxito. ¡Cotiza hoy tu
            internet de alta velocidad!
          </p>
        </div>

        {/* Tarjeta de contacto principal */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group max-w-md mx-auto">
            <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.50.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
              WhatsApp Principal
            </h3>
            <p className="text-gray-600 mb-6 text-center text-lg">
              Atención personalizada para consultas y cotizaciones
            </p>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-3 rounded-xl">
                    +593 99 914 0946
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-110"
                    title="Copiar número"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
                {copied && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
                    ¡Número copiado!
                  </div>
                )}
              </div>

              <a
                href="https://wa.me/593999140946"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-lg hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Horarios de atención */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Horarios de Atención
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-600 text-lg">Lunes a Viernes</span>
                <span className="font-semibold text-gray-800 text-lg">
                  8:00 - 17:00
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-600 text-lg">Sábados</span>
                <span className="font-semibold text-gray-800 text-lg">
                  9:00 - 13:00
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-gray-600 text-lg">Soporte 24/7</span>
                <span className="font-semibold text-green-600 text-lg">
                  Siempre disponible
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-blue-600 text-sm">
                <span className="font-semibold">Nota:</span> Para emergencias
                técnicas fuera de horario, puedes contactarnos por WhatsApp.
                Estamos disponibles para atenderte.
              </p>
            </div>
          </div>

          {/* Ubicación con Mapa de Google */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Nuestra Ubicación
            </h2>

            <div className="mb-6 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d425.27704026195624!2d-79.4794001757673!3d-1.0380215887124002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDInMTcuMSJTIDc5wrAyOCc0NC43Ilc!5e1!3m2!1ses-419!2sec!4v1759254490005!5m2!1ses-419!2sec"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de RutaNet, Ecuador"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-purple-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold">
                    Quevedo, Ecuador
                  </p>
                  <p className="text-gray-600 text-sm">Consultas previa cita</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-purple-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold">
                    Atención Personalizada
                  </p>
                  <p className="text-gray-600 text-sm">
                    Coordinamos visita según tu ubicación
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/UXN6KLG4tPiBv7ew9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Información de contacto adicional */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para mejorar tu conectividad?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos llevar tu negocio al
            siguiente nivel con nuestra conexión de alta velocidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/593999140946"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Solicitar Cotización
            </a>
            <button
              onClick={copyToClipboard}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              Copiar Número
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
