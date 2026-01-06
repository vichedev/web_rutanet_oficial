const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/img/LOGO_GBC.png"
                alt="RutaNet Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              "Queremos que cada conexión sea sinónimo de confianza, innovación
              y cercanía."
            </p>
            <div className="flex space-x-4">
              {/* Speedtest con imagen */}
              <a
                href="https://www.speedtest.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                title="Speedtest by Ookla"
              >
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-xs font-medium">Speedtest</span>
                </div>
              </a>
            </div>
          </div>

          {/* Enlaces de Interés */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Enlaces de Interés
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.arcotel.gob.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  ARCOTEL
                </a>
              </li>
              <li>
                <a
                  href="/Documents/REGLAMENTO-PARA-LA-PRESTACION-DE-SERVICIOS-DE-TELECOMUNICACIONES1.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Reglamento para la prestación de servicios de
                  Telecomunicaciones
                </a>
              </li>
              <li>
                <a
                  href="/Documents/valor agregado.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Calidad de Servicios Abonados
                </a>
              </li>
              <li>
                <a
                  href="/Documents/qos sva.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Normas SVA
                </a>
              </li>
              <li>
                <a
                  href="/Documents/ley_organica_de_telecomunicaciones.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Ley Orgánica de Telecomunicaciones
                </a>
              </li>
              <li>
                <a
                  href="/Documents/ley_organica_discapacidades.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Ley Orgánica de Discapacidades
                </a>
              </li>
              <li>
                <a
                  href="/Documents/LEY ORGANICA DE LAS PERSONAS ADULTOS MAYORES (2).pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Ley Orgánica del Adulto Mayor
                </a>
              </li>
              <li>
                <a
                  href="https://www.telecomunicaciones.gob.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  MINTEL
                </a>
              </li>
              <li>
                <a
                  href="https://www.presidencia.gob.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-4 h-4 mr-2"
                  />
                  Presidencia Ecuador
                </a>
              </li>
            </ul>
          </div>

          {/* Zona de Clientes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Zona de Clientes
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/normativas"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Normativas
                </a>
              </li>
              <li>
                <a
                  href="/control-parental"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Control parental
                </a>
              </li>
              <li>
                <a
                  href="/Documents/13Consejos_de_seguridad 2.pdf"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Consejos de seguridad
                </a>
              </li>
              <li>
                <a
                  href="/parametros-calidad"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Parámetros de calidad
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/nosotros"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/documentos"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Documentos Legales
                </a>
              </li>
              <li>
                <a
                  href="/contactos"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contactos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} RutaNet. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Cumpliendo con los requisitos de la Agencia de Regulación y Control
            de las Telecomunicaciones (ARCOTEL) y el Ministerio de
            Telecomunicaciones (MINTEL).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
