import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const PlanesRutaNet = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const topRef = useRef(null);

  // Efecto para hacer scroll al tope del componente cuando se carga
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Manejar modal
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  // Imágenes de planes
  const planImages = {
    basico: "/img/planes/home1.jpg",
    standar: "/img/planes/home2.jpg",
    corporativo: "/img/planes/ambos.jpg",
  };

  // Datos de planes actualizados
  const planesData = {
    basico: {
      nombre: "PLAN BÁSICO",
      velocidad: "70 Mbps",
      precio: 18,
      descripcion: "Perfecto para uso personal y navegación básica",
      caracteristicas: [
        "Velocidad de descarga: 70 Mbps",
        "Velocidad de subida: 70 Mbps",
        "Fibra óptica directa",
        "Soporte técnico 24/7",
        "Instalación GRATIS",
      ],
      color: "blue",
      popular: false,
    },
    standar: {
      nombre: "PLAN ESTÁNDAR",
      velocidad: "150 Mbps",
      precio: 25,
      descripcion: "Ideal para familias y teletrabajo",
      caracteristicas: [
        "Velocidad de descarga: 150 Mbps",
        "Velocidad de subida: 150 Mbps",
        "Fibra óptica simétrica",
        "Soporte técnico prioritario",
        "Instalación GRATIS",
        "Estabilidad garantizada",
      ],
      color: "green",
      popular: true,
    },
    corporativo: {
      nombre: "PLAN CORPORATIVO",
      velocidad: "Personalizada",
      precio: null,
      descripcion: "Soluciones a medida para empresas",
      caracteristicas: [
        "Velocidad según requerimientos",
        "Ancho de banda dedicado",
        "SLA - Acuerdo de nivel de servicio",
        "Soporte técnico empresarial 24/7",
        "IP fija incluida",
        "Firewall empresarial",
      ],
      color: "purple",
      popular: false,
    },
  };

  // Función para enviar mensaje por WhatsApp
  const solicitarInformacion = (planKey) => {
    const plan = planesData[planKey];
    let mensaje = "";

    if (planKey === "corporativo") {
      mensaje = `Hola, estoy interesado en el ${plan.nombre}. Por favor, envíenme más información sobre planes corporativos personalizados.`;
    } else {
      mensaje = `Hola, estoy interesado en el ${plan.nombre} - ${plan.velocidad} por $${plan.precio}/mes. Por favor, envíenme más información.`;
    }

    const whatsappUrl = `https://wa.me/593999140946?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Colores para los planes
  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      gradient: "from-blue-500 to-blue-600",
    },
    green: {
      bg: "from-green-50 to-green-100",
      border: "border-green-200",
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-700",
      gradient: "from-green-500 to-green-600",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      text: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700",
      gradient: "from-purple-500 to-purple-600",
    },
  };

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen overflow-hidden"
      ref={topRef}
    >
      {/* Modal para imagen ampliada */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-red-500 z-50"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img
              src={modalImage}
              alt="Vista ampliada del plan"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            CONECTIVIDAD DE ALTA CALIDAD
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Planes RutaNet
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Internet por fibra óptica con velocidad simétrica e instalación
            GRATIS
          </p>
          <p className="text-lg text-blue-600 font-semibold mt-4">
            ELIGE LA VELOCIDAD QUE NECESITAS
          </p>
        </div>

        {/* Grid de planes - 3 cartas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {Object.entries(planesData).map(([key, plan]) => {
            const color = colorClasses[plan.color];

            return (
              <div
                key={key}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02] relative ${
                  plan.popular ? "ring-2 ring-green-500 ring-opacity-50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div
                  className="relative h-48 cursor-pointer group"
                  onClick={() => openModal(planImages[key])}
                >
                  <img
                    src={planImages[key]}
                    alt={plan.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.background = `linear-gradient(to bottom right, ${color.button
                        .replace("bg-", "")
                        .replace(" hover:bg-", "")}, #fff)`;
                      e.target.style.display = "flex";
                      e.target.style.alignItems = "center";
                      e.target.style.justifyContent = "center";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white text-center p-4">
                      <svg
                        className="w-8 h-8 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        ></path>
                      </svg>
                      <p className="text-sm">Ver detalles</p>
                    </div>
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div
                  className={`bg-gradient-to-r ${color.bg} p-6 border-b ${color.border}`}
                >
                  <h3 className={`text-2xl font-bold ${color.text} mb-2`}>
                    {plan.nombre}
                  </h3>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.precio ? `$${plan.precio}` : "Consultar"}
                      </span>
                      {plan.precio && (
                        <span className="text-gray-500 ml-1">/mes</span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-800">
                        {plan.velocidad}
                      </span>
                      <p className="text-sm text-gray-600">Velocidad</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {plan.descripcion}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {plan.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full ${color.button} text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105`}
                    onClick={() => solicitarInformacion(key)}
                  >
                    {plan.precio ? "Solicitar Información" : "Cotizar Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparativa de Planes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Comparativa de Planes
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Características
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">
                    Básico 70M
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">
                    Estándar 150M
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-purple-600">
                    Corporativo
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">
                    Velocidad de Descarga
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">
                    70 Mbps
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-green-600">
                    150 Mbps
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-purple-600">
                    Personalizada
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">
                    Velocidad de Subida
                  </td>
                  <td className="py-4 px-6 text-center font-semibold">
                    70 Mbps
                  </td>
                  <td className="py-4 px-6 text-center font-semibold">
                    150 Mbps
                  </td>
                  <td className="py-4 px-6 text-center font-semibold">
                    Personalizada
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Precio Mensual</td>
                  <td className="py-4 px-6 text-center font-bold text-gray-900">
                    $18
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-gray-900">
                    $25
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-gray-900">
                    Consultar
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Instalación</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    ✓ GRATIS
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    ✓ GRATIS
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    ✓ CONSULTAR
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600">Soporte Técnico</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    ✓ 24/7
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    ✓ Prioritario
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    ✓ Empresarial
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Contáctanos y creamos un plan personalizado para tus necesidades
          </p>
          <a
            href="https://wa.me/593999140946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.50.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>

        {/* Botón de volver */}
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md font-semibold"
          >
            ← Volver atrás
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanesRutaNet;
