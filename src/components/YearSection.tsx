// /app/components/YearSection.tsx
import Image from 'next/image';
import { YearData } from '../types';
import ProductCard from './ProductCard';
import clsx from 'clsx';

interface YearSectionProps {
  yearData: YearData;
  classNameProducts?: string;
  pathFolder?: string;
}

const YearSection = ({ yearData, classNameProducts, pathFolder }: YearSectionProps) => {
  return (
    <section id={String(yearData.year)} className="w-full mx-auto z-10 md:flex md:justify-around md:items-center">
      {/* Portada de Año */}
      <div className="text-white pb-8 border-gold shadow-lg relative min-[423px]:h-[750px] h-[730px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 z-[-1]" />
        <Image
          src="/img/img36.jpg" // Asegúrate de que la ruta sea correcta y la imagen esté en /public/img
          alt="Fondo The Goat Store"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-[0]" // Por debajo del overlay
        />
        <div className="flex flex-col justify-between items-center text-center h-full pt-5 pb-3 z-[1]">
          <div className='z-[0]'>
            <p className="min-[400px]:text-[2em] text-[1.7em] text-nowrap font-semibold b-0 text-shadow-md">{yearData.seleccion}</p>
            <h2 className={typeof yearData.year === "string" ? "min-[400px]:text-[8em]/27 text-[7em]/25 text-white tracking-wide w-full font-black pb-4 text-shadow-lg year-text" : "min-[400px]:text-[15em]/50 text-[12em]/40 text-white tracking-wide w-full font-black pb-4 text-shadow-lg year-text"}>{yearData.year}</h2>
          </div>
          <div className='w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Image
              src={"/img/players/" + yearData.cover.img} // Asegúrate de que la ruta sea correcta y la imagen esté en /public/img
              alt={yearData.player}
              layout="fill"
              objectFit="cover"
              quality={90}
              className="z-[10] scale-[1.011]" // Por debajo del overlay
            />
          </div>
          <div className='w-full flex justify-center flex-col '>
            <div className="mt-4 z-[1] text-center px-4 w-full mb-3">
              <p className="text-3xl font-bold text-shadow-md">{yearData.player}</p>
              <h3 className="text-xl font-semibold underline mb-2">{yearData.cover.title}</h3>
              <p className="text-md text-white">{yearData.cover.matchInfo}</p>
            </div>
            <div className='z-[2]'>
              <Image
                src="/img/logo.png"
                alt="Logo The Goat Store"
                width={60}
                height={40}
                quality={90}
                className='mx-auto'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className='px-3 bg-black pt-4 pb-5'>
        <div className={clsx(classNameProducts, "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6")} >
          {yearData.products.map((product) => (
            <ProductCard pathFolder={pathFolder} key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearSection;