// /app/components/Hero.tsx
"use client"; // Es necesario si usas useState o animaciones client-side

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion'; // Asegúrate de tener framer-motion instalado

const Hero = () => {
    return (
        <section className="relative w-full h-svh flex flex-col items-center justify-center text-white">
            {/* Imagen de fondo con overlay degradado */}
            <Image
                src="/img/img25.jpg" // Asegúrate de que la ruta sea correcta y la imagen esté en /public/img
                alt="Fondo The Goat Store"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="z-[-2]" // Por debajo del overlay
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-dark/20 to-dark-secondary/80 z-[-1]" /> {/* Overlay degradado */}

            {/* Contenido del Hero */}
            <div className="container mx-auto px-4 text-center z-10 flex flex-col justify-center items-center h-full pt-20 pb-10"> {/* Añadido pt-20 para dejar espacio al header */}
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                    BIENVENIDOS
                </h2>
                <h3 className="text-xl md:text-2xl text-white mb-6 font-bold max-w-2xl mx-auto">
                    En <span className="text-gold">The Goat Store</span> queremos que seas de los primeros en adquirir nuestras prendas.
                </h3>
                <p className="max-w-3xl mx-auto text-white text-lg md:text-xl px-4">
                    Creamos esta venta anticipada exclusiva para clientes especiales como vos. Elegí tu estilo antes que nadie y sé parte del inicio de esta nueva etapa.
                </p>
            </div>

            {/* Botón indicativo de deslizar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <a 
                    href="#1986" // O cualquier ID de la primera sección de año
                    className="flex flex-col items-center text-white animate-bounce" // Animación personalizada
                >
                    <ChevronDown size={40} className="text-gold" />
                    <span className="text-sm mt-1 font-semibold tracking-wider">DESLIZA</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;