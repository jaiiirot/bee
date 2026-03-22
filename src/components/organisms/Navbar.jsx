import { Menu, Facebook, Instagram, MessageCirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-bee-dark font-abril text-white px-4 md:px-8 py-4 flex justify-between items-center z-50 sticky top-0 w-full">
      
      {/* Izquierda: Menú + Catálogo */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-bee-yellow transition">
        <Menu size={28} />
        <span className="font-bold tracking-widest mt-1 hidden md:block">MENÚ</span>
      </div>
      
      {/* Centro: Título con tipografía Abril */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-4xl tracking-widest text-white hover:text-bee-yellow transition">
          BEE MENDOZA
        </h1>
      </Link>
      
      {/* Derecha: Redes Sociales */}
      <div className="flex gap-4 items-center">
        <a href="#" className="hover:text-bee-yellow transition"><Facebook size={20} /></a>
        <a href="https://instagram.com/_beemendoza" target="_blank" rel="noreferrer" className="hover:text-bee-yellow transition"><Instagram size={20} /></a>
        <a href="https://wa.link/3n0uuw" target="_blank" rel="noreferrer" className="hover:text-bee-yellow transition"><MessageCirclePlus size={20} /></a>
      </div>

    </nav>
  );
};