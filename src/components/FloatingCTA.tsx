// /app/components/FloatingCTA.tsx
"use client";

import { useState } from 'react';
import { Code, MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { getContactWhatsAppLink } from '../lib/whatsapp';

const FloatingCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContact = () => {
    const link = getContactWhatsAppLink();
    window.open(link, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 group">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gold text-black rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
        >
          <Code size={28} />
        </button>
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black text-white text-sm rounded-md px-3 py-1 whitespace-nowrap">
          ¿Necesitás tu propia web?
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-dark-secondary rounded-lg shadow-2xl p-8 max-w-md w-full relative border border-gold"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">¿Te gustaría tener tu catálogo como este?</h3>
              <p className="text-gray-300 mb-6">
                Creamos soluciones web personalizadas para tu negocio. Tiendas online, landing pages, aplicaciones web y más.
              </p>
              <button
                onClick={handleContact}
                className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <MessageSquare size={20} />
                CONTACTAR VÍA WHATSAPP
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;