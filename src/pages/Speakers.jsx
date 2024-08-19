// import React from 'react'

import { json, useLoaderData } from "react-router-dom"
import Catergory from "../components/Catergory"
import Footer from "../components/Footer"
import ProductHeader from "../components/ProductHeader"
import StoreDescription from "../components/StoreDescription"
import Products from "../components/Products"

function Speakers() {
  const products = useLoaderData()
  // console.log(products);
  const speakers = products.filter(el => el.name.includes('Speaker'))
  // console.log(speakers);

  return (
    <div className="font-custom pt-24">
    <section>
    <ProductHeader productName={'speakers'} />
    </section>

    <section className="lg:container my-24 px-6">
    <Products data={speakers} />
   </section>

    <section className="px-6 lg:container py-14">
      <Catergory />
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

export async function Loader () {
  const res = await fetch('/data.json')
  if(!res.ok)  throw json({message: 'Could get details on this product.'}, {
      status: 500
    })
  return res
}