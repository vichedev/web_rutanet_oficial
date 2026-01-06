// src/components/ParametrosCalidad.jsx
import { useState } from "react";

const ParametrosCalidad = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Parámetros de Calidad
            </span>
          </h1>
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Calidad
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Documento oficial de RutaNet que establece los estándares de calidad
            para servicios de telecomunicaciones
          </p>
        </div>

        {/* Contenedor principal del PDF */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Barra de herramientas del PDF */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Parámetros de Calidad - RutaNet
                </span>
              </div>
            </div>

            {/* Botón de descarga */}
            <a
              href="/Documents/5PARAMETROS DE CALIDAD_RutaNetSA.pdf"
              download="5PARAMETROS DE CALIDAD_RutaNetSA.pdf"
              className="flex items-center space-x-2 bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
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
              <span>Descargar PDF</span>
            </a>
          </div>

          {/* Contenedor del PDF - OCUPA TODO EL ANCHO */}
          <div className="relative bg-gray-100 w-full h-[75vh]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium">
                    Cargando documento...
                  </p>
                </div>
              </div>
            )}

            {/* Visor del PDF - EXPANDIDO AL 100% */}
            <iframe
              src="/Documents/5PARAMETROS DE CALIDAD_RutaNetSA.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              title="Parámetros de Calidad RutaNet"
              style={{ minHeight: "600px" }}
            >
              <p className="p-8 text-center text-gray-600">
                Tu navegador no soporta la visualización de PDFs.
                <a
                  href="/Documents/PARAMETROS DE CALIDAD_RutaNetSA.pdf"
                  className="text-cyan-500 hover:text-cyan-600 ml-2 font-semibold"
                >
                  Descarga el documento aquí
                </a>
              </p>
            </iframe>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información del documento */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Acerca de este documento
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mt-0.5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-700">
                    Documento Corporativo
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Parámetros de calidad establecidos por RutaNet
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mt-0.5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-700">
                    Vigencia Actual
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Documento en vigor para todos los servicios
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-cyan-500 mt-0.5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-700">
                    Disponibilidad
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Documento disponible para consulta y descarga
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces relacionados */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Documentos Relacionados</h3>
            <div className="space-y-3">
              <a
                href="/Documents/3REGLAMENTO-PARA-LA-PRESTACION-DE-SERVICIOS-DE-TELECOMUNICACIONES12.pdf"
                target="_blank"
                className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-6 h-6 mr-3"
                  />
                  <span className="font-medium">
                    Reglamento Servicios Telecom
                  </span>
                </div>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="/Documents/6qos sva 4.pdf"
                target="_blank"
                className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-6 h-6 mr-3"
                  />
                  <span className="font-medium">Calidad de Servicio SVA</span>
                </div>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="/Documents/4resolucion_reforma_norma_de_condiciones_generalessigned_signed1-signed-signed.pdf"
                target="_blank"
                className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-6 h-6 mr-3"
                  />
                  <span className="font-medium">
                    Norma Condiciones Generales
                  </span>
                </div>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="/Documents/8reglamento valor agregado.pdf"
                target="_blank"
                className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-6 h-6 mr-3"
                  />
                  <span className="font-medium">Servicios Valor Agregado</span>
                </div>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="/Documents/5PARAMETROS DE CALIDAD_RutaNetSA.pdf"
                target="_blank"
                className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <img
                    src="/Documents/img_icon/icon_docu.png"
                    alt="Documento"
                    className="w-6 h-6 mr-3"
                  />
                  <span className="font-medium">Parámetros de Calidad</span>
                </div>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="/normativas"
                className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3"
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
                  <span className="font-medium">
                    Explorar Todas las Normativas
                  </span>
                </div>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Tienes preguntas sobre la calidad del servicio?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de soporte está disponible para resolver tus dudas
              sobre los parámetros de calidad y asistirte en cualquier consulta
              técnica.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contactos"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contactar Soporte
              </a>
              <a
                href="mailto:soporte@RutaNet.com"
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParametrosCalidad;
