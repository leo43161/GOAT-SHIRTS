"use client";

import { useEffect } from 'react';
import { useCartStore } from '../hooks/useCartStore';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Trash2, ShoppingCart, Send } from 'lucide-react';
import { generateOrderMessage, getOrderWhatsAppLink } from '../lib/whatsapp';
import { trackWhatsAppConversion } from '../lib/analytics';

const Cart = () => {
  const { isOpen, toggleCart, items, removeItem } = useCartStore();

  // 🔥 MANEJAR BOTÓN "ATRÁS" DEL NAVEGADOR (MOBILE)
  useEffect(() => {
    if (isOpen) {
      // Cuando se abre el carrito, agregamos una entrada al historial del navegador
      // Esto permite que el botón "Atrás" cierre el carrito en vez de cambiar de página
      window.history.pushState({ cartOpen: true }, '', window.location.href);

      const handlePopState = (event: PopStateEvent) => {
        // Cuando el usuario presiona "Atrás", cerramos el carrito
        if (isOpen) {
          toggleCart();
        }
      };

      // Escuchar el evento popstate (cuando se presiona Atrás)
      window.addEventListener('popstate', handlePopState);

      // Cleanup: Remover el listener cuando el componente se desmonta o el carrito se cierra
      return () => {
        window.removeEventListener('popstate', handlePopState);
        
        // Si el carrito se cierra de otra manera (ej: click en X), 
        // removemos la entrada extra del historial
        if (window.history.state?.cartOpen) {
          window.history.back();
        }
      };
    }
  }, [isOpen, toggleCart]);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    // Registrar la conversión antes de abrir WhatsApp
    trackWhatsAppConversion(items);
    
    const message = generateOrderMessage(items);
    const link = getOrderWhatsAppLink(message);
    window.open(link, '_blank');
  };

  // Función para cerrar el carrito correctamente
  const handleCloseCart = () => {
    // Cerramos usando toggleCart, el useEffect se encarga del historial
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Click para cerrar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseCart}
            className="fixed inset-0 bg-black bg-opacity-75 z-50"
          />

          {/* Sidebar del Carrito */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-dark-primary text-white flex flex-col z-50"
          >
            {/* Header del Carrito */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">Mi Carrito</h2>
              <button 
                onClick={handleCloseCart} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar carrito"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenido del Carrito */}
            {items.length === 0 ? (
              // Carrito Vacío
              <div className="flex-grow flex flex-col justify-center items-center text-gray-400 px-6">
                <ShoppingCart size={64} className="opacity-50" />
                <p className="mt-4 text-lg font-semibold">Tu carrito está vacío</p>
                <div className="mt-6 bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-sm text-white leading-relaxed">
                    <span className="text-gold font-bold">💡 ¿Cómo comprar?</span><br/>
                    Agregá las camisetas que te gusten al carrito y te redireccionaremos a WhatsApp para finalizar tu pedido.
                  </p>
                </div>
              </div>
            ) : (
              // Carrito con Productos
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-dark-secondary p-3 rounded-md border border-gray-700 hover:border-gold transition-colors"
                  >
                    <div>
                      <p className="font-semibold">{item.name} - {item.variant}</p>
                      <p className="text-sm text-gray-400">{item.version || `Año ${item.year}`}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(index)} 
                      className="text-red-500 hover:text-red-400 transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Footer con botón de Checkout */}
            {items.length > 0 && (
              <div className="p-4 border-t border-gray-700">
                {/* Contador de productos */}
                <div className="bg-gray-700 rounded-lg p-3 mb-3 text-center">
                  <p className="text-sm text-white">
                    <span className="text-gold font-bold">✓</span> Tenés <span className="text-gold font-bold">{items.length}</span> {items.length === 1 ? 'producto' : 'productos'} listo{items.length === 1 ? '' : 's'} para ordenar
                  </p>
                </div>
                
                {/* Botón de WhatsApp */}
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