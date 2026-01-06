import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [colorIndex, setColorIndex] = useState(0);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [logoAnimationStage, setLogoAnimationStage] = useState("initial");
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  const colors = isDarkMode
    ? ["text-red-400", "text-orange-400", "text-amber-400"]
    : ["text-red-600", "text-orange-600", "text-amber-600"];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animación del logo en tres etapas - SOLO EN DESKTOP
  useEffect(() => {
    if (isMobile) {
      // En móvil: saltar directamente al estado final
      setLogoAnimationStage("background");
      setTextRevealed(true);
      setLogoLoaded(true);
      return;
    }

    // En desktop: animación normal
    const timeline = setTimeout(() => {
      setLogoAnimationStage("center");

      setTimeout(() => {
        setTextRevealed(true);
        setLogoLoaded(true);

        setTimeout(() => {
          setLogoAnimationStage("background");
        }, 500);
      }, 1000);
    }, 300);

    return () => clearTimeout(timeline);
  }, [isMobile]);

  // Efecto de partículas (se mantiene igual para ambos modos)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = isDarkMode
          ? `rgba(220, 38, 38, ${Math.random() * 0.3 + 0.1})`
          : `rgba(185, 28, 28, ${Math.random() * 0.4 + 0.2})`;
        this.oscillation = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX + Math.cos(this.oscillation) * 0.2;
        this.y += this.speedY + Math.sin(this.oscillation) * 0.2;
        this.oscillation += 0.02;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(
        100,
        Math.floor((canvas.width * canvas.height) / 15000)
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = isDarkMode
        ? "rgba(15, 10, 10, 0.1)"
        : "rgba(255, 245, 245, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      ctx.strokeStyle = isDarkMode
        ? "rgba(220, 38, 38, 0.1)"
        : "rgba(185, 28, 28, 0.15)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const setup = () => {
      resizeCanvas();
      initParticles();
      animate();
    };

    setup();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionStage("fadeOut");
      setTimeout(() => {
        setColorIndex((prev) => (prev + 1) % colors.length);
        setTransitionStage("fadeIn");
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [colors.length]);

  const handleSistemasEmpresarialesClick = () => {
    navigate("/planes-RutaNet");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSpeedTestClick = () => {
    window.open("https://www.speedtest.net/", "_blank");
  };

  const bgGradient = isDarkMode
    ? "from-slate-900 via-red-900 to-slate-900"
    : "from-red-50 via-orange-50 to-amber-50";

  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const textMuted = isDarkMode ? "text-gray-300" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-white/10" : "bg-white/80";
  const cardBorder = isDarkMode ? "border-white/20" : "border-gray-200";
  const cardHover = isDarkMode
    ? "hover:border-red-400/50"
    : "hover:border-red-400/50";
  const overlay = isDarkMode
    ? "from-slate-900/80 via-red-900/60 to-slate-900/80"
    : "from-red-50/80 via-orange-50/60 to-amber-50/80";

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${bgGradient} transition-colors duration-1000`}
    >
      {/* Canvas de partículas animadas - SIEMPRE VISIBLE */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Logo de fondo con animación en tres etapas - SOLO EN DESKTOP */}
      {!isMobile && (
        <div
          className={`
          absolute inset-0 z-10 flex items-center justify-center
          transition-all duration-1000 ease-in-out
          ${
            logoAnimationStage === "initial"
              ? "opacity-0 scale-50"
              : logoAnimationStage === "center"
              ? "opacity-100 scale-100 z-20"
              : "opacity-10 scale-150 z-0"
          }
        `}
        >
          <img
            src="/img/LOGO_GBC.png"
            alt="RutaNet Background"
            className={`
              transition-all duration-1000 ease-in-out
              ${
                logoAnimationStage === "center"
                  ? "w-2/3 max-w-4xl"
                  : "w-full max-w-6xl"
              }
              h-auto object-contain
            `}
          />
        </div>
      )}

      {/* Overlay de gradiente - comportamiento diferente en mobile vs desktop */}
      <div
        className={`
        absolute inset-0 z-1 bg-gradient-to-br ${overlay} 
        transition-all duration-1000
        ${
          isMobile
            ? "opacity-100"
            : logoAnimationStage === "background"
            ? "opacity-100"
            : "opacity-0"
        }
      `}
      />

      {/* Contenido principal - comportamiento diferente en mobile vs desktop */}
      <div
        className={`
        relative z-10 max-w-7xl mx-auto px-6 py-20 sm:px-10 lg:px-10 
        flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20
        transition-all duration-700
        ${
          isMobile
            ? "opacity-100 translate-y-0"
            : logoAnimationStage === "background"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
      `}
      >
        {/* Toggle Button Día/Noche */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={toggleDarkMode}
            className={`relative w-16 h-8 rounded-full p-1 transition-all duration-500 ${
              isDarkMode
                ? "bg-gradient-to-r from-red-500 to-orange-600"
                : "bg-gradient-to-r from-amber-400 to-orange-500"
            } shadow-lg hover:shadow-xl transform hover:scale-110`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-500 ${
                isDarkMode
                  ? "transform translate-x-0"
                  : "transform translate-x-8"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {isDarkMode ? (
                  <svg
                    className="w-3 h-3 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          </button>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {isDarkMode ? "Modo Noche" : "Modo Día"}
          </span>
        </div>

        {/* Contenedor de texto */}
        <div className={`flex-1 max-w-2xl flex flex-col gap-8 ${textColor}`}>
          {/* Título principal */}
          <div className="space-y-4">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span
                  className={`block bg-gradient-to-r ${
                    isDarkMode
                      ? "from-white to-gray-300"
                      : "from-gray-800 to-gray-600"
                  } bg-clip-text text-transparent transition-all duration-700 ease-out ${
                    isMobile
                      ? "translate-x-0 opacity-100"
                      : textRevealed
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  Conectividad
                </span>
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span
                  className={`block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                    isMobile
                      ? "translate-x-0 opacity-100"
                      : textRevealed
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                >
                  Empresarial Inteligente
                </span>
              </h1>
            </div>

            <div
              className={`h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full transition-all duration-700 delay-300 ${
                isMobile
                  ? "w-20 opacity-100"
                  : textRevealed
                  ? "w-20 opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </div>

          {/* Descripción */}
          <div
            className={`transition-all duration-700 ${
              isMobile
                ? "translate-y-0 opacity-100"
                : textRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p
              className={`text-lg sm:text-xl lg:text-2xl leading-relaxed font-light ${textMuted}`}
            >
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                RutaNet
              </span>{" "}
              redefine la experiencia digital con soluciones de red adaptativas,
              seguridad proactiva y ancho de banda escalable para el crecimiento
              de tu negocio.
            </p>
          </div>

          {/* Botón CTA */}
          <div
            className={`transition-all duration-700 ${
              isMobile
                ? "translate-y-0 opacity-100"
                : textRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <button
              onClick={handleSistemasEmpresarialesClick}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Planes de Internet RutaNet
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Badges de características */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 transition-all duration-700 ${
              isMobile
                ? "translate-y-0 opacity-100"
                : textRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {[
              { icon: "⚡", label: "Alta Velocidad", desc: "Fibra óptica" },
              { icon: "🛡️", label: "Seguridad", desc: "Protección avanzada" },
              { icon: "📶", label: "Cobertura", desc: "99.9% estable" },
            ].map((badge, index) => (
              <div
                key={index}
                className={`group flex items-center ${cardBg} backdrop-blur-md px-4 py-3 rounded-2xl border ${cardBorder} ${cardHover} transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <span className="text-2xl mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </span>
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold ${textColor}`}>
                    {badge.label}
                  </span>
                  <span
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {badge.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenedor del nuevo logo */}
        <div className="flex-1 max-w-xl">
          <div
            className={`relative transform transition-all duration-700 ease-out ${
              isMobile
                ? "opacity-100 scale-100 rotate-0"
                : logoLoaded
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-12"
            }`}
          >
            {/* Efecto de glow rojo */}
            <div
              className={`absolute inset-0 rounded-3xl blur-xl transform scale-110 -z-10 ${
                isDarkMode
                  ? "bg-gradient-to-r from-red-400/20 to-orange-500/20"
                  : "bg-gradient-to-r from-red-400/30 to-orange-500/30"
              }`}
            />

            {/* Nuevo logo principal */}
            <div
              className={`relative ${cardBg} backdrop-blur-xl border ${cardBorder} rounded-3xl p-6 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 group`}
            >
              <img
                src="/img/megahnet_logo.png"
                alt="RutaNet Logo"
                className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = "block";
                  }
                }}
              />
              <div className="hidden text-center p-8">
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-lg font-semibold text-gray-600">
                  Nuevo Logo RutaNet
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Reemplaza LOGO_NUEVO.png
                </p>
              </div>

              {/* Partículas decorativas rojas */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl -z-10">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full animate-float ${
                      isDarkMode ? "bg-red-400" : "bg-red-500"
                    }`}
                    style={{
                      top: `${25 + i * 15}%`,
                      left: `${15 + i * 20}%`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${2.5 + i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Tarjeta flotante de Speedtest */}
            <div
              className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-orange-600 text-white p-3 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer group"
              onClick={handleSpeedTestClick}
            >
              <div className="text-center">
                <div className="w-8 h-8 mb-1 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/img/speedtest.png"
                    alt="Speedtest Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <div className="hidden text-xl">📊</div>
                </div>
                <div className="text-xs font-bold">
                  PRUEBA TU
                  <br />
                  VELOCIDAD!
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-3 rounded-xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-xl mb-1">🛡️</div>
                <div className="text-xs font-bold">PROTEGIDO</div>
              </div>
            </div>
          </div>

          {/* Características adicionales */}
          <div
            className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-700 ${
              isMobile
                ? "translate-y-0 opacity-100"
                : textRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {[
              { icon: "🌐", label: "Red Inteligente" },
              { icon: "💵", label: "Precios Cómodos" },
              { icon: "📡", label: "Señal Estable" },
            ].map((card, i) => (
              <div
                key={i}
                className={`${cardBg} backdrop-blur-md border ${cardBorder} rounded-xl p-3 text-center flex flex-col items-center justify-center ${textColor} hover:scale-105 transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-xl mb-1 transform group-hover:scale-125 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="text-xs font-medium group-hover:text-red-600 transition-colors duration-300">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Efectos de animación CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
