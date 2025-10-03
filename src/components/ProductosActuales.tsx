import { additionalProducts, camisetasActuales } from '@/lib/products'
import React from 'react'
import ProductCard from './ProductCard'
import YearSection from './YearSection'
import { YearData } from '@/types';

export default function ProductsActuales() {
    const ACTUALES: YearData = {
        year: "ACTUALES",
        player: 'OUSMANE DEMBELE',
        seleccion: "CAMISETAS DE EQUIPOS",
        cover: {
            img: "act.png",
            title: 'Mundial de clubes USA 2025',
            matchInfo: 'Cuartos de Final: Psg 2 - Bayer 0',
        },
        products: camisetasActuales,
    };
    return (
        <div>
            <YearSection key={"yearData.year"} pathFolder="/img/camisetas/act/" classNameProducts="grid-cols-2" yearData={ACTUALES} />
        </div>
    )
}
