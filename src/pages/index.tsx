// src/pages/index.tsx
import Hero from '@/components/Hero';
import ShirtTypesSection from '@/components/ShirtTypesSection';
import YearSection from '@/components/YearSection';
import AdditionalProductsSection from '@/components/AdditionalProductsSection';
import { yearsData } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShirtTypesSection />
      <div className="space-y-8 bg-black">
        {yearsData.map((yearData) => (
          <YearSection key={yearData.year} yearData={yearData} />
        ))}
      </div>
      <AdditionalProductsSection />
      <footer className="bg-black text-center py-8 text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} The Goat Store. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}