// src/components/StickyCartReminder.tsx
"use client";

import { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCartStore } from '../hooks/useCartStore';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCartReminder = () => {
  const { getTotalItems, toggleCart } = useCartStore();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const items = getTotalItems();
    setTotalItems(items);

    // Mostrar el banner si:
    // - Tiene productos en el carrito
    // - No ha sido cerrado manualmente
    // - Han pasado 3 segundos desde que agregó algo
    if (items > 0 && !dismissed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 20000);

      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [getTotalItems(), dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setShow(false);
  };

  const handleOpenCart = () => {
    toggleCart();
    setShow(false);
  };

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-md w-full mx-4"
        >
          <div className="bg-gradient-to-r from-gold via-yellow-400 to-gold text-black rounded-full shadow-2xl px-6 py-4 flex items-center justify-between border-2 border-yellow-600">
            <div className="flex items-center gap-3">
              <div className="bg-black text-gold rounded-full p-2">
                <ShoppingCart size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">
                  ¡Tenés {totalItems} {totalItems === 1 ? 'producto' : 'productos'} en el carrito!
                </p>
                <p className="text-xs">Click para finalizar tu pedido por WhatsApp</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenCart}
                className="bg-black text-gold px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-900 transition-colors"
              >
                Ver carrito
              </button>
              <button
                onClick={handleDismiss}
                className="text-black hover:text-gray-700 transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCartReminder;