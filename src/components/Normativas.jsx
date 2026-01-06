// src/components/Normativas.jsx
import { useState } from "react";

const Normativas = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const normativas = [
    {
      id: 1,
      title: "Ley Orgánica de Telecomunicaciones",
      category: "leyes",
      file: "/Documents/1ley_organica_de_telecomunicaciones2.pdf",
      description: "Ley que regula el sector de telecomunicaciones en Ecuador",
    },
    {
      id: 2,
      title: "Reglamento Ley Orgánica Telecomunicaciones",
      category: "reglamentos",
      file: "/Documents/2Reglamento-Ley-Organica-de-Telecomunicaciones4.pdf",
      description: "Reglamento de aplicación de la ley de telecomunicaciones",
    },
    {
      id: 3,
      title: "Reglamento Prestación Servicios Telecom",
      category: "reglamentos",
      file: "/Documents/3REGLAMENTO-PARA-LA-PRESTACION-DE-SERVICIOS-DE-TELECOMUNICACIONES12.pdf",
      description:
        "Reglamento para la prestación de servicios de telecomunicaciones",
    },
    {
      id: 4,
      title: "Resolucion reforma norma de condiciones generales",
      category: "reglamentos",
      file: "/Documents/4resolucion_reforma_norma_de_condiciones_generalessigned_signed1-signed-signed.pdf",
      description:
        "Resolución sobre la reforma de normas de condiciones generales",
    },
    {
      id: 5,
      title: "Parámetros de Calidad RutaNet",
      category: "calidad",
      file: "/Documents/5PARAMETROS DE CALIDAD_RutaNetSA.pdf",
      description: "Parámetros de calidad establecidos por RutaNet",
    },
    {
      id: 6,
      title: "Calidad de Servicio QOS SVA",
      category: "calidad",
      file: "/Documents/6qos sva 4.pdf",
      description: "Normativa sobre calidad de servicio para QoS y SVA",
    },
    {
      id: 7,
      title: "Terminologías Telecomunicaciones",
      category: "otros",
      file: "/Documents/7terminologias 2.pdf",
      description: "Glosario de terminologías en telecomunicaciones",
    },
    {
      id: 8,
      title: "Servicios de Valor Agregado",
      category: "reglamentos",
      file: "/Documents/8reglamento valor agregado.pdf",
      description: "Normativa para servicios de valor agregado",
    },
    {
      id: 9,
      title: "Ley Orgánica de Discapacidades",
      category: "leyes",
      file: "/Documents/9ley_organica_discapacidades 1.pdf",
      description: "Ley orgánica de discapacidades del Ecuador",
    },
    {
      id: 10,
      title: "Ley Orgánica Adultos Mayores",
      category: "leyes",
      file: "/Documents/10LEY ORGANICA DE LAS PERSONAS ADULTOS MAYORES (2) 2.pdf",
      description: "Ley orgánica de las personas adultas mayores",
    },
    {
      id: 11,
      title: "Reglamento Tercera Edad",
      category: "reglamentos",
      file: "/Documents/11reglamento tercera edad 3.pdf",
      description: "Reglamento para la atención a personas de la tercera edad",
    },
    {
      id: 12,
      title: "Política Pública Internet Segura",
      category: "seguridad",
      file: "/Documents/12política_publica_internet_segura 4.pdf",
      description: "Política pública para un internet seguro",
    },
    {
      id: 13,
      title: "Consejos de Seguridad",
      category: "seguridad",
      file: "/Documents/13Consejos_de_seguridad 2.pdf",
      description: "Consejos de seguridad para usuarios de internet",
    },
    {
      id: 14,
      title: "Control Parental",
      category: "seguridad",
      file: "/Documents/14control parental 2.pdf",
      description: "Guía sobre control parental y seguridad en internet",
    },
    {
      id: 15,
      title:
        "Propuesta 335 - Normativa de Condiciones Generales Contratos Adhesión",
      category: "reglamentos",
      file: "/Documents/15propuesta_335-normativa_reforma_norma_condiciones_generales-contratos adhesion.pdf",
      description:
        "Propuesta normativa sobre condiciones generales en contratos de adhesión",
    },
    {
      id: 16,
      title: "Saturación",
      category: "calidad",
      file: "/Documents/16Saturacion.pdf",
      description: "Documento sobre saturación en redes de telecomunicaciones",
    },
  ];

  const categories = [
    { id: "todas", name: "Todas las Normativas" },
    { id: "leyes", name: "Leyes" },
    { id: "reglamentos", name: "Reglamentos" },
    { id: "calidad", name: "Calidad de Servicio" },
    { id: "seguridad", name: "Seguridad" },
    { id: "otros", name: "Otros Documentos" },
  ];

  const filteredNormativas =
    selectedCategory === "todas"
      ? normativas
      : normativas.filter((norm) => norm.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Normativas y Regulaciones
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consulta toda la documentación legal y normativa que rige nuestros
            servicios de telecomunicaciones
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-cyan-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-cyan-50 border border-gray-200 hover:border-cyan-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Contador de documentos */}
        <div className="text-center mb-6">
          <span className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">
            {filteredNormativas.length} documento
            {filteredNormativas.length !== 1 ? "s" : ""} encontrado
            {filteredNormativas.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid de Normativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNormativas.map((normativa) => (
            <div
              key={normativa.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 group"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <img
                      src="/Documents/img_icon/icon_docu.png"
                      alt="Documento"
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {normativa.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {normativa.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      normativa.category === "leyes"
                        ? "bg-purple-100 text-purple-800"
                        : normativa.category === "reglamentos"
                        ? "bg-blue-100 text-blue-800"
                        : normativa.category === "calidad"
                        ? "bg-green-100 text-green-800"
                        : normativa.category === "seguridad"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {normativa.category.toUpperCase()}
                  </span>
                  <a
                    href={normativa.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center group/button hover:scale-105"
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Ver PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay documentos */}
        {filteredNormativas.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No se encontraron documentos
              </h3>
              <p className="text-gray-600">
                No hay documentos en la categoría seleccionada.
              </p>
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Información Regulatoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                Entidades Reguladoras
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.arcotel.gob.ec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    ARCOTEL
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.telecomunicaciones.gob.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    MINTEL
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Enlaces de Interés
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.presidencia.gob.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Presidencia
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.speedtest.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Speedtest
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-2"
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
                Soporte
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="/parametros-calidad"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Parámetros Calidad
                  </a>
                </li>
                <li>
                  <a
                    href="/control-parental"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Control Parental
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 text-cyan-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contacto
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="/contactos"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Formulario Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:soporte@RutaNet.com"
                    className="hover:text-cyan-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Email Soporte
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normativas;
