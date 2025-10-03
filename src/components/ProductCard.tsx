// /app/components/ProductCard.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Shirt, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../hooks/useCartStore';

interface ProductCardProps {
  product: Product;
  pathFolder?: string;
}

const ProductCard = ({ product, pathFolder }: ProductCardProps) => {
  const { addItem } = useCartStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasImages = product.images && product.images.length > 0;
  const totalImages = product.images?.length || 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };
console.log(product.name)
console.log(`${pathFolder || '/img/camisetas/'}`)
  return (
    <div className="bg-dark-secondary rounded-lg overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:border-gold">
      {/* Sección de imagen/galería */}
      <div className="bg-black relative h-70 flex justify-center items-center group">
        {hasImages && product.images ? (
          <>
            <div className="relative w-full h-full p-4">
              <Image
                src={`${pathFolder || '/img/camisetas/'}${product.images[currentImageIndex]}`}
                alt={`${product.name} - imagen ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            {/* Controles de navegación - solo si hay más de 1 imagen */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-opacity"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-opacity"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Indicadores de puntos */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-gold' : 'bg-gray-500'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <Shirt className="text-gray-500" size={64} />
        )}
      </div>

      {/* Información del producto */}
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