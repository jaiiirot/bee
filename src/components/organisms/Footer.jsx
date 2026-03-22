import React from 'react';
import { MapPin, Clock, MessageCircle, Instagram, Facebook, Lock, Smile, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col font-sans">
      
      {/* 1. PRE-FOOTER: BARRA DE CONFIANZA (Idéntica a la estructura de Spreadshirt) */}
      <div className="bg-white py-12 px-6 border-t border-gray-200 text-gray-800 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          {/* Tarjeta 1: Pagos */}
          <div className="flex flex-col items-center">
            <Lock size={36} strokeWidth={1.5} className="mb-4 text-black" />
            <h4 className="font-black text-lg mb-2">Métodos de pago seguros</h4>
            <p className="text-gray-500 text-sm mb-3">Pago seguro con MercadoPago,<br/>tarjetas de crédito o transferencia.</p>
            <a href="#" className="text-xs font-bold flex items-center gap-1 hover:text-bee-yellow transition uppercase tracking-widest">
              Leer más <ArrowRight size={14}/>
            </a>
          </div>

          {/* Tarjeta 2: Garantía */}
          <div className="flex flex-col items-center">
            <Smile size={36} strokeWidth={1.5} className="mb-4 text-black" />
            <h4 className="font-black text-lg mb-2">Nuestra garantía</h4>
            <p className="text-gray-500 text-sm mb-3">¿Algo no salió como lo planeado?<br/>¡Lo solucionamos rápido!</p>
            <a href="#" className="text-xs font-bold flex items-center gap-1 hover:text-bee-yellow transition uppercase tracking-widest">
              Nuestra política <ArrowRight size={14}/>
            </a>
          </div>

          {/* Tarjeta 3: Envíos */}
          <div className="flex flex-col items-center">
            <Truck size={36} strokeWidth={1.5} className="mb-4 text-black" />
            <h4 className="font-black text-lg mb-2">Envíos a todo el país</h4>
            <p className="text-gray-500 text-sm mb-3">Ofrecemos envío estándar, exprés<br/>y retiro directo por sucursal.</p>
            <a href="#" className="text-xs font-bold flex items-center gap-1 hover:text-bee-yellow transition uppercase tracking-widest">
              Info sobre envíos <ArrowRight size={14}/>
            </a>
          </div>

        </div>
      </div>

      {/* 2. FOOTER PRINCIPAL: COLUMNAS DE ENLACES (Oscuro estilo Bee Mendoza) */}
      <div className="bg-[#101010] text-gray-400 py-16 px-6 md:px-20 border-t border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Marca */}
          <div className="flex flex-col">
            <h2 className="font-abril text-3xl text-white mb-2 tracking-widest">BEE MENDOZA</h2>
            <p className="text-bee-yellow text-xs font-bold tracking-widest mb-4 uppercase">Indumentaria</p>
            <p className="text-sm leading-relaxed mb-6">
              Diseño y producción textil personalizada. Donde cada tela tiene su historia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/_beemendoza" target="_blank" rel="noreferrer" className="text-white hover:text-bee-yellow transition">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-white hover:text-bee-yellow transition">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* Columna 2: Catálogo / Productos */}
          <div className="flex flex-col">
            <h4 className="text-white font-black tracking-widest mb-6 uppercase text-sm">Nuestras Líneas</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="hover:text-bee-yellow transition">Indumentaria Egresados</Link></li>
              <li><Link to="/" className="hover:text-bee-yellow transition">Bee Sport (Deportivo)</Link></li>
              <li><Link to="/" className="hover:text-bee-yellow transition">Indumentaria Laboral</Link></li>
              <li><Link to="/" className="hover:text-bee-yellow transition">Merchandising y Objetos</Link></li>
            </ul>
          </div>

          {/* Columna 3: Ayuda e Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-black tracking-widest mb-6 uppercase text-sm">Ayuda y Servicio</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/nosotros" className="hover:text-bee-yellow transition">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-bee-yellow transition">Contacto</Link></li>
              <li><a href="#" className="hover:text-bee-yellow transition">Guía de Talles</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition">Técnicas de Estampado</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto Rápido */}
          <div className="flex flex-col">
            <h4 className="text-white font-black tracking-widest mb-6 uppercase text-sm">Ubicación</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-bee-yellow shrink-0 mt-0.5" /> 
                <span>La Colonia, Junín,<br/>Mendoza, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-bee-yellow shrink-0" /> 
                <span>Lunes a Viernes<br/>9–13 hs | 15–17 hs</span>
              </div>
              <a href="https://wa.link/3n0uuw" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-bee-yellow transition mt-2 bg-[#1b1b1b] p-3 rounded border border-gray-800 w-max">
                <MessageCircle size={18} className="text-bee-yellow" /> 
                <span className="font-bold tracking-wide">Escribinos por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* 3. COPYRIGHT */}
      <div className="bg-black text-gray-600 text-xs text-center py-4 font-medium tracking-wider">
        © {new Date().getFullYear()} BEE MENDOZA. TODOS LOS DERECHOS RESERVADOS.
      </div>
      
    </footer>
  );
};