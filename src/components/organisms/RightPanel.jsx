import React from 'react';

export const RightPanel = ({ selectedColor, setSelectedColor }) => {
  const colors = ['#374151', '#a07884', '#a4d4c8', '#f3f4f6', '#b91c1c', '#1e3a8a', '#15803d', '#ea580c', '#ffffff', '#000000'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];

  return (
    <aside className="w-[350px] bg-white border-l border-gray-200 p-6 flex flex-col text-gray-900 overflow-y-auto z-20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-black leading-tight">Camiseta prémium ecológica para hombre</h1>
          <a href="#" className="text-sm text-gray-500 underline mt-1 block">Ver detalles del producto</a>
        </div>
        <button className="text-gray-500 hover:text-black">aaaa</button>
      </div>

      <div className="mb-8">
        <p className="text-[11px] font-bold text-gray-500 mb-3 uppercase tracking-wider">Color Base</p>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black scale-110' : 'border-gray-200 hover:border-gray-400'} transition-all shadow-sm`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <p className="text-[11px] font-bold text-gray-500 uppercase">Elegir talla y cantidad</p>
          <span className="text-gray-300">•</span>
          <a href="#" className="text-xs underline text-black font-medium">Guía de tallas</a>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button key={size} className="bg-gray-50 border border-gray-200 text-gray-700 hover:border-black py-2 px-3 text-sm font-bold transition">
              {size} +
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-gray-100 pt-6">
        <p className="text-sm text-gray-500 mb-1">Detalles del precio</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-black text-black">21,99 €</span>
          <button className="bg-black text-white font-bold py-3 px-8 rounded hover:bg-gray-800 transition">
            Añadir a la cesta
          </button>
        </div>
      </div>
    </aside>
  );
};