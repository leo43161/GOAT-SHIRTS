// src/components/InfoBanner.tsx
"use client";

import { ShoppingCart, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const stepsData = [
  {
    icon: ShoppingCart,
    iconBg: 'bg-gold',
    iconColor: 'text-black',
    title: 'Elegí tus camisetas',
    description: 'Navegá por nuestro catálogo y agregá al carrito las que más te gusten.',
  },
  {
    icon: CheckCircle,
    iconBg: 'bg-gold',
    iconColor: 'text-black',
    title: 'Revisá tu pedido',
    description: 'Abrí el carrito y verificá que todo esté correcto antes de continuar.',
  },
  {
    icon: MessageCircle,
    iconBg: 'bg-green-500',
    iconColor: 'text-white',
    title: 'Finalizá por WhatsApp',
    description: 'Te redirigimos a WhatsApp con tu pedido listo para coordinar el pago y envío.',
  },
];

const InfoBanner = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // MODIFICADO: Reducido el padding vertical general
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-6 px-4 border-y-2 border-gold"
    >
      <div className="container mx-auto">
        {/* MODIFICADO: Reducido el margen inferior */}
        <div className="text-center mb-4">
          {/* MODIFICADO: Reducido el tamaño del texto */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            ¿Cómo hacer tu <span className="text-gold">pedido</span>?
          </h3>
          <p className="text-gray-400 text-sm">Es simple y rápido</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            return (
              // MODIFICADO: Reducido el padding de la tarjeta y el gap general
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-gold transition-all">
                {/* MODIFICADO: Reducido el tamaño del círculo del ícono y su margen inferior */}
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 ${step.iconBg}`}>
                  {/* MODIFICADO: Reducido el tamaño del ícono */}
                  <Icon className={step.iconColor} size={24} />
                </div>
                {/* MODIFICADO: Reducido el margen inferior */}
                <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                  {index + 1}
                </div>
                <h4 className="text-white font-bold text-base mb-1">{step.title}</h4>
                <p className="text-gray-400 text-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default InfoBanner;