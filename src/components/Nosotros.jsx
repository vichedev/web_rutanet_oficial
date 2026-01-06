import {
  FaNetworkWired,
  FaHistory,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Nosotros = () => {
  const navigate = useNavigate();

  const handleSistemasEmpresarialesClick = () => {
    navigate("/planes-RutaNet");
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Elementos decorativos de fondo */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Conectando el futuro
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Innovación y confianza en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
              {" "}
              cada conexión
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            En RutaNet, no solo proporcionamos servicios de internet;
            construimos relaciones basadas en la confianza, tecnología de punta
            y el compromiso inquebrantable con nuestros clientes.
          </p>
        </div>

        {/* Grid de valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "Tecnología avanzada",
              description:
                "Implementamos las últimas innovaciones en fibra óptica para garantizar velocidad y estabilidad.",
              icon: <FaNetworkWired className="w-10 h-10" />,
              color: "from-blue-500 to-blue-600",
            },
            {
              title: "Experiencia sólida",
              description:
                "Años de expertise nos permiten entender y resolver las necesidades de conectividad.",
              icon: <FaHistory className="w-10 h-10" />,
              color: "from-purple-500 to-purple-600",
            },
            {
              title: "Cobertura confiable",
              description:
                "Nuestra infraestructura está diseñada para llegar donde más nos necesites.",
              icon: <FaMapMarkedAlt className="w-10 h-10" />,
              color: "from-green-500 to-green-600",
            },
            {
              title: "Protección garantizada",
              description:
                "Tu seguridad en línea es prioridad con nuestros protocolos avanzados.",
              icon: <FaShieldAlt className="w-10 h-10" />,
              color: "from-orange-500 to-orange-600",
            },
          ].map(({ title, description, icon, color }, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`}
              ></div>
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Misión y Visión */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 mb-20 border border-blue-100">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Nuestra esencia
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Misión */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">Misión</h4>
                <p className="text-gray-700 leading-relaxed">
                  En RutaNet, nuestra misión es ofrecer un servicio de internet
                  rápido, estable y accesible, conectando hogares y empresas con
                  el mundo a través de tecnología de vanguardia como la fibra
                  óptica. Nos comprometemos a brindar una experiencia de
                  calidad, con atención personalizada las 24 horas, soporte
                  técnico eficiente y soluciones adaptadas a las necesidades de
                  cada cliente.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                <div className="text-blue-600 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">Visión</h4>
                <p className="text-gray-700 leading-relaxed">
                  Aspiramos a ser la empresa de internet líder en la región,
                  reconocida por nuestra amplia cobertura, nuestro compromiso
                  con la excelencia tecnológica y una atención al cliente que
                  marca la diferencia. En RutaNet, soñamos con un futuro donde
                  cada persona, sin importar su ubicación, tenga acceso a una
                  conexión rápida, segura y estable.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-blue-200">
              <p className="text-lg text-gray-700 italic">
                "Queremos que cada conexión sea sinónimo de confianza,
                innovación y cercanía."
              </p>
            </div>
          </div>
        </div>

        {/* Compromiso con el cliente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-lg"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/img/nosotros/nosotros.jpg"
                alt="Equipo de RutaNet"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-600/20"></div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestro compromiso
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              En RutaNet, cada cliente es único. Por eso, nos esforzamos por
              entender tus necesidades específicas para ofrecerte soluciones
              personalizadas que realmente funcionen. Nuestro equipo está
              disponible para asegurar que tengas la mejor experiencia posible.
            </p>
            <ul className="space-y-4">
              {[
                "Soporte técnico especializado las 24 horas",
                "Soluciones adaptadas a hogares y empresas",
                "Tecnología escalable que crece contigo",
                "Transparencia en todos nuestros servicios",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conectamos tus ideas con el mundo
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestra tecnología y servicio personalizado pueden
            transformar tu experiencia digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleSistemasEmpresarialesClick}
              className="px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Planes de Internet
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <a
              href="https://wa.link/65jl11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600 inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
