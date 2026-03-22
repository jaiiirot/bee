import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';

// URLs con apariencia '1' (Blanco puro) para que el teñido funcione perfecto
const VISTAS_SPREADSHIRT = [
  { id: 'front', label: 'delante', img: 'https://image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/1/appearances/1?width=800&height=800' },
  { id: 'back', label: 'detrás', img: 'https://image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/2/appearances/1?width=800&height=800' },
  { id: 'right', label: 'dcha.', img: 'https://image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/3/appearances/1?width=800&height=800' },
  { id: 'left', label: 'izqda.', img: 'https://image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/4/appearances/1?width=800&height=800' }
];

export const Workspace = ({ canvasRef, fabricCanvas, color }) => {
  const [vistaActiva, setVistaActiva] = useState(VISTAS_SPREADSHIRT[0]);

  useEffect(() => {
    if (fabricCanvas.current) return;
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 250, 
      height: 380,
    });
    fabricCanvas.current = canvas;
    return () => { canvas.dispose(); fabricCanvas.current = null; };
  }, []);

  return (
    <main className="flex-1 bg-[#f4f5f6] flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="relative flex flex-col items-center justify-center mb-16">
        
        {/* CAPA 1: EL COLOR. Usa la imagen como "molde" para no salirse de los bordes */}
        <div 
          className="absolute inset-0 transition-colors duration-300"
          style={{ 
            backgroundColor: color,
            maskImage: `url(${vistaActiva.img})`,
            WebkitMaskImage: `url(${vistaActiva.img})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center'
          }}
        ></div>

        {/* CAPA 2: LA REMERA. Usa mix-blend-multiply para absorber el color de la capa 1 y mantener las sombras */}
        <img 
          src={vistaActiva.img} 
          alt={vistaActiva.label}
          className="relative z-0 w-[500px] h-[500px] object-contain pointer-events-none mix-blend-multiply opacity-90"
        />

        {/* CAPA 3: EL CANVAS. Donde se dibujan los logos */}
        <div className="absolute top-[18%] z-10 border border-dashed border-transparent hover:border-blue-400 transition-colors">
          <canvas ref={canvasRef} />
        </div>

      </div>

      {/* SELECTOR DE VISTAS */}
      <div className="absolute bottom-6 flex gap-3">
        {VISTAS_SPREADSHIRT.map((vista) => (
          <div key={vista.id} className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => setVistaActiva(vista)}>
            <div className={`p-1 bg-white rounded-lg border ${vistaActiva.id === vista.id ? 'border-black' : 'border-transparent group-hover:border-gray-300'} transition-all`}>
              <img src={vista.img} alt={vista.label} className="w-11 h-11 object-contain" />
            </div>
            <span className={`text-xs font-semibold ${vistaActiva.id === vista.id ? 'text-black opacity-100' : 'text-gray-500 opacity-0 group-hover:opacity-100'} transition-opacity`}>
              {vista.label}
            </span>
          </div>
        ))}
      </div>

    </main>
  );
};