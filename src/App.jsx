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
import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="nosotros/" element={<Nosotros />} />
          <Route path="productos/" element={<Productos />} />

          <Route path="ayuda/">
            <Route index element={<Ayuda />} />
            <Route
              path="PreguntasFrecuentes/"
              element={<PreguntasFrecuentes />}
            />
            <Route path="Terminos/" element={<Terminos />} />
            <Route path="ComoComprar/" element={<ComoComprar />} />
          </Route>

          <Route path="Contacto/" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
