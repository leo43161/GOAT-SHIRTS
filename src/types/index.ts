// /app/types/index.ts
export interface Product {
  id: number;
  name: string;
  year: number;
  variant: string;
  version?: 'VERSIÓN JUGADOR' | 'VERSIÓN NACIONAL' | 'VERSIÓN RETRO' | 'ACTUAL' | 'VERSIÓN HINCHA';
  details?: string[];
  images?: string[]; // Placeholder for now
}

export interface YearData {
  year: number;
  player: string;
  seleccion: string;
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