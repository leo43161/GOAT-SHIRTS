// src/components/ShirtTypesSection.tsx
"use client";

import Image from 'next/image';
import { Shirt } from 'lucide-react';

const ShirtTypesSection = () => {
  const shirtTypes = [
    {
      id: 1,
      title: 'VERSION NACIONAL',
      subtitle: 'ESCUDO Y LOGOS BORDADOS SPONSOR SUBLIMADOS',
      icon: <Shirt size={80} className="text-white" />
    },
    {
      id: 2,
      title: 'VERSION HINCHA',
      subtitle: 'ESCUDO Y LOGOS TERMOSELLADOS CALIDAD PREMIUM EN TELA',
      icon: <Shirt size={80} className="text-white" />
    },
    {
      id: 3,
      title: 'VERSION JUGADOR',
      subtitle: 'ESCUDO Y LOGOS TERMOSELLADOS DETALLES DE LA TELA CON MICROPERFORACIONES LA MEJOR TELA ACTUALMENTE EN EL MERCADO',
      icon: <Shirt size={80} className="text-white" />
    }
  ];

  return (
    <section className="relative w-full bg-black py-16 px-4">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/img25.jpg"
          alt="Fondo tipos de camisetas"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            TIPOS DE
          </h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-gold mb-6 tracking-tight">
            CAMISETAS
          </h3>
          <p className="text-white text-xl md:text-2xl font-semibold">
            TENELOS EN CUENTA ANTES DE HACER TU PEDIDO
          </p>
        </div>

        {/* Grid de tipos de camisetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {shirtTypes.map((type) => (
            <div 
              key={type.id}
              className="bg-dark-secondary border-2 border-gold rounded-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 bg-black/50 rounded-full p-6">
                {type.icon}
              </div>
              <h4 className="text-2xl font-bold text-gold mb-4 tracking-wider">
                {type.title}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {type.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShirtTypesSection;