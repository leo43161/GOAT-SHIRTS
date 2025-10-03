import { additionalProducts, retroProducts } from '@/lib/products'
import React from 'react'
import ProductCard from './ProductCard'
import YearSection from './YearSection'
import { YearData } from '@/types';

export default function ProductsRetro() {
    const RETRO: YearData = {
        year: "RETROS",
        player: 'Thierry Henry',
        seleccion: "CAMISETAS",
        cover: {
            img: "retro.png",
            title: 'Premier League 2005 - 2006',
            matchInfo: 'Arsenal 4 - Wigan 2',
        },
        products: retroProducts,
    };
    return (
        <div>
            <YearSection key={"yearData.year"} pathFolder="/img/camisetas/retro/" classNameProducts="grid-cols-2" yearData={RETRO} />
        </div>
    )
}
