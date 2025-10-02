// /app/components/Header.tsx
"use client";

import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../hooks/useCartStore';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const { toggleCart, getTotalItems } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  // Evita hydration mismatch para el contador del carrito
  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalItems = isClient ? getTotalItems() : 0;

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm border-b-2 border-gold z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="w-1/3"></div> {/* Espacio para centrar el logo */}
        <div className="w-1/3 text-center">
          <Image
            src="/img/logo.png" // Asegúrate de que la ruta sea correcta y la imagen esté en /public/img          
            alt="Logo The Goat Store"
            width={80}
            height={50}
            className="mx-auto"
          />
        </div>
        <div className="w-1/3 flex justify-end">
          <button onClick={toggleCart} className="relative text-white hover:text-gold transition-colors">
            <ShoppingCart size={28} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;