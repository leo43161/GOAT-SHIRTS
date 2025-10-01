// src/components/AdditionalProductsSection.tsx
"use client";

import ProductCard from './ProductCard';
import { additionalProducts } from '../lib/products';

const AdditionalProductsSection = () => {
  return (
    <section className="w-full bg-dark-primary py-16 px-2">
      <div className="container mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            MÁS <span className="text-gold">PRODUCTOS</span>
          </h2>
          <p className="text-white text-lg md:text-xl">
            Descubrí nuestra colección completa
          </p>
        </div>

        {/* Grid de productos adicionales - 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {additionalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalProductsSection;