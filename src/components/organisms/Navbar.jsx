import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../atoms/Icon';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-bee-yellow" : "text-white hover:text-bee-yellow";

  return (
    <nav className="bg-[#101010] text-white px-4 md:px-8 py-4 flex justify-between items-center z-50 sticky top-0 w-full border-b border-gray-800">
      
      {/* Izquierda: Menú + Links (PC) */}
      <div className="flex items-center gap-6">
        
        {/* Catálogo con Menú Desplegable (Estilo de tu captura) */}
        <div className="hidden md:flex relative group items-center gap-3 cursor-pointer hover:text-bee-yellow transition py-4">
          <Icon name="menu" size={28} />
          <span className="font-bold tracking-widest text-sm mt-1">CATÁLOGO</span>
          
          {/* El Menú Flotante Oscuro */}
          <div className="absolute top-[100%] left-0 bg-[#1b1b1b] border-t-2 border-bee-yellow shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50 flex flex-col py-2">
             <Link to="/catalogo?cat=egresados" className="px-6 py-3 text-xs font-bold text-white hover:text-bee-yellow hover:bg-black transition tracking-widest uppercase">Indumentaria Egresados</Link>
             <Link to="/catalogo?cat=sport" className="px-6 py-3 text-xs font-bold text-white hover:text-bee-yellow hover:bg-black transition tracking-widest uppercase">Bee Sport (Deportivo)</Link>
             <Link to="/catalogo?cat=laboral" className="px-6 py-3 text-xs font-bold text-white hover:text-bee-yellow hover:bg-black transition tracking-widest uppercase">Indumentaria Laboral</Link>
             <Link to="/catalogo?cat=merchandising" className="px-6 py-3 text-xs font-bold text-white hover:text-bee-yellow hover:bg-black transition tracking-widest uppercase">Merchandising y Objetos</Link>
          </div>
        </div>

        {/* Botón menú hamburguesa (Mobile) */}
        <button className="md:hidden text-white hover:text-bee-yellow transition" onClick={() => setIsOpen(!isOpen)}>
          <Icon name={isOpen ? "x" : "menu"} size={28} />
        </button>
        
        <div className="hidden md:flex gap-6 text-sm font-bold tracking-widest">
          <Link to="/" className={isActive('/')}>INICIO</Link>
          <Link to="/nosotros" className={isActive('/nosotros')}>NOSOTROS</Link>
          <Link to="/contacto" className={isActive('/contacto')}>CONTACTO</Link>
        </div>
      </div>
      
      {/* Centro: Título */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-4xl font-abril tracking-widest text-white hover:text-bee-yellow transition">
          BEE MENDOZA
        </h1>
      </Link>
      
      {/* Derecha: Redes */}
      <div className="flex gap-4 items-center">
        <a href="#" className="hidden md:block hover:text-bee-yellow transition"><Icon name="facebook" size={20} /></a>
        <a href="https://instagram.com/_beemendoza" target="_blank" rel="noreferrer" className="hidden md:block hover:text-bee-yellow transition"><Icon name="instagram" size={20} /></a>
        <a href="https://wa.link/3n0uuw" target="_blank" rel="noreferrer" className="hidden md:block hover:text-bee-yellow transition"><Icon name="whatsapp" size={20} /></a>
        <Link to="/editor" className="bg-bee-yellow text-bee-dark font-black px-4 py-2 text-sm hover:bg-yellow-400 transition tracking-widest ml-2">
          DISEÑAR
        </Link>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#101010] border-b border-gray-800 flex flex-col p-4 md:hidden gap-4 font-bold tracking-widest z-50 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className={isActive('/')}>INICIO</Link>
          <Link to="/catalogo" onClick={() => setIsOpen(false)} className={isActive('/catalogo')}>CATÁLOGO</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className={isActive('/nosotros')}>NOSOTROS</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className={isActive('/contacto')}>CONTACTO</Link>
        </div>
      )}
    </nav>
  );
};