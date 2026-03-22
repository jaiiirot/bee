import React from 'react';
import { Shirt, Sparkles, Upload, Type, Shapes, Trash2 } from 'lucide-react';

export const LeftSidebar = ({ onAddText, onAddShape, onUpload, onDelete, onOpenProducts }) => {
  return (
    <aside className="w-24 bg-white border-r border-gray-200 flex flex-col h-full shrink-0 shadow-sm z-20">
      <div className="py-4 flex flex-col gap-1">
        
        <button onClick={onOpenProducts} className="flex flex-col items-center justify-center py-4 text-gray-600 hover:text-black hover:bg-gray-50 transition w-full">
          <Shirt size={26} className="mb-2" />
          <span className="text-[11px] font-bold">Productos</span>
        </button>

        <button className="flex flex-col items-center justify-center py-4 text-gray-300 cursor-not-allowed w-full">
          <Sparkles size={26} className="mb-2" />
          <span className="text-[11px] font-bold">Diseño IA</span>
        </button>

        <button onClick={onUpload} className="flex flex-col items-center justify-center py-4 text-gray-600 hover:text-black hover:bg-gray-50 transition w-full">
          <Upload size={26} className="mb-2" />
          <span className="text-[11px] font-bold">Subidas</span>
        </button>

        <button onClick={onAddText} className="flex flex-col items-center justify-center py-4 text-gray-600 hover:text-black hover:bg-gray-50 transition w-full">
          <Type size={26} className="mb-2" />
          <span className="text-[11px] font-bold">Texto</span>
        </button>

        <button onClick={onAddShape} className="flex flex-col items-center justify-center py-4 text-gray-600 hover:text-black hover:bg-gray-50 transition w-full">
          <Shapes size={26} className="mb-2" />
          <span className="text-[11px] font-bold">Gráficos</span>
        </button>
      </div>

      <div className="mt-auto py-4 border-t border-gray-100 flex flex-col gap-1">
        <button onClick={onDelete} className="flex flex-col items-center justify-center py-4 text-gray-400 hover:text-red-600 hover:bg-red-50 transition w-full">
          <Trash2 size={24} className="mb-2" />
          <span className="text-[11px] font-bold">Borrar</span>
        </button>
      </div>
    </aside>
  );
};