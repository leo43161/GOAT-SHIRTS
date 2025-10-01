// /app/components/ProductCard.tsx
"use client";

import { Shirt, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../hooks/useCartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCartStore();

  return (
    <div className="bg-dark-secondary border border-gray-700 rounded-lg overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:border-gold">
      <div className="bg-black p-8 flex justify-center items-center h-48">
        <Shirt className="text-gray-500" size={64} />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-white">{product.name}</h3>
        <p className="text-gold">{product.variant}</p>
        {product.version && <p className="text-sm text-gray-400 mt-1">{product.version}</p>}
        {product.details && (
          <div className="mt-2 text-xs text-gray-400">
            {product.details.map((detail, index) => (
              <span key={index} className="block">• {detail}</span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-4">
          <button 
            onClick={() => addItem(product)}
            className="w-full bg-gold text-black font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors"
          >
            <ShoppingCart size={18} />
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;