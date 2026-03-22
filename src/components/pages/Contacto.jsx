import React from 'react';
import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';

export const Contacto = () => {
  return (
    <div className="min-h-[80vh] bg-bee-gray text-white py-20 px-6 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-abril text-5xl text-bee-yellow mb-6">HABLEMOS.</h1>
          <p className="text-gray-400 text-lg mb-8">¿Tenés una idea para tu empresa, colegio o club? Escribinos y le damos forma.</p>
          
          <div className="space-y-6 font-bold tracking-wide">
            <div className="flex items-center gap-4"><MapPin className="text-bee-yellow" size={28}/> <span>La Colonia, Junín, Mendoza</span></div>
            <div className="flex items-center gap-4"><Clock className="text-bee-yellow" size={28}/> <span>Atención: 9–13 hs | 15–17 hs</span></div>
            <a href="https://wa.link/3n0uuw" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-bee-yellow transition">
              <MessageCircle className="text-bee-yellow" size={28}/> <span>Consultas por WhatsApp (Privado)</span>
            </a>
            <a href="https://instagram.com/_beemendoza" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-bee-yellow transition">
              <Instagram className="text-bee-yellow" size={28}/> <span>@_beemendoza</span>
            </a>
          </div>
        </div>

        {/* Formulario Estilo Bee */}
        <form className="bg-bee-dark p-8 border border-gray-800 shadow-2xl flex flex-col gap-4">
          <input type="text" placeholder="Tu Nombre" className="bg-bee-gray border border-gray-700 p-4 text-white focus:outline-none focus:border-bee-yellow" />
          <input type="email" placeholder="Tu Email" className="bg-bee-gray border border-gray-700 p-4 text-white focus:outline-none focus:border-bee-yellow" />
          <textarea placeholder="Contanos sobre tu proyecto..." rows="4" className="bg-bee-gray border border-gray-700 p-4 text-white focus:outline-none focus:border-bee-yellow resize-none"></textarea>
          <button type="button" className="bg-bee-yellow text-bee-dark font-black py-4 hover:bg-yellow-400 tracking-widest mt-2">ENVIAR MENSAJE</button>
        </form>
      </div>
    </div>
  );
};