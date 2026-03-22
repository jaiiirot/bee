import { create } from "zustand";

export const useEditorStore = create((set) => ({
  // 1. Configuración del Producto Base
  productColor: "#333333", // Color por defecto (ej. Antracita)
  currentView: "front", // 'front', 'back', 'left', 'right'

  // 2. Acciones para modificar el producto
  setProductColor: (color) => set({ productColor: color }),
  setCurrentView: (view) => set({ currentView: view }),

  // 3. Estado del Canvas (Opcional pero útil para el carrito)
  // Aquí podríamos guardar un JSON con las coordenadas de los logos
  canvasData: {
    front: null,
    back: null,
    left: null,
    right: null,
  },

  // Guardamos el estado del diseño según la vista actual
  saveCanvasData: (view, data) =>
    set((state) => ({
      canvasData: { ...state.canvasData, [view]: data },
    })),
}));
