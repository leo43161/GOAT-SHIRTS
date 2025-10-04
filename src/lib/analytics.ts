// src/lib/analytics.ts
// Sistema de analytics para trackear conversiones de WhatsApp

interface AnalyticsData {
  timestamp: string;
  totalProducts: number;
  products: string[];
  userAgent?: string;
  screenSize?: string;
  deviceType?: string;
}

// Detectar tipo de dispositivo del cliente
const getDeviceType = (): string => {
  if (typeof window === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'Mobile';
  if (/tablet|ipad/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

/**
 * Trackea conversiones de WhatsApp enviando los datos a Google Sheets
 * Esta función se ejecuta CADA VEZ que un cliente hace click en "Finalizar compra"
 */
export const trackWhatsAppConversion = async (cartItems: any[]) => {
  try {
    // Preparar los datos a enviar
    const data: AnalyticsData = {
      timestamp: new Date().toISOString(),
      totalProducts: cartItems.length,
      products: cartItems.map(item => 
        `${item.name} - ${item.variant}${item.version ? ' (' + item.version + ')' : ''}`
      ),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
      screenSize: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '',
      deviceType: getDeviceType()
    };

    // 🔥 REEMPLAZÁ ESTA URL CON LA QUE TE DÉ GOOGLE APPS SCRIPT
    // Después de implementar el script, vas a tener una URL como:
    // https://script.google.com/macros/s/AKfycbz...../exec
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw56tyuJxZRwrEzc2s_4lXnijNZ4PZzO5DI-6buN4PWu9XxKDGs-HSJEItenKRI1Uwx/exec';
    
    // Verificar que la URL esté configurada
    /* if (GOOGLE_SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbw56tyuJxZRwrEzc2s_4lXnijNZ4PZzO5DI-6buN4PWu9XxKDGs-HSJEItenKRI1Uwx/exec') {
      console.warn('⚠️ Google Apps Script URL no configurada. No se registrará la conversión.');
      console.warn('📝 Seguí las instrucciones en la guía para configurar analytics.');
      return;
    } */

    // Enviar los datos a Google Sheets
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Importante: Google Apps Script requiere no-cors
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('✅ Conversión registrada en Google Sheets');
    console.log('📊 Productos:', data.totalProducts);
    
  } catch (error) {
    console.error('❌ Error al registrar conversión:', error);
    // No lanzar error para no interrumpir el flujo de compra del usuario
  }
};

/**
 * Función opcional para trackear clicks en productos (para métricas avanzadas)
 * Podés usarla en ProductCard si querés ver qué productos se ven más
 */
export const trackProductView = async (productName: string, productYear: number) => {
  try {
    const data = {
      timestamp: new Date().toISOString(),
      event: 'product_view',
      product: productName,
      year: productYear,
      deviceType: getDeviceType()
    };

    // Usá la misma URL del script (o creá otro endpoint si querés separar los datos)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw56tyuJxZRwrEzc2s_4lXnijNZ4PZzO5DI-6buN4PWu9XxKDGs-HSJEItenKRI1Uwx/exec';
    
    if (GOOGLE_SCRIPT_URL !== 'https://script.google.com/macros/s/AKfycbw56tyuJxZRwrEzc2s_4lXnijNZ4PZzO5DI-6buN4PWu9XxKDGs-HSJEItenKRI1Uwx/exec') {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    }
  } catch (error) {
    // Silenciosamente ignorar errores para no afectar la UX
    console.error('Error tracking product view:', error);
  }
};