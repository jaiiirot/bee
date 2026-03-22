import React from 'react';

export const TecnicasEstampado = () => {
  const tecnicas = [
    { id: 1, titulo: "Serigrafía", desc: "Ideal para grandes cantidades. Alta durabilidad y colores vibrantes que penetran en la tela.", img: "/src/assets/img/nuestros-estampados-serigrafia.jpg" },
    { id: 2, titulo: "Bordado", desc: "El acabado más premium e institucional. Resistencia máxima, ideal para chombas, gorras y camperas.", img: "/src/assets/img/nuestros-estampados-bordado.jpg" },
    { id: 3, titulo: "D.T.F. (Direct to Film)", desc: "Impresión digital de alta definición. Permite degradados y calidad fotográfica sobre cualquier tipo de tela.", img: "/src/assets/img/nuestros-estampados-dtf.jpg" },
    { id: 4, titulo: "Sublimación", desc: "Perfecta para indumentaria deportiva (poliéster). La tinta se funde con la tela, por lo que no tiene tacto.", img: "/src/assets/img/nuestros-estampados-sublimacion.jpg" },
    { id: 5, titulo: "Termovinilo de Corte", desc: "Ideal para nombres, números o logos a un color. Acabado liso, definido y muy resistente a los lavados.", img: "/src/assets/img/nuestros-estampados-termovinilo.jpg" },
    { id: 6, titulo: "Termovinilo Impreso", desc: "Combina la fidelidad fotográfica con la técnica de estampado por calor. Útil para logos complejos en algodón.", img: "/src/assets/img/nuestros-estampados-termovinilo-impreso.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="bg-bee-dark text-white py-16 px-6 text-center border-b border-black shadow-lg">
        <h1 className="font-abril text-4xl md:text-5xl text-bee-yellow mb-4 tracking-widest uppercase">Técnicas de Estampado</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Conocé las tecnologías que utilizamos en nuestro taller para darle vida a tus diseños. Elegimos la mejor técnica según tu tipo de tela y complejidad del logo.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tecnicas.map((tec) => (
            <div key={tec.id} className="bg-white border border-gray-200 hover:border-bee-yellow hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col rounded-sm">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img src={tec.img} alt={tec.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-black text-bee-dark mb-2 tracking-wide uppercase">{tec.titulo}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{tec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};