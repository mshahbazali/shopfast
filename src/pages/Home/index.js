import React from 'react'
import Hero from '../../layout/Hero'
import Steps from '../../layout/Steps'
import CollectionBox from '../../layout/CollectionBox'
import Prodcuts from '../../layout/Products'
import SaleBanner from '../../layout/SaleBanner'
import CategorySection from '../../layout/CategorySection'
import Footer from '../../layout/Footer'
export default function index() {
    return (
        <>
            <Hero />
            <Steps />
            <CollectionBox />
            <Prodcuts />
            <SaleBanner />
            <CategorySection />
            <Footer />
        </>
    )
}
