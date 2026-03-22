import React from 'react';

export const GuiaTalles = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-bee-dark text-white py-16 px-6 text-center border-b border-black shadow-lg">
        <h1 className="font-abril text-4xl md:text-5xl text-bee-yellow mb-4 tracking-widest uppercase">Guía de Talles</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Encontrá el talle perfecto. Te recomendamos tomar una prenda que te quede bien, apoyarla sobre una superficie plana y medir el ancho (axila a axila) y el largo.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 py-16 space-y-16">
        
        <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-sm">
          <h2 className="text-2xl font-black text-bee-dark mb-6 border-b-4 border-bee-yellow pb-2 inline-block uppercase">Indumentaria General (Adultos)</h2>
          <img 
            src="/src/assets/img/talles-desktop.jpg" 
            alt="Guía de talles para remeras y buzos" 
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-sm">
          <h2 className="text-2xl font-black text-bee-dark mb-6 border-b-4 border-bee-yellow pb-2 inline-block uppercase">Línea Laboral (Chombas y Remeras)</h2>
          <img 
            src="/src/assets/img/talles-remerasChombas-desktop.jpg" 
            alt="Guía de talles para indumentaria laboral" 
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

      </div>
    </div>
  );
};