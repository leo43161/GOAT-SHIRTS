// /app/components/Cart.tsx
"use client";

import { useCartStore } from '../hooks/useCartStore';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Trash2, ShoppingCart, Send } from 'lucide-react';
import { generateOrderMessage, getOrderWhatsAppLink } from '../lib/whatsapp';

const Cart = () => {
  const { isOpen, toggleCart, items, removeItem } = useCartStore();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const message = generateOrderMessage(items);
    const link = getOrderWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-dark-primary text-white flex flex-col z-50"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">Mi Carrito</h2>
              <button onClick={toggleCart} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-grow flex flex-col justify-center items-center text-gray-400">
                <ShoppingCart size={64} />
                <p className="mt-4">Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-dark-secondary p-3 rounded-md">
                    <div>
                      <p className="font-semibold">{item.name} - {item.variant}</p>
                      <p className="text-sm text-gray-400">{item.version || `Año ${item.year}`}</p>
                    </div>
                    <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-400">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <div className="p-4 border-t border-gray-700">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                >
                  <Send size={20} />
                  FINALIZAR COMPRA VÍA WHATSAPP
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;