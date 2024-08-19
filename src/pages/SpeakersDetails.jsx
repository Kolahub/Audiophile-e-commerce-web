// import React from 'react'
import { json, useRouteLoaderData } from "react-router-dom"
import Catergory from "../components/Catergory";
import StoreDescription from "../components/StoreDescription";
import Footer from "../components/Footer";
import { IncludesInfo, MayAlsoLike, ProductGallery } from "../components/ProductInfo";
import AddToCart from "../components/AddToCart";
import GoBack from "../components/GoBack";

function SpeakersDetails() {
  const products = useRouteLoaderData('speakers-detail')
  // console.log(products[0]);

  const item = products[0].find(product => product.id === Number(products[1]));
  // console.log(item);
  return (
    <div className="font-custom pt-24">
            <div className="px-6 pt-12 lg:container">
        <GoBack />
      </div>

      <section className='px-6 lg:container py-16'>
        <AddToCart product={item} />
      </section>
          <section className='px-6 lg:container mt-14'>
        <IncludesInfo includesData={item.includes} featuresData={item.features} />
      </section>

             <section className="px-6 lg:container py-14">
        <ProductGallery productInfo={item} />
       </section>

       <section className="lg:container px-6">
                <MayAlsoLike mayAlsoLikeproducts={item.others} products={products[0]} />
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

export default SpeakersDetails

// eslint-disable-next-line no-unused-vars
export async function Loader({ request, params }) {
  const id = params.speakerId;
  // console.log(id);

  const res = await fetch('/data.json');
  if (!res.ok) throw json({ message: 'Could not get details on this product.' }, {
    status: 500
  });

  const data = await res.json();

  return [data, id];
}