import React from 'react';

// ATOM: Selector de Color
export const ColorSwatch = ({ color, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-8 h-8 rounded-full border-2 ${isSelected ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
    style={{ backgroundColor: color }}
  />
);

// ATOM: Selector de Talle
export const SizeButton = ({ size }) => (
  <button className="border border-gray-300 text-gray-700 py-1 px-3 text-sm hover:border-black hover:text-black">
    {size} +
  </button>
);

// MOLECULE: Botón de la barra lateral (Ícono + Texto)
export const SidebarItem = ({ icon: Icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center p-3 text-gray-600 hover:text-black hover:bg-gray-100 w-full transition">
    <Icon size={24} className="mb-1" />
    <span className="text-xs font-medium text-center">{label}</span>
  </button>
);

// MOLECULE: Miniatura de vista de remera (Frente, Espalda, etc.)
export const ViewThumbnail = ({ isSelected, label }) => (
  <div className="flex flex-col items-center gap-1 cursor-pointer">
    <div className={`w-12 h-12 bg-gray-200 border rounded ${isSelected ? 'border-black' : 'border-gray-300'}`}></div>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
);