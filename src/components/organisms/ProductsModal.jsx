import { Icon } from '../atoms/Icon';

export const ProductsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-black text-gray-900">Elegir producto</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition"><Icon name="x" size={24} /></button>
        </div>

        {/* Cuerpo del Modal (2 Columnas) */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Columna Izquierda: Categorías */}
          <div className="w-64 border-r border-gray-100 p-6 overflow-y-auto hidden md:block">
            <div className="relative mb-6">
              <Icon name="search" size={18} />
              <input type="text" placeholder="Buscar..." className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <ul className="space-y-1 font-semibold text-gray-600">
              <li className="py-2 px-3 bg-gray-100 text-black rounded-lg cursor-pointer">Para hombre</li>
              <li className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">Para mujer</li>
              <li className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">Niños y bebés</li>
              <li className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">Accesorios</li>
              <li className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">Hogar y estilo de vida</li>
            </ul>
          </div>

          {/* Columna Derecha: Grilla de Productos */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Tarjeta de Producto (Repetida como ejemplo) */}
              {[1,2,3,4,5,6,7,8].map((item) => (
                <div key={item} className="bg-white p-4 rounded-xl border border-gray-200 hover:border-black cursor-pointer transition group">
                  <img 
                    src="https://image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/1/appearances/1256?width=300&height=300" 
                    alt="Remera" 
                    className="w-full h-auto object-contain mb-4 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">Camiseta prémium ecológica</h3>
                  <p className="text-xs text-gray-500 mt-1">Desde 21,99 €</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};