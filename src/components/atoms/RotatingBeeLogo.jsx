import React from 'react';

export const RotatingBeeLogo = () => {
  return (
    <div className="fixed top-1/2 right-10 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 bg-bee-dark text-white rounded-full flex items-center justify-center font-bold text-center border-4 border-white shadow-xl z-50 animate-bee-spin select-none pointer-events-none">
      <span className="text-sm font-black uppercase">
        BEE MENDOZA<br/>INDUMENTARIA
      </span>
    </div>
  );
};