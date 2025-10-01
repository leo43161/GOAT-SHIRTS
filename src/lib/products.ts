// /app/lib/products.ts
import { YearData, Product } from '../types';

export const yearsData: YearData[] = [
  {
    year: 1986,
    player: 'Diego Armando Maradona',
    cover: {
      img: "4.png",
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
      img: "8.png",
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
      img: "17.png",
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
      img: "21.png",
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
    img: "25.png",
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
    img: "30.png",
      title: 'Edición Especial 2025',
      matchInfo: 'Eliminatorias USA 2026: Argentina 4 - Brasil 1',
    },
    products: [
      { id: 15, name: 'EDICIÓN ESPECIAL 50 AÑOS', year: 2025, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', details: ['Parches y números personalizados'], image: 'placeholder.svg' },
      { id: 16, name: 'EDICIÓN ESPECIAL 50 AÑOS', year: 2025, variant: 'TITULAR', version: 'VERSIÓN NACIONAL', details: ['Parches y números personalizados'], image: 'placeholder.svg' },
    ],
  },
];

export const additionalProducts: Product[] = [
  {
    id: 101,
    name: 'CAMISETA ENTRENAMIENTO',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN JUGADOR',
    details: ['Tecnología Dri-FIT', 'Logo termosellado'],
    image: 'placeholder.svg'
  },
  {
    id: 102,
    name: 'CAMISETA PRESENTACIÓN',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN NACIONAL',
    details: ['Diseño oficial', 'Escudo bordado'],
    image: 'placeholder.svg'
  },
  {
    id: 103,
    name: 'CAMPERA OFICIAL',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN NACIONAL',
    details: ['Material impermeable', 'Cierre completo'],
    image: 'placeholder.svg'
  },
  {
    id: 104,
    name: 'BUZO ENTRENAMIENTO',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN JUGADOR',
    details: ['Capucha ajustable', 'Bolsillos laterales'],
    image: 'placeholder.svg'
  },
  {
    id: 105,
    name: 'SHORT OFICIAL',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN JUGADOR',
    details: ['Tela transpirable', 'Cordón ajustable'],
    image: 'placeholder.svg'
  },
  {
    id: 106,
    name: 'MEDIAS OFICIALES',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN NACIONAL',
    details: ['Material técnico', 'Ajuste ergonómico'],
    image: 'placeholder.svg'
  },
  {
    id: 107,
    name: 'REMERA CASUAL',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN NACIONAL',
    details: ['100% Algodón', 'Diseño exclusivo'],
    image: 'placeholder.svg'
  },
  {
    id: 108,
    name: 'GORRA OFICIAL',
    year: 2024,
    variant: 'TITULAR',
    version: 'VERSIÓN NACIONAL',
    details: ['Ajuste regulable', 'Escudo bordado'],
    image: 'placeholder.svg'
  }
];