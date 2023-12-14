import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/page/Body";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Home from "./components/page/Home";
import Ayuda from "./components/page/Ayuda";
import PreguntasFrecuentes from "./components/page/PreguntasFrecuentes";
import Terminos from "./components/page/Terminos";
import ComoComprar from "./components/page/ComoComprar";
import Productos from "./components/page/Productos";
import ParticlesBackground from "./components/config/ParticlesBackground";
import "./main.css";
import Section from "./components/productSection/section";
import SectionElement from "./components/productSection/SectionElement";

function App() {
  return (
    <>
      <ParticlesBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="nosotros/" element={<Nosotros />} />
            <Route path="productos/">
              <Route index element={<Productos />} />
              <Route path=":section/" element={<Section />}>
                <Route path=":element/" element={<SectionElement />} />
              </Route>
            </Route>

            <Route path="ayuda/">
              <Route index element={<Ayuda />} />
              <Route
                path="preguntas-frecuentes/"
                element={<PreguntasFrecuentes />}
              />
              <Route path="terminos/" element={<Terminos />} />
              <Route path="como-comprar/" element={<ComoComprar />} />
            </Route>
            <Route path="contacto/" element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
