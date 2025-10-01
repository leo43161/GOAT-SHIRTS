// /app/lib/products.ts
import { YearData } from '../types';

export const yearsData: YearData[] = [
  {
    year: 1986,
    player: 'Diego Armando Maradona',
    cover: {
      title: 'México 1986',
      matchInfo: 'Cuartos de Final: Argentina 2 - Inglaterra 1',
    },
    products: [
      { id: 1, name: 'SELECCION ARGENTINA 1986', year: 1986, variant: 'TITULAR', image: 'placeholder.svg' },
      { id: 2, name: 'SELECCION ARGENTINA 1986', year: 1986, variant: 'SUPLENTE', image: 'placeholder.svg' },
    ],
  },
  {
    year: 1994,
    player: 'Diego Armando Maradona',
    cover: {
      title: 'USA 1994',
      matchInfo: 'Fase de Grupos: Argentina 4 - Grecia 0',
    },
    products: [
      { id: 3, name: 'SELECCION ARGENTINA 1994', year: 1994, variant: 'TITULAR', image: 'placeholder.svg' },
      { id: 4, name: 'SELECCION ARGENTINA 1994', year: 1994, variant: 'SUPLENTE', image: 'placeholder.svg' },
    ],
  },
  {
    year: 2006,
    player: 'Lionel Messi',
    cover: {
      title: 'Alemania 2006',
      matchInfo: 'Fase de Grupos: Argentina 6 - Serbia y Montenegro 0',
    },
    products: [
      { id: 5, name: 'SELECCION ARGENTINA 2006', year: 2006, variant: 'TITULAR', image: 'placeholder.svg' },
      { id: 6, name: 'SELECCION ARGENTINA 2006', year: 2006, variant: 'SUPLENTE', image: 'placeholder.svg' },
    ],
  },
  {
    year: 2022,
    player: 'Lionel Messi',
    cover: {
      title: 'Qatar 2022',
      matchInfo: 'FINAL: Argentina 3 (4) - Francia 3 (2)',
    },
    products: [
      { id: 7, name: 'SELECCION ARGENTINA 2022', year: 2022, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', image: 'placeholder.svg' },
      { id: 8, name: 'SELECCION ARGENTINA 2022', year: 2022, variant: 'TITULAR', version: 'VERSIÓN NACIONAL', image: 'placeholder.svg' },
      { id: 9, name: 'SELECCION ARGENTINA 2022', year: 2022, variant: 'SUPLENTE', version: 'VERSIÓN JUGADOR', image: 'placeholder.svg' },
      { id: 10, name: 'SELECCION ARGENTINA 2022', year: 2022, variant: 'SUPLENTE', version: 'VERSIÓN NACIONAL', image: 'placeholder.svg' },
    ],
  },
  {
    year: 2024,
    player: 'Lionel Messi',
    cover: {
      title: 'Copa América 2024',
      matchInfo: 'Semifinal: Argentina 2 - Canadá 0',
    },
    products: [
      { id: 11, name: 'SELECCION ARGENTINA 2024', year: 2024, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', details: ['Parche Campeón del Mundo', 'Parche Copa América'], image: 'placeholder.svg' },
      { id: 12, name: 'SELECCION ARGENTINA 2024', year: 2024, variant: 'TITULAR', version: 'VERSIÓN NACIONAL', details: ['Parche Campeón del Mundo', 'Parche Copa América'], image: 'placeholder.svg' },
      { id: 13, name: 'SELECCION ARGENTINA 2024', year: 2024, variant: 'SUPLENTE', version: 'VERSIÓN JUGADOR', details: ['Parche Campeón del Mundo', 'Parche Copa América'], image: 'placeholder.svg' },
      { id: 14, name: 'SELECCION ARGENTINA 2024', year: 2024, variant: 'SUPLENTE', version: 'VERSIÓN NACIONAL', details: ['Parche Campeón del Mundo', 'Parche Copa América'], image: 'placeholder.svg' },
    ],
  },
    {
    year: 2025,
    player: 'Alexis Mac Allister',
    cover: {
      title: 'Edición Especial 2025',
      matchInfo: 'Eliminatorias USA 2026: Argentina 4 - Brasil 1',
    },
    products: [
      { id: 15, name: 'EDICIÓN ESPECIAL 50 AÑOS', year: 2025, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', details: ['Parches y números personalizados'], image: 'placeholder.svg' },
      { id: 16, name: 'EDICIÓN ESPECIAL 50 AÑOS', year: 2025, variant: 'TITULAR', version: 'VERSIÓN NACIONAL', details: ['Parches y números personalizados'], image: 'placeholder.svg' },
    ],
  },
];