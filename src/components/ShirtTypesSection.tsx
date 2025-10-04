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
      // MODIFICADO: Tamaño del ícono reducido
      icon: <Shirt size={48} className="text-white" />
    },
    {
      id: 2,
      title: 'VERSION HINCHA',
      subtitle: 'ESCUDO Y LOGOS TERMOSELLADOS CALIDAD PREMIUM EN TELA',
      // MODIFICADO: Tamaño del ícono reducido
      icon: <Shirt size={48} className="text-white" />
    },
    {
      id: 3,
      title: 'VERSION JUGADOR',
      subtitle: 'ESCUDO Y LOGOS TERMOSELLADOS DETALLES DE LA TELA CON MICROPERFORACIONES LA MEJOR TELA ACTUALMENTE EN EL MERCADO',
      // MODIFICADO: Tamaño del ícono reducido
      icon: <Shirt size={48} className="text-white" />
    }
  ];

  return (
    // MODIFICADO: Padding vertical general reducido
    <section className="relative w-full bg-black py-8 px-4">
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
        {/* MODIFICADO: Margen inferior del contenedor del título reducido */}
        <div className="text-center mb-8">
          {/* MODIFICADO: Tamaño de fuente y margen reducidos */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            TIPOS DE
          </h2>
          {/* MODIFICADO: Tamaño de fuente y margen reducidos */}
          <h3 className="text-3xl md:text-5xl font-extrabold text-gold mb-4 tracking-tight">
            CAMISETAS
          </h3>
          {/* MODIFICADO: Tamaño de fuente reducido */}
          <p className="text-white text-base md:text-lg font-semibold">
            TENELOS EN CUENTA ANTES DE HACER TU PEDIDO
          </p>
        </div>

        {/* MODIFICADO: Margen superior y gap entre tarjetas reducidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          {shirtTypes.map((type) => (
            <div 
              key={type.id}
              // MODIFICADO: Padding interno de la tarjeta reducido
              className="bg-dark-secondary border-2 border-gold rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* MODIFICADO: Margen y padding del círculo del ícono reducidos */}
              <div className="mb-4 bg-black/50 rounded-full p-4">
                {type.icon}
              </div>
              {/* MODIFICADO: Tamaño de fuente y margen reducidos */}
              <h4 className="text-xl font-bold text-gold mb-3 tracking-wider">
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