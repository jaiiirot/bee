import React from 'react';

export const Nosotros = () => {
  return (
    <div className="min-h-[80vh] bg-bee-dark text-white py-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="font-abril text-5xl md:text-6xl text-bee-yellow mb-8 tracking-wider">NUESTRA HISTORIA</h1>
        <div className="bg-bee-gray p-8 md:p-12 border border-gray-800 shadow-xl text-left leading-relaxed text-lg text-gray-300 space-y-6">
          <p>
            En <strong className="text-white">BEE MENDOZA</strong>, no solo fabricamos ropa; creamos identidad. Somos un taller de diseño y producción textil personalizada ubicado en La Colonia, Junín, Mendoza.
          </p>
          <p>
            Nos especializamos en brindar soluciones integrales de indumentaria: desde buzos de egresados que marcan una etapa inolvidable, hasta indumentaria laboral resistente y ropa deportiva (BEE SPORT) diseñada para el rendimiento.
          </p>
          <p>
            Creemos firmemente en que <strong className="text-bee-yellow font-abril tracking-widest">"DONDE CADA TELA TIENE SU HISTORIA"</strong>. Nuestro compromiso es la calidad de nuestros estampados (Serigrafía, Bordado, D.T.F, Termovinilo) y la atención personalizada.
          </p>
        </div>
      </div>
    </div>
  );
};