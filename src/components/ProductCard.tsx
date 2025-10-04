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
  const [isLoading, setIsLoading] = useState(false);
  // NUEVO: Estado para rastrear los índices de las imágenes que ya se han cargado.
  // Se inicializa con el índice 0, ya que la primera imagen se carga al montar el componente.
  const [loadedIndices, setLoadedIndices] = useState(new Set([0]));

  const hasImages = product.images && product.images.length > 0;
  const totalImages = product.images?.length || 0;

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== currentImageIndex) {
      // MODIFICADO: Solo activar el 'loading' si el índice de la nueva imagen
      // no ha sido registrado como cargado previamente.
      if (!loadedIndices.has(newIndex)) {
        setIsLoading(true);
      }
      setCurrentImageIndex(newIndex);
    }
  };

  const nextImage = () => {
    if (hasImages) {
      const newIndex = (currentImageIndex + 1) % totalImages;
      handleImageChange(newIndex);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      const newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      handleImageChange(newIndex);
    }
  };

  return (
    <div className="bg-dark-secondary rounded-lg overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:border-gold">
      <div className="bg-black relative h-70 flex justify-center items-center group">
        {hasImages && product.images ? (
          <>
            <div className="relative w-full h-full p-4">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                  <Shirt className="text-gray-400 animate-pulse" size={64} />
                </div>
              )}
              <Image
                key={product.images[currentImageIndex]}
                src={`${pathFolder || '/img/camisetas/'}${product.images[currentImageIndex]}`}
                alt={`${product.name} - imagen ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                quality={80}
                // MODIFICADO: Ahora onLoadingComplete también registra el índice como cargado.
                onLoadingComplete={() => {
                  setIsLoading(false);
                  setLoadedIndices(prev => new Set(prev).add(currentImageIndex));
                }}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-30' : 'opacity-100'}`}
              />
            </div>
            
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-opacity z-20"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-opacity z-20"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={20} />
                </button>
                
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
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

      <div className="p-4 flex-grow flex flex-col">
          {/* ... resto del componente sin cambios ... */}
          <h3 className="font-bold text-white">{product.name}</h3>
          <p className="text-gold">{product.variant}</p>
          {product.version && <p className="text-sm text-gray-400 mt-1">{product.version}</p>}
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