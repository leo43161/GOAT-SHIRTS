// /app/components/YearSection.tsx
import Image from 'next/image';
import { YearData } from '../types';
import ProductCard from './ProductCard';

interface YearSectionProps {
  yearData: YearData;
}

const YearSection = ({ yearData }: YearSectionProps) => {
  return (
    <section id={String(yearData.year)} className="w-full mx-auto">
      {/* Portada de Año */}
      <div className="text-white mb-8 border-gold shadow-lg relative min-[423px]:h-[750px] h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 z-[-1]" />
        <Image
          src="/img/img36.jpg" // Asegúrate de que la ruta sea correcta y la imagen esté en /public/img
          alt="Fondo The Goat Store"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-[-2]" // Por debajo del overlay
        />
        <div className="flex flex-col  justify-between items-center text-center h-full py-5">
          <div>
            <p className="min-[400px]:text-[2em] text-[1.2em] text-nowrap font-semibold b-0 text-shadow-md">SELECCION ARGENTINA</p>
            <h2 className="min-[400px]:text-[15em]/50 text-[12em]/50 text-white tracking-wide w-full font-black pb-4 text-shadow-lg year-text">{yearData.year}</h2>
          </div>
          <div className='w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Image
              src={"/img/players/" + yearData.cover.img} // Asegúrate de que la ruta sea correcta y la imagen esté en /public/img
              alt={yearData.player}
              layout="fill"
              objectFit="cover"
              quality={90}
              className="z-[0] scale-[1.011]" // Por debajo del overlay
            />
          </div>
          <div className='w-full flex justify-center flex-col '>
            <div className="mt-4 z-[1] text-center px-4 w-full mb-3">
              <p className="text-3xl font-bold text-shadow-md">{yearData.player}</p>
              <h3 className="text-xl font-semibold underline mb-2">{yearData.cover.title}</h3>
              <p className="text-md text-white">{yearData.cover.matchInfo}</p>
            </div>
            <p className="text-lg font-bold mt-2 z-[1]">GOAT<span className="text-gold">STORE</span></p>
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className='px-4 bg-black'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {yearData.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearSection;