import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout';
import { Home } from './components/pages/Home';
import { Nosotros } from './components/pages/Nosotros';
import { Contacto } from './components/pages/Contacto';
import { EditorPage } from './components/pages/EditorPage';
import { Catalogo } from './components/pages/Catalogo';
import { Informacion } from './components/pages/Informacion'; // IMPORTAMOS LA NUEVA PÁGINA

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/informacion" element={<Informacion />} /> {/* AGREGAMOS LA RUTA */}
          <Route path="/editor" element={<EditorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;