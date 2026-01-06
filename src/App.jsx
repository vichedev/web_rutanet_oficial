// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import StandaloneNosotros from "./components/Nosotros";
import Documentos from "./components/Documentos";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";
import PlanesRutaNet from "./components/PlanesRutaNet";
import ControlParental from "./components/ControlParental";
import Normativas from "./components/Normativas"; // ✅ NUEVA IMPORTACIÓN
import ParametrosCalidad from "./components/ParametrosCalidad"; // ✅ NUEVA IMPORTACIÓN

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<StandaloneNosotros />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/planes-RutaNet" element={<PlanesRutaNet />} />
          <Route path="/control-parental" element={<ControlParental />} />
          <Route path="/normativas" element={<Normativas />} />{" "}
          {/* ✅ NUEVA RUTA */}
          <Route
            path="/parametros-calidad"
            element={<ParametrosCalidad />}
          />{" "}
          {/* ✅ NUEVA RUTA */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
