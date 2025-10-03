// src/pages/index.tsx
import Hero from '@/components/Hero';
import ShirtTypesSection from '@/components/ShirtTypesSection';
import YearSection from '@/components/YearSection';
import AdditionalProductsSection from '@/components/AdditionalProductsSection';
import { yearsData } from '@/lib/products';
import ProductsActuales from '@/components/ProductosActuales';
import ProductsRetro from '@/components/ProductsRetro';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShirtTypesSection />
      <div className="bg-black">
        {yearsData.map((yearData) => (
          <YearSection pathFolder="/img/camisetas/" key={yearData.year} yearData={yearData} />
        ))}
      </div>
      <ProductsActuales></ProductsActuales>
      <ProductsRetro></ProductsRetro>
      <AdditionalProductsSection />
      <footer className="bg-black text-center py-8 text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} The Goat Store. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}