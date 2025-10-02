import { additionalProducts } from '@/lib/products'
import React from 'react'
import ProductCard from './ProductCard'
import YearSection from './YearSection'
import { YearData } from '@/types';

export default function ProductsRetro() {
    const RETRO: YearData = {
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
    };
    return (
        <div>
            <YearSection key={"yearData.year"} yearData={RETRO} />
        </div>
    )
}
