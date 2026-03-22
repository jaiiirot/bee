import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useEditorStore } from '../store/useEditorStore';

const TShirtEditor = () => {
  // Traemos los datos de nuestro estado global
  const { productColor, currentView } = useEditorStore();
  
  // Referencia al elemento canvas en el DOM
  const canvasRef = useRef(null);
  // Referencia a la instancia de Fabric.js
  const fabricCanvas = useRef(null);

  useEffect(() => {
    // Inicializamos Fabric.js solo una vez cuando el componente se monta
    fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
      width: 200, // El ancho del área punteada azul (área de impresión)
      height: 300, // El alto del área de impresión
    });

    // Limpieza al desmontar el componente
    return () => {
      fabricCanvas.current.dispose();
    };
  }, []);

  // Función de prueba para agregar un texto al canvas
  const addText = () => {
    const text = new fabric.Text('¡Hola Bee!', {
      left: 50,
      top: 50,
      fontFamily: 'Arial',
      fill: '#ffffff',
      fontSize: 24,
    });
    fabricCanvas.current.add(text);
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-lg mx-auto mt-10">
      
      {/* CAPA 1: La imagen de la remera */}
      {/* Nota: En la vida real, esta imagen debería tener transparencia y cambiar según currentView */}
      <img 
        src={`/images/tshirt-${currentView}.png`} 
        alt="Remera" 
        className="w-full h-auto"
        style={{ backgroundColor: productColor }} // El fondo da el color, la imagen da las sombras
      />

      {/* CAPA 2: El área de diseño interactiva (Canvas) */}
      <div className="absolute border-2 border-dashed border-blue-400">
        <canvas ref={canvasRef} />
      </div>

      {/* Botón temporal para probar que el canvas funciona */}
      <button 
        onClick={addText}
        className="absolute -top-12 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Añadir Texto de Prueba
      </button>

    </div>
  );
};

export default TShirtEditor;