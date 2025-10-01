// /app/types/index.ts
export interface Product {
  id: number;
  name: string;
  year: number;
  variant: 'TITULAR' | 'SUPLENTE';
  version?: 'VERSIÓN JUGADOR' | 'VERSIÓN NACIONAL';
  details?: string[];
  images?: string[]; // Placeholder for now
}

export interface YearData {
  year: number;
  player: string;
  cover: {
    title: string;
    img: string;
    matchInfo: string;
  };
  products: Product[];
}

export interface CartItem extends Product {
  quantity: number;
}