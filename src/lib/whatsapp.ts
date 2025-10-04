// /app/lib/whatsapp.ts
import { CartItem } from '../types';

const VENDOR_PHONE_NUMBER = '+5493813547306'; // Reemplazar con el número real
const DEV_PHONE_NUMBER = '+5493816162181'; // Reemplazar con tu número de contacto

export const generateOrderMessage = (cartItems: CartItem[]): string => {
  let message = '¡Hola! Quiero realizar una preventa de The Goat Store:\n\n🛒 *MI PEDIDO:*\n';
  
  cartItems.forEach(item => {
    const version = item.version ? ` (${item.version})` : '';
    message += `- 1x ${item.name} ${item.variant}${version}\n`;
  });

  message += '\nEspero su respuesta. ¡Gracias!';
  
  return encodeURIComponent(message);
};

export const getOrderWhatsAppLink = (message: string): string => {
  return `https://wa.me/${VENDOR_PHONE_NUMBER}?text=${message}`;
};

export const getContactWhatsAppLink = (): string => {
  const message = encodeURIComponent('¡Hola! Me gustaría tener un catálogo web como el de The Goat Store. Quisiera más información sobre sus servicios.');
  return `https://wa.me/${DEV_PHONE_NUMBER}?text=${message}`;
}