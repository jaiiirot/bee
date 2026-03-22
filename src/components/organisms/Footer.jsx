import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../atoms/Icon';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col font-sans">
      
      <div className="bg-white py-12 px-6 border-t border-gray-200 text-gray-800 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
 <div className="flex flex-col items-center">
            <Icon name="lock" size={36} strokeWidth={1.5} className="mb-4 text-black" />
            <h4 className="font-black text-lg mb-2">Métodos de pago seguros</h4>
            <p className="text-gray-500 text-sm mb-3">Pago seguro con MercadoPago,<br/>tarjetas de crédito o transferencia.</p>
            {/* AHORA LLEVA A /informacion#pagos */}
            <Link to="/informacion" className="text-xs font-bold flex items-center gap-1 hover:text-bee-yellow transition uppercase tracking-widest">
              Leer más <Icon name="arrow-right" size={14}/>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Icon name="smile" size={36} strokeWidth={1.5} className="mb-4 text-black" />
            <h4 className="font-black text-lg mb-2">Nuestra garantía</h4>
            <p className="text-gray-500 text-sm mb-3">¿Algo no salió como lo planeado?<br/>¡Lo solucionamos rápido!</p>
            {/* AHORA LLEVA A /informacion#garantia */}
            <Link to="/informacion" className="text-xs font-bold flex items-center gap-1 hover:text-bee-yellow transition uppercase tracking-widest">
              Nuestra política <Icon name="arrow-right" size={14}/>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Icon name="truck" size={36} strokeWidth={1.5} className="mb-4 text-black" />
            <h4 className="font-black text-lg mb-2">Envíos a todo el país</h4>
            <p className="text-gray-500 text-sm mb-3">Ofrecemos envío estándar, exprés<br/>y retiro directo por sucursal.</p>
            {/* AHORA LLEVA A /informacion#envios */}
            <Link to="/informacion" className="text-xs font-bold flex items-center gap-1 hover:text-bee-yellow transition uppercase tracking-widest">
              Info sobre envíos <Icon name="arrow-right" size={14}/>
            </Link>
          </div>

        </div>
      </div>

      <div className="bg-[#101010] text-gray-400 py-16 px-6 md:px-20 border-t border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="flex flex-col">
            <h2 className="font-abril text-3xl text-white mb-2 tracking-widest">BEE MENDOZA</h2>
            <p className="text-bee-yellow text-xs font-bold tracking-widest mb-4 uppercase">Indumentaria</p>
            <p className="text-sm leading-relaxed mb-6">
              Diseño y producción textil personalizada. Donde cada tela tiene su historia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/_beemendoza" target="_blank" rel="noreferrer" className="text-white hover:text-bee-yellow transition">
                <Icon name="instagram" size={22} />
              </a>
              <a href="#" className="text-white hover:text-bee-yellow transition">
                <Icon name="facebook" size={22} />
              </a>
            </div>
          </div>

          {/* ... columnas de enlaces (intactas) ... */}
        <div className="flex flex-col">
            <h4 className="text-white font-black tracking-widest mb-6 uppercase text-sm">Nuestras Líneas</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/catalogo?cat=egresados" className="hover:text-bee-yellow transition">Indumentaria Egresados</Link></li>
              <li><Link to="/catalogo?cat=sport" className="hover:text-bee-yellow transition">Bee Sport (Deportivo)</Link></li>
              <li><Link to="/catalogo?cat=laboral" className="hover:text-bee-yellow transition">Indumentaria Laboral</Link></li>
              <li><Link to="/catalogo?cat=merchandising" className="hover:text-bee-yellow transition">Merchandising y Objetos</Link></li>
            </ul>
          </div>
<div className="flex flex-col">
            <h4 className="text-white font-black tracking-widest mb-6 uppercase text-sm">Ayuda y Servicio</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/nosotros" className="hover:text-bee-yellow transition">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-bee-yellow transition">Contacto</Link></li>
              {/* CONECTAMOS ESTOS DOS LINKS: */}
              <li><Link to="/talles" className="hover:text-bee-yellow transition">Guía de Talles</Link></li>
              <li><Link to="/estampados" className="hover:text-bee-yellow transition">Técnicas de Estampado</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-black tracking-widest mb-6 uppercase text-sm">Ubicación</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <Icon name="map-pin" size={18} className="text-bee-yellow shrink-0 mt-0.5" /> 
                <span>La Colonia, Junín,<br/>Mendoza, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="clock" size={18} className="text-bee-yellow shrink-0" /> 
                <span>Lunes a Viernes<br/>9–13 hs | 15–17 hs</span>
              </div>
              <a href="https://wa.link/3n0uuw" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-bee-yellow transition mt-2 bg-[#1b1b1b] p-3 rounded border border-gray-800 w-max">
                {/* AHORA USA EL ÍCONO DE WHATSAPP */}
                <Icon name="whatsapp" size={18} className="text-bee-yellow" /> 
                <span className="font-bold tracking-wide">Escribinos por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="bg-black text-gray-600 text-xs text-center py-4 font-medium tracking-wider">
        © {new Date().getFullYear()} BEE MENDOZA. TODOS LOS DERECHOS RESERVADOS.
      </div>
    </footer>
  );
};