import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Zap, ThumbsUp } from 'lucide-react'; // Íconos para la sección de confianza

export const Home = () => {
  const navigate = useNavigate();

  // Datos simulados para la nueva sección estilo Spreadshirt
  const productosPopulares = [
    { id: 1, nombre: "Remera Oversize Premium", precio: "$15.500", img: "/src/assets/img/camisetas1.jpg", colores: ['#131314', '#ffffff', '#b91c1c'] },
    { id: 2, nombre: "Buzo Canguro Egresados", precio: "$32.000", img: "/src/assets/img/buzos-camperas1.jpg", colores: ['#1e3a8a', '#131314', '#15803d'] },
    { id: 3, nombre: "Gorro Trucker Sublimado", precio: "$8.500", img: "/src/assets/img/gorros1.jpg", colores: ['#000000', '#FAE800'] },
    { id: 4, nombre: "Taza Mágica Cerámica", precio: "$6.000", img: "/src/assets/img/tazas1.jpg", colores: ['#ffffff', '#000000'] }
  ];

  return (
    <div className="flex-1 bg-white flex flex-col overflow-x-hidden">
      
      {/* 1. HERO SECTION (Intacto, tu diseño original) */}
      <main className="relative w-full h-[85vh] md:h-[90vh] flex flex-col items-center justify-end bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden pb-20">
          <h2 className="text-[32vw] font-abril text-bee-dark leading-none tracking-tighter select-none">
            PERSONA
          </h2>
        </div>
        <img 
          src="/remerafinal.png" 
          alt="Remera Bee Mendoza" 
          className="relative z-20 h-[70vh] md:h-[80vh] object-contain drop-shadow-2xl mb-10"
        />
        <div className="absolute bottom-[10%] md:bottom-20 w-full flex z-10">
          <div 
            onClick={() => navigate('/editor')}
            className="w-1/2 bg-bee-yellow py-4 md:py-5 pl-8 md:pl-32 flex items-center cursor-pointer hover:bg-yellow-400 transition shadow-lg"
          >
            <span className="font-black tracking-widest text-bee-dark text-lg md:text-xl">DISEÑAR &gt;</span>
          </div>
          <div className="w-1/2 bg-[#1b1b1b] py-4 md:py-5 pr-8 md:pr-40 flex items-center justify-end cursor-pointer hover:bg-black transition shadow-lg">
            <span className="font-black tracking-widest text-white text-lg md:text-xl">&lt; ¡COMPRAR!</span>
          </div>
        </div>
      </main>

      {/* 2. MARQUESINA (Intacta) */}
      <div className="bg-white border-y-2 border-bee-gray py-4 overflow-hidden z-20 relative shadow-sm">
        <div className="animate-marquee flex whitespace-nowrap font-abril text-xl md:text-2xl tracking-widest text-bee-dark items-center">
          <div className="flex items-center">
            <span className="mx-6">SERIGRAFÍA</span> <span className="text-gray-300 font-sans font-light">/</span>
            <span className="mx-6">BORDADO</span> <span className="text-gray-300 font-sans font-light">/</span>
            <span className="mx-6">D.T.F.</span> <span className="text-gray-300 font-sans font-light">/</span>
            <span className="mx-6">TERMOVINILO IMPRESO</span> <span className="text-gray-300 font-sans font-light">/</span>
          </div>
          <div className="flex items-center">
            <span className="mx-6">SERIGRAFÍA</span> <span className="text-gray-300 font-sans font-light">/</span>
            <span className="mx-6">BORDADO</span> <span className="text-gray-300 font-sans font-light">/</span>
            <span className="mx-6">D.T.F.</span> <span className="text-gray-300 font-sans font-light">/</span>
            <span className="mx-6">TERMOVINILO IMPRESO</span> <span className="text-gray-300 font-sans font-light">/</span>
          </div>
        </div>
      </div>

      {/* 3. NUEVO: SECCIÓN FAVORITOS (Estilo Spreadshirt pero con tu paleta) */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-abril text-3xl md:text-4xl text-bee-dark mb-10 tracking-widest uppercase">Nuestros Favoritos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosPopulares.map((prod) => (
              <div key={prod.id} className="bg-white p-5 border border-gray-200 hover:border-black hover:shadow-xl transition-all cursor-pointer group rounded-sm">
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden flex items-center justify-center">
                  <img src={prod.img} alt={prod.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
                </div>
                {/* Indicadores de colores (Típico de Spreadshirt) */}
                <div className="flex gap-1.5 mb-3">
                  {prod.colores.map((color, idx) => (
                    <div key={idx} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }}></div>
                  ))}
                  <span className="text-xs text-gray-400 ml-1">+{prod.colores.length} colores</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{prod.nombre}</h4>
                <p className="text-bee-gray font-black">{prod.precio}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <button className="border-2 border-bee-dark text-bee-dark font-black py-3 px-10 hover:bg-bee-dark hover:text-white transition tracking-widest uppercase text-sm">
              Ver todo el catálogo
            </button>
          </div>
        </div>
      </section>

      {/* 4. NUEVO: TRUST BADGES (Estilo Spreadshirt "3 Motivos", adaptado a Bee) */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center mb-4">
              <Award size={32} />
            </div>
            <h4 className="font-black text-xl mb-2 tracking-wide">Calidad Comprobada</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">Trabajamos con las mejores telas y talleres de Mendoza para asegurar que cada prenda resista el paso del tiempo.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center mb-4">
              <Zap size={32} />
            </div>
            <h4 className="font-black text-xl mb-2 tracking-wide">Impresión Premium</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">Serigrafía, Bordado, DTF y Termovinilo. Elegimos la técnica perfecta para que tu diseño resalte y no se borre.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center mb-4">
              <ThumbsUp size={32} />
            </div>
            <h4 className="font-black text-xl mb-2 tracking-wide">Sin Mínimos</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">Desde una remera única hasta indumentaria completa para todo tu colegio o empresa. Nos adaptamos a vos.</p>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN CATEGORÍAS (Intacta, tu diseño original de grilla oscura) */}
      <section className="bg-bee-gray text-white py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-abril text-4xl md:text-5xl text-bee-yellow text-center mb-16 tracking-wider">MÁS QUE ROPA, IDENTIDAD.</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {['EGRESADOS', 'BEE SPORT', 'IND. LABORAL', 'MERCHANDISING'].map((item) => (
              <div key={item} className="bg-bee-dark aspect-square flex flex-col items-center justify-center p-6 border border-gray-800 hover:border-bee-yellow hover:-translate-y-2 transition-all cursor-pointer group shadow-xl rounded-sm">
                <div className="w-16 h-16 rounded-full bg-white mb-4 group-hover:scale-110 transition-transform"></div> 
                <h4 className="font-black tracking-widest text-center text-sm md:text-base group-hover:text-bee-yellow transition">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};