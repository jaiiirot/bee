import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

export const MainLayout = () => {
  const location = useLocation();
  const isEditor = location.pathname === '/editor';

  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* ¡El Navbar ahora aparece en TODAS las páginas, el oscuro que te gusta! */}
      <Navbar />

      <Outlet />

      {/* El Footer y el Sello los seguimos ocultando en el Editor para dar espacio de trabajo */}
      {!isEditor && <Footer />}
      
      {!isEditor && (
        <img 
          src="/girar.png" 
          alt="Sello Bee" 
          className="absolute right-4 md:right-16 bottom-[15vh] md:bottom-[22vh] w-28 h-28 md:w-36 md:h-36 animate-[spin_15s_linear_infinite] z-[100] pointer-events-none drop-shadow-2xl"
        />
      )}
    </div>
  );
};