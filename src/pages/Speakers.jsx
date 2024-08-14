// import React from 'react'

import Footer from "../components/Footer"
import ProductHeader from "../components/ProductHeader"
import StoreDescription from "../components/StoreDescription"

function Speakers() {
  return (
    <div className="font-custom">
    <section>
    <ProductHeader productName={'speakers'} />
    </section>
 
    <section className="px-6 lg:container">
     <StoreDescription />
    </section>
 
    <footer className="bg-blackSecondary">
     <Footer />
    </footer>
    </div>
  )
}

export default Speakers