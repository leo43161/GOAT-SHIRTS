// /app/hooks/useCartStore.ts
import { create } from 'zustand';
import { Product, CartItem } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  toggleCart: () => void;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product) => {
    // Para este caso, cada "Agregar" suma una unidad nueva, no agrupa.
    const newItem: CartItem = { ...product, quantity: 1 };
    set((state) => ({ items: [...state.items, newItem] }));
  },

  removeItem: (itemId) => {
    // Como los IDs pueden repetirse (versión jugador/nacional), removemos por índice.
    // En una app real, cada item en el carrito tendría un ID único.
    set((state) => {
      const itemIndex = state.items.findIndex((item, index) => index === itemId);
      if (itemIndex > -1) {
        const newItems = [...state.items];
        newItems.splice(itemIndex, 1);
        return { items: newItems };
      }
      return state;
    });
  },
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));