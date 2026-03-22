import React from 'react';
import { Icon } from '../atoms/Icon';

export const Informacion = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Cabecera de la página */}
      <div className="bg-bee-dark text-white py-16 px-6 text-center border-b border-black shadow-lg">
        <h1 className="font-abril text-4xl md:text-5xl text-bee-yellow mb-4 tracking-widest uppercase">Info y Políticas</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Toda la información que necesitás sobre pagos, envíos y nuestras garantías para que compres con total tranquilidad.
        </p>
      </div>

      {/* Contenedor Principal */}
      <div className="max-w-4xl mx-auto w-full px-6 py-16 space-y-10">
        
        {/* Sección 1: Pagos */}
        <div id="pagos" className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-black transition-colors">
          <div className="w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center shrink-0">
            <Icon name="lock" size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black mb-3 text-gray-900">Métodos de pago seguros</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              Pago seguro con MercadoPago, tarjetas de crédito o transferencia.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
              <li><strong>Tarjetas de crédito:</strong> Visa, MasterCard, American Express.</li>
              <li><strong>Tarjetas de débito:</strong> Visa Débito, Maestro, Cabal.</li>
              <li><strong>Efectivo:</strong> PagoFácil, Rapipago.</li>
              <li><strong>Transferencia bancaria:</strong> Directa a nuestro CBU/Alias (Consultá por descuentos pagando por este medio).</li>
            </ul>
          </div>
        </div>

        {/* Sección 2: Garantía */}
        <div id="garantia" className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-black transition-colors">
          <div className="w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center shrink-0">
            <Icon name="smile" size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black mb-3 text-gray-900">Nuestra garantía</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              ¿Algo no salió como lo planeado? ¡Lo solucionamos rápido!
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              En BEE MENDOZA cuidamos cada detalle, pero si tu producto presenta alguna falla de confección o error en el estampado, tenés 30 días para solicitar el cambio o reembolso. Escribinos a nuestro WhatsApp con tu número de orden y nuestro equipo se encargará de gestionar todo sin costo adicional para vos.
            </p>
          </div>
        </div>

        {/* Sección 3: Envíos */}
        <div id="envios" className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-black transition-colors">
          <div className="w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center shrink-0">
            <Icon name="truck" size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black mb-3 text-gray-900">Envíos a todo el país</h2>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              Ofrecemos envío estándar, exprés y retiro directo por sucursal.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
              <li><strong>Retiro en sucursal:</strong> Gratis en nuestro taller (La Colonia, Junín).</li>
              <li><strong>Envío Estándar:</strong> 3 a 6 días hábiles mediante Correo Argentino o Andreani.</li>
              <li><strong>Envío Exprés:</strong> 1 a 3 días hábiles a todo el país.</li>
              <li><em>El tiempo de envío corre a partir de que el producto personalizado está terminado.</em></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};