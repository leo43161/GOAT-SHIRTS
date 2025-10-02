// /app/lib/products.ts
import { YearData, Product } from '../types';

export const yearsData: YearData[] = [
  {
    year: 1986,
    player: 'Diego Armando Maradona',
    seleccion: "SELECCION ARGENTINA",
    cover: {
      img: "4.png",
      title: 'México 1986',
      matchInfo: 'Cuartos de Final: Argentina 2 - Inglaterra 1',
    },
    products: [
      { id: 1, name: 'SELECCION ARGENTINA 1986', year: 1986, variant: 'TITULAR', images: ['arg-86/t/1.png', 'arg-86/t/2.png'] },
      { id: 2, name: 'SELECCION ARGENTINA 1986', year: 1986, variant: 'SUPLENTE', images: ['arg-86/s/3.png', 'arg-86/s/4.png'] },
    ],
  },
  {
    year: 1994,
    player: 'Diego Armando Maradona',
    seleccion: "SELECCION ARGENTINA",
    cover: {
      img: "8.png",
      title: 'USA 1994',
      matchInfo: 'Fase de Grupos: Argentina 4 - Grecia 0',
    },
    products: [
      { id: 3, name: 'SELECCION ARGENTINA 1994', year: 1994, variant: 'TITULAR', images: ['arg-94/t/9.png', 'arg-94/t/10.png'] },
      { id: 4, name: 'SELECCION ARGENTINA 1994', year: 1994, variant: 'SUPLENTE', images: ['arg-94/s/11.png', 'arg-94/s/12.png'] },
    ],
  },
  {
    year: 2006,
    player: 'Lionel Messi',
    seleccion: "SELECCION ARGENTINA",
    cover: {
      img: "17.png",
      title: 'Alemania 2006',
      matchInfo: 'Fase de Grupos: Argentina 6 - Serbia y Montenegro 0',
    },
    products: [
      { id: 5, name: 'SELECCION ARGENTINA 2006', year: 2006, variant: 'TITULAR', images: ['arg-06/t/13.png', 'arg-06/t/14.png'] },
      { id: 6, name: 'SELECCION ARGENTINA 2006', year: 2006, variant: 'SUPLENTE', images: ['arg-06/s/11.png', 'arg-06/s/12.png'] },
    ],
  },
  {
    year: 2022,
    player: 'Lionel Messi',
    seleccion: "SELECCION ARGENTINA",
    cover: {
      img: "21.png",
      title: 'Qatar 2022',
      matchInfo: 'FINAL: Argentina 3 (4) - Francia 3 (2)',
    },
    products: [
      { id: 7, name: 'SELECCION ARGENTINA 2022', year: 2022, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', images: ['arg-22/t/15.png', 'arg-22/t/16.png'] },
      { id: 8, name: 'SELECCION ARGENTINA 2022', year: 2022, variant: 'SUPLENTE', version: 'VERSIÓN JUGADOR', images: ['arg-22/s/17.png', 'arg-22/s/18.png'] },
    ],
  },
  {
    year: 2024,
    player: 'Lionel Messi',
    seleccion: "SELECCION ARGENTINA",
    cover: {
    img: "25.png",
      title: 'Copa América 2024',
      matchInfo: 'Final: Argentina 1 - Colombia 0',
    },
    products: [
      { id: 9, name: 'SELECCION ARGENTINA 2024', year: 2024, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', details: ['Parche Campeón del Mundo', 'Parche Copa América'], images: ['arg-24/t/19.png', 'arg-24/t/20.png'] },
      { id: 10, name: 'SELECCION ARGENTINA 2024', year: 2024, variant: 'SUPLENTE', version: 'VERSIÓN JUGADOR', details: ['Parche Campeón del Mundo', 'Parche Copa América'], images: ['arg-24/s/21.png', 'arg-24/s/22.png'] },
    ],
  },
  {
    year: 2025,
    player: 'Alexis Mac Allister',
    seleccion: "SELECCION ARGENTINA",
    cover: {
      img: "30.png",
      title: 'Eliminatorias USA 2026',
      matchInfo: 'Fecha 14: Argentina 4 - Brasil 1',
    },
    products: [
      { id: 19, name: 'EDICIÓN ESPECIAL 50 AÑOS', year: 2025, variant: 'TITULAR', version: 'VERSIÓN JUGADOR', details: ['Parches y números personalizados'], images: ['arg-esp/23.png', 'arg-esp/24.png'] },
      { id: 20, name: 'EDICIÓN ESPECIAL 50 AÑOS', year: 2025, variant: 'TITULAR', version: 'VERSIÓN NACIONAL', details: ['Parches y números personalizados'], images: ['arg-esp/23.png', 'arg-esp/24.png'] },
    ],
  },
  // BRASIL
  {
    year: 1998,
    player: 'Ronaldo Nazario',
    seleccion: "SELECCION BRASIL",
    cover: {
      img: "34.png",
      title: 'Mundial de Francia 1998',
      matchInfo: 'Octavos de Final: Brasil 4 - Chile 1',
    },
    products: [
      { id: 21, name: 'SELECCION BRASIL 1998', year: 1998, variant: 'TITULAR', version: 'VERSIÓN RETRO', details: ['Mundial Corea/Japón 2002'], images: ['br-88/t/25.png', 'br-88/t/26.png'] },
      { id: 22, name: 'SELECCION BRASIL 1998', year: 1998, variant: 'SUPLENTE', version: 'VERSIÓN RETRO', details: ['Mundial Corea/Japón 2002'], images: ['br-88/s/27.png', 'br-88/s/28.png'] },
    ],
  },
  {
    year: 2002,
    player: 'Ronaldo Nazario',
    seleccion: "SELECCION BRASIL",
    cover: {
      img: "38.png",
      title: 'Mundial Corea - Japón 2002',
      matchInfo: 'Semi Final: Brasil 1 - Turquía 0',
    },
    products: [
      { id: 23, name: 'SELECCION BRASIL 2002', year: 2002, variant: 'TITULAR', version: 'VERSIÓN RETRO', images: ['br-02/t/29.png', 'br-02/t/30.png'] },
      { id: 24, name: 'SELECCION BRASIL 2002', year: 2002, variant: 'SUPLENTE', version: 'VERSIÓN RETRO', images: ['br-02/s/31.png', 'br-02/s/32.png'] },
    ],
  },
  {
    year: 2006,
    player: 'Ronaldinho Gaucho',
    seleccion: "SELECCION BRASIL",
    cover: {
      img: "31.png",
      title: 'Mundial Alemania 2006',
      matchInfo: 'Octavos de Final: Brasil 3 - Ghana 0',
    },
    products: [
      { id: 25, name: 'SELECCION BRASIL 2006', year: 2006, variant: 'TITULAR', version: 'VERSIÓN RETRO', images: ['br-06/t/33.png', 'br-06/t/34.png'] },
      { id: 26, name: 'SELECCION BRASIL 2006', year: 2006, variant: 'SUPLENTE', version: 'VERSIÓN RETRO', images: ['br-06/s/35.png', 'br-06/s/36.png'] },
    ],
  },
  {
    year: 2024,
    player: 'Vinicius Junior',
    seleccion: "SELECCION BRASIL",
    cover: {
      img: "46.png",
      title: 'Copa América Estados Unidos 2024',
      matchInfo: 'Brasil 4 - Paraguay 1',
    },
    products: [
      { id: 27, name: 'SELECCION BRASIL 2024', year: 2024, variant: 'TITULAR', version: 'ACTUAL', images: ['br-25/t/37.png', 'br-25/t/38.png'] },
      { id: 28, name: 'SELECCION BRASIL 2024', year: 2024, variant: 'SUPLENTE', version: 'ACTUAL', images: ['br-25/s/39.png', 'br-25/s/40.png'] },
    ],
  },
  // FRANCIA
  {
    year: 1998,
    player: 'Zinedine Zidane',
    seleccion: "SELECCION FRANCIA",
    cover: {
      img: "50.png",
      title: 'Mundial de Francia 1998',
      matchInfo: 'Final: Francia 2 - Brasil 0',
    },
    products: [
      { id: 29, name: 'SELECCION FRANCIA 1998', year: 1998, variant: 'TITULAR', version: 'VERSIÓN RETRO', images: ['fr-98/t/41.png', 'fr-98/t/42.png'] },
      { id: 30, name: 'SELECCION FRANCIA 1998', year: 1998, variant: 'SUPLENTE', version: 'VERSIÓN RETRO', images: ['fr-98/s/43.png', 'fr-98/s/44.png'] },
    ],
  },
  {
    year: 2006,
    player: 'Zinedine Zidane',
    seleccion: "SELECCION FRANCIA",
    cover: {
      img: "54.png",
      title: 'Mundial Alemania 2006',
      matchInfo: 'Cuartos de Final: Francia 1 - Brasil 0',
    },
    products: [
      { id: 31, name: 'SELECCION FRANCIA 2006', year: 2006, variant: 'TITULAR', version: 'VERSIÓN RETRO', images: ['fr-06/t/45.png', 'fr-06/t/46.png'] },
      { id: 32, name: 'SELECCION FRANCIA 2006', year: 2006, variant: 'SUPLENTE', version: 'VERSIÓN RETRO', images: ['fr-06/s/47.png', 'fr-06/s/48.png'] },
    ],
  },
  {
    year: 2025,
    player: 'Kylian Mbappé',
    seleccion: "SELECCION FRANCIA",
    cover: {
      img: "58.png",
      title: 'UEFA National League 2025',
      matchInfo: 'Partido por el tercer puesto: Francia 2 - Alemania 0',
    },
    products: [
      { id: 33, name: 'SELECCION FRANCIA 2025', year: 2025, variant: 'TITULAR', version: 'VERSIÓN HINCHA', images: ['fr-act/t/51.png', 'fr-act/t/52.png'] },
      { id: 34, name: 'SELECCION FRANCIA 2025', year: 2025, variant: 'SUPLENTE', version: 'VERSIÓN HINCHA', images: ['fr-act/s/53.png', 'fr-act/s/54.png'] },
    ],
  },
  // PORTUGAL
  {
    year: 2006,
    player: 'Cristiano Ronaldo',
    seleccion: "SELECCION PORTUGAL",
    cover: {
      img: "62.png",
      title: 'Mundial de Alemania 2006',
      matchInfo: 'Cuartos de Final: Portugal 0 - Inglaterra 0 (3 - 1 p)',
    },
    products: [
      { id: 35, name: 'SELECCION PORTUGAL 2006', year: 2006, variant: 'TITULAR', version: 'VERSIÓN RETRO', images: ['port-06/t/55.png', 'port-06/t/56.png'] },
      { id: 36, name: 'SELECCION PORTUGAL 2006', year: 2006, variant: 'SUPLENTE', version: 'VERSIÓN RETRO', images: ['port-06/s/57.png', 'port-06/s/58.png'] },
    ],
  },
  {
    year: 2025,
    player: 'Cristiano Ronaldo',
    seleccion: "SELECCION PORTUGAL",
    cover: {
      img: "65.png",
      title: 'UEFA Nacional League',
      matchInfo: 'Final: Portugal 2 - España 2 (5-3 P.)',
    },
    products: [
      { id: 37, name: 'SELECCION PORTUGAL 2025', year: 2025, variant: 'TITULAR', version: 'VERSIÓN HINCHA', images: ['port-act/t/59.png', 'port-act/t/60.png'] },
      { id: 38, name: 'SELECCION PORTUGAL 2025', year: 2025, variant: 'SUPLENTE', version: 'VERSIÓN HINCHA', images: ['port-act/s/61.png', 'port-act/s/62.png'] },
    ],
  },
];


export const additionalProducts: Product[] = [
  // Argentina 1990 (Italia 90)
  {
    id: 101,
    name: 'SELECCION ARGENTINA 1990',
    year: 1990,
    variant: 'TITULAR',
    details: ['Mundial Italia 1990', 'Subcampeón'],
    images: ['arg-90/t/7.png', 'arg-90/t/8.png']
  },
  {
    id: 102,
    name: 'SELECCION ARGENTINA 1990',
    year: 1990,
    variant: 'SUPLENTE',
    details: ['Mundial Italia 1990', 'Subcampeón'],
    images: ['arg-90/s/5.png', 'arg-90/s/6.png']
  },
  // Argentina Edición Especial
  {
    id: 103,
    name: 'ARGENTINA EDICIÓN ESPECIAL',
    year: 2025,
    variant: 'TITULAR',
    details: ['Diseño conmemorativo', 'Edición limitada'],
    images: ['arg-esp/23.png', 'arg-esp/24.png']
  },
  // Brasil 1988
  {
    id: 104,
    name: 'SELECCION BRASIL 1988',
    year: 1988,
    variant: 'TITULAR',
    details: ['Retro clásico', 'Diseño icónico'],
    images: ['br-88/t/25.png', 'br-88/t/26.png']
  },
  {
    id: 105,
    name: 'SELECCION BRASIL 1988',
    year: 1988,
    variant: 'SUPLENTE',
    details: ['Retro clásico', 'Diseño icónico'],
    images: ['br-88/s/27.png', 'br-88/s/28.png']
  },
  // Brasil 2002
  {
    id: 106,
    name: 'SELECCION BRASIL 2002',
    year: 2002,
    variant: 'TITULAR',
    details: ['Mundial Corea-Japón 2002', 'Pentacampeón'],
    images: ['br-02/t/29.png', 'br-02/t/30.png']
  },
  {
    id: 107,
    name: 'SELECCION BRASIL 2002',
    year: 2002,
    variant: 'SUPLENTE',
    details: ['Mundial Corea-Japón 2002', 'Pentacampeón'],
    images: ['br-02/s/31.png', 'br-02/s/32.png']
  },
  // Brasil 2006
  {
    id: 108,
    name: 'SELECCION BRASIL 2006',
    year: 2006,
    variant: 'TITULAR',
    details: ['Mundial Alemania 2006', 'Diseño clásico'],
    images: ['br-06/t/33.png', 'br-06/t/34.png']
  },
  {
    id: 109,
    name: 'SELECCION BRASIL 2006',
    year: 2006,
    variant: 'SUPLENTE',
    details: ['Mundial Alemania 2006', 'Diseño clásico'],
    images: ['br-06/s/35.png', 'br-06/s/36.png']
  },
  // Brasil 2025
  {
    id: 110,
    name: 'SELECCION BRASIL 2025',
    year: 2025,
    variant: 'TITULAR',
    details: ['Última colección', 'Diseño moderno'],
    images: ['br-25/t/37.png', 'br-25/t/38.png']
  },
  {
    id: 111,
    name: 'SELECCION BRASIL 2025',
    year: 2025,
    variant: 'SUPLENTE',
    details: ['Última colección', 'Diseño moderno'],
    images: ['br-25/s/39.png', 'br-25/s/40.png']
  },
  // Francia 1998
  {
    id: 112,
    name: 'SELECCION FRANCIA 1998',
    year: 1998,
    variant: 'TITULAR',
    details: ['Mundial Francia 1998', 'Campeón del Mundo'],
    images: ['fr-98/t/41.png', 'fr-98/t/42.png']
  },
  {
    id: 113,
    name: 'SELECCION FRANCIA 1998',
    year: 1998,
    variant: 'SUPLENTE',
    details: ['Mundial Francia 1998', 'Campeón del Mundo'],
    images: ['fr-98/s/43.png', 'fr-98/s/44.png']
  },
  // Francia 2006
  {
    id: 114,
    name: 'SELECCION FRANCIA 2006',
    year: 2006,
    variant: 'TITULAR',
    details: ['Mundial Alemania 2006', 'Subcampeón'],
    images: ['fr-06/t/45.png', 'fr-06/t/46.png']
  },
  {
    id: 115,
    name: 'SELECCION FRANCIA 2006',
    year: 2006,
    variant: 'SUPLENTE',
    details: ['Mundial Alemania 2006', 'Subcampeón'],
    images: ['fr-06/s/47.png', 'fr-06/s/48.png']
  },
  // Francia Actual
  {
    id: 116,
    name: 'SELECCION FRANCIA ACTUAL',
    year: 2024,
    variant: 'TITULAR',
    details: ['Última colección', 'Diseño oficial'],
    images: ['fr-act/t/51.png', 'fr-act/t/52.png']
  },
  {
    id: 117,
    name: 'SELECCION FRANCIA ACTUAL',
    year: 2024,
    variant: 'SUPLENTE',
    details: ['Última colección', 'Diseño oficial'],
    images: ['fr-act/s/53.png', 'fr-act/s/54.png']
  },
  // Portugal 2006
  {
    id: 118,
    name: 'SELECCION PORTUGAL 2006',
    year: 2006,
    variant: 'TITULAR',
    details: ['Mundial Alemania 2006', 'Diseño retro'],
    images: ['port-06/t/55.png', 'port-06/t/56.png']
  },
  {
    id: 119,
    name: 'SELECCION PORTUGAL 2006',
    year: 2006,
    variant: 'SUPLENTE',
    details: ['Mundial Alemania 2006', 'Diseño retro'],
    images: ['port-06/s/57.png', 'port-06/s/58.png']
  },
  // Portugal Actual
  {
    id: 120,
    name: 'SELECCION PORTUGAL ACTUAL',
    year: 2024,
    variant: 'TITULAR',
    details: ['Última colección', 'Diseño moderno'],
    images: ['port-act/t/59.png', 'port-act/t/60.png']
  },
  {
    id: 121,
    name: 'SELECCION PORTUGAL ACTUAL',
    year: 2024,
    variant: 'SUPLENTE',
    details: ['Última colección', 'Diseño moderno'],
    images: ['port-act/s/61.png', 'port-act/s/62.png']
  },
];