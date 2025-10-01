// /app/page.tsx
import Hero from '@/components/Hero';
import YearSection from '@/components/YearSection';
import { yearsData } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="space-y-8">
        {yearsData.map((yearData) => (
          <YearSection key={yearData.year} yearData={yearData} />
        ))}
      </div>
      <footer className="text-center py-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} The Goat Store. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}