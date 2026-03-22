import React, { useRef, useState } from 'react';
import { fabric } from 'fabric'; 
import { LeftSidebar } from '../organisms/LeftSidebar';
import { RightPanel } from '../organisms/RightPanel';
import { Workspace } from '../organisms/Workspace';
import { ProductsModal } from '../organisms/ProductsModal';

export const EditorPage = () => {
  const canvasRef = useRef(null);
  const fabricCanvas = useRef(null);
  const fileInputRef = useRef(null);
  
  const [selectedColor, setSelectedColor] = useState('#374151');
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  const handleAddText = () => {
    if (!fabricCanvas.current) return;
    const text = new fabric.IText('TU TEXTO', {
      left: 50, top: 50, fontFamily: 'Arial', fill: '#000000', fontSize: 30, fontWeight: 'bold'
    });
    fabricCanvas.current.add(text);
    fabricCanvas.current.setActiveObject(text);
  };

  const handleAddShape = () => {
    if (!fabricCanvas.current) return;
    const rect = new fabric.Rect({
      left: 60, top: 60, fill: '#ef4444', width: 80, height: 80, rx: 10, ry: 10
    });
    fabricCanvas.current.add(rect);
    fabricCanvas.current.setActiveObject(rect);
  };

  // Validación extra para asegurar que se abra el explorador de archivos
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !fabricCanvas.current) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgObj = new Image();
      imgObj.src = event.target.result;
      imgObj.onload = () => {
        const fabricImage = new fabric.Image(imgObj);
        fabricImage.scaleToWidth(150);
        fabricCanvas.current.add(fabricImage);
        fabricCanvas.current.centerObject(fabricImage);
        fabricCanvas.current.setActiveObject(fabricImage);
      };
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // Limpiamos el input para poder subir la misma foto 2 veces seguidas si se quiere
  };

  const handleDelete = () => {
    if (!fabricCanvas.current) return;
    const activeObjects = fabricCanvas.current.getActiveObjects();
    if (activeObjects.length) {
      activeObjects.forEach(obj => fabricCanvas.current.remove(obj));
      fabricCanvas.current.discardActiveObject();
    }
  };

  return (
    // Calculamos el alto de la pantalla menos el Navbar (~76px) para que no haya scroll innecesario
    <div className="flex w-full bg-white font-sans text-gray-800 overflow-hidden" style={{ height: 'calc(100vh - 76px)' }}>
      
      {/* Input de subida oculto pero dentro del flujo para no perder referencia */}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

      <LeftSidebar 
        onAddText={handleAddText} 
        onAddShape={handleAddShape}
        onUpload={handleUploadClick}
        onDelete={handleDelete}
        onOpenProducts={() => setIsProductsModalOpen(true)}
      />
      
      {/* AHORA SÍ LE PASAMOS EL COLOR AL WORKSPACE */}
      <Workspace canvasRef={canvasRef} fabricCanvas={fabricCanvas} color={selectedColor} />
      
      <RightPanel selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

      <ProductsModal isOpen={isProductsModalOpen} onClose={() => setIsProductsModalOpen(false)} />
      
    </div>
  );
};