// import React from 'react'

import Footer from "../components/Footer"
import ProductHeader from "../components/ProductHeader"
import StoreDescription from "../components/StoreDescription"

function EarPhone() {
  return (
    <div className="font-custom">
    <section>
    <ProductHeader productName={'earphones'} />
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

export default EarPhone