import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

// Base de datos de productos de ejemplo conectados a tus imágenes
const PRODUCTOS = [
  { id: 1, categoria: 'egresados', nombre: "Buzo Canguro Premium", precio: "Desde $32.000", img: "/src/assets/img/buzos-camperas1.jpg", colores: ['#1e3a8a', '#131314', '#ffffff'] },
  { id: 2, categoria: 'egresados', nombre: "Remera Egresaditos", precio: "Desde $14.500", img: "/src/assets/img/camisetas1.jpg", colores: ['#b91c1c', '#ffffff'] },
  { id: 3, categoria: 'sport', nombre: "Remera Dry-Fit Entrenamiento", precio: "Desde $16.000", img: "/src/assets/img/camisetas2.jpg", colores: ['#131314', '#15803d', '#ffffff'] },
  { id: 4, categoria: 'sport', nombre: "Short Deportivo Microfibra", precio: "Desde $12.000", img: "/src/assets/img/shorts1.jpg", colores: ['#131314'] },
  { id: 5, categoria: 'sport', nombre: "Conjunto Deportivo Invierno", precio: "Desde $45.000", img: "/src/assets/img/conjuntos-de-invierno1.jpg", colores: ['#1e3a8a', '#131314'] },
  { id: 6, categoria: 'laboral', nombre: "Delantal Gabardina Reforzado", precio: "Desde $18.500", img: "/src/assets/img/delantales1.jpg", colores: ['#131314', '#4b5563'] },
  { id: 7, categoria: 'laboral', nombre: "Chomba Piqué Uniforme", precio: "Desde $21.000", img: "/src/assets/img/remeras-y-chombas1.jpg", colores: ['#ffffff', '#1e3a8a', '#131314'] },
  { id: 8, categoria: 'laboral', nombre: "Chaqueta Médica / Ambo", precio: "Desde $28.000", img: "/src/assets/img/chaquetas-ambos-guardapolvos1.jpg", colores: ['#ffffff', '#a4d4c8'] },
  { id: 9, categoria: 'merchandising', nombre: "Taza Mágica Cerámica", precio: "Desde $6.000", img: "/src/assets/img/tazas1.jpg", colores: ['#ffffff', '#000000'] },
  { id: 10, categoria: 'merchandising', nombre: "Gorro Trucker Sublimado", precio: "Desde $8.500", img: "/src/assets/img/gorros1.jpg", colores: ['#000000', '#FAE800'] },
  { id: 11, categoria: 'merchandising', nombre: "Llavero Cinta Personalizado", precio: "Desde $3.000", img: "/src/assets/img/llaveros1.jpg", colores: ['#FAE800', '#b91c1c', '#1e3a8a'] },
  { id: 12, categoria: 'merchandising', nombre: "Lapicera Metálica Grabada", precio: "Desde $4.500", img: "/src/assets/img/lapicera1.jpg", colores: ['#4b5563', '#131314'] },
];

const TABS = [
  { id: 'egresados', label: 'Egresados' },
  { id: 'sport', label: 'Bee Sport' },
  { id: 'laboral', label: 'Ind. Laboral' },
  { id: 'merchandising', label: 'Merchandising' },
];

export const Catalogo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Lee la URL para saber qué pestaña abrir (ej: /catalogo?cat=sport)
  const searchParams = new URLSearchParams(location.search);
  const catParam = searchParams.get('cat');
  const [activeTab, setActiveTab] = useState(catParam || 'egresados');

  // Si cambia la URL, actualizamos la pestaña
  useEffect(() => {
    if (catParam) setActiveTab(catParam);
  }, [catParam]);

  const productosFiltrados = PRODUCTOS.filter(p => p.categoria === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Cabecera del Catálogo */}
      <div className="bg-bee-dark text-white py-16 px-6 text-center border-b border-black">
        <h1 className="font-abril text-4xl md:text-5xl text-bee-yellow mb-4 tracking-widest uppercase">Catálogo</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Explorá nuestras líneas de productos, elegí tu modelo y personalizalo a tu medida en nuestro editor interactivo.</p>
      </div>

      {/* Selector de Pestañas (Tabs) */}
      <div className="bg-white border-b border-gray-200 sticky top-[76px] z-30 shadow-sm">
        <div className="max-w-6xl mx-auto flex overflow-x-auto no-scrollbar">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-6 text-sm font-black tracking-widest uppercase whitespace-nowrap border-b-4 transition-all ${
                activeTab === tab.id 
                  ? 'border-bee-yellow text-black bg-gray-50' 
                  : 'border-transparent text-gray-500 hover:text-black hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de Productos */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productosFiltrados.map((prod) => (
            <div key={prod.id} className="bg-white p-5 border border-gray-200 hover:border-black hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-square bg-gray-100 mb-4 overflow-hidden flex items-center justify-center">
                <img src={prod.img} alt={prod.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
              </div>
              
              <div className="flex gap-1.5 mb-3">
                {prod.colores.map((color, idx) => (
                  <div key={idx} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }}></div>
                ))}
              </div>
              
              <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{prod.nombre}</h4>
              <p className="text-gray-500 text-sm mb-6">{prod.precio}</p>
              
              <button 
                onClick={() => navigate('/editor')}
                className="mt-auto w-full border-2 border-bee-dark text-bee-dark font-black py-2 hover:bg-bee-dark hover:text-white transition tracking-widest uppercase text-xs"
              >
                Personalizar
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};