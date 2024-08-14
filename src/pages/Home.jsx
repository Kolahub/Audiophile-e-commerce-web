// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/productsAction";
import Catergory from "../components/Catergory";
import speakerOneD from '/assets/home/desktop/image-speaker-zx9.png'
import speakerOneT from '/assets/home/tablet/image-speaker-zx9.png'
import speakerOneM from '/assets/home/mobile/image-speaker-zx9.png'
import speakerThreeD from '/assets/home/desktop/image-earphones-yx1.jpg'
import speakerThreeTab from '/assets/home/tablet/image-earphones-yx1.jpg'
import speakerThreeMobile from '/assets/home/mobile/image-earphones-yx1.jpg'
import StoreDescription from "../components/StoreDescription";
import Footer from "../components/Footer";


function Home() {
  const dispatch = useDispatch();
  // const allProducts = useSelector((state) => state.allProducts);
  // const allNewProducts = allProducts.filter((el) => el.new === true);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // console.log(allNewProducts);

  return (
    <>
      <div className="font-custom">
        <section className=" text-white bg-[url('/assets/home/mobile/image-header.jpg')] sm:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] h-screen bg-top-custom bg-cover">
          <div className="container flex justify-between items-center h-full border-t-[0.5px] border-t-gray-500">
            <div className="w-full lg:w-[40%] text-center lg:text-left">
              <p className="uppercase font-extralight tracking-[10px]">
                new product
              </p>
              <h1 className="font-bold text-4xl sm:text-5xl uppercase my-5 tracking-wider">
                XX99 Mark II Headphones
              </h1>
              <p className="font-light text-xl sm:text-lg tracking-wider">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="uppercase bg-orangePrimary w-40 px-6 py-3 hover:bg-orangeSecondary transition-all mt-12">
                see product
              </button>
            </div>
          </div>
        </section>

        <section className= "px-6 lg:container py-14">
          <Catergory />
        </section>

        <section className="px-6 lg:container py-8 flex flex-col gap-8">
          <div className="flex items-end bg-orangePrimary overflow-hidden lg:container rounded-lg h-[640px] lg:h-[560px]">
            <div className="h-full flex-col lg:flex-row flex justify-between lg:gap-20 items-center lg:items-start  lg:justify-center w-full py-8 lg:py-0 lg:pt-16">
            <img src={speakerOneM} alt="Best Gear" className=" h-[237px] sm:hidden" />
  <img src={speakerOneT} alt="Best Gear" className="h-[237px] hidden sm:block lg:hidden" />
  <img src={speakerOneD} alt="Best Gear" className=" h-full mt-3 hidden lg:block" />
            
            <div className="text-white text-center lg:text-start w-[90%] sm:w-[50%] lg:w-[35%] mt-6">
              <h1 className="text-5xl font-bold">ZX9 <span className="block">SPEAKER</span></h1>
              <p className="text-lg font-extralight mt-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <button className="uppercase bg-blackSecondary hover:bg-gray-700 text-white font-semibold px-8 py-3 transition-all mt-6 md:mt-14">
                see product
              </button>
            </div>
            </div>
          </div>

          <div className="h-[380px] md:h-[360px] flex bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover rounded-lg">
            <div className="sm:w-[50%] my-auto pl-8 md:pl-20 ">
              <h1 className="font-bold text-4xl mb-10">ZX7 SPEAKER</h1>
              <button className="font-bold uppercase text-sm border-black  border-2 px-8 py-3 hover:bg-black hover:text-white transition-all">see product</button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <img src={speakerThreeMobile} alt="Best Gear" className="w-full sm:hidden" />
            <img src={speakerThreeTab} alt="Best Gear" className="w-1/2 hidden sm:block lg:hidden" />
            <img src={speakerThreeD} alt="Best Gear" className="w-1/2 hidden lg:block" />
            <div className="bg-whiteSecondary flex flex-col justify-center items-center sm:w-1/2  rounded-lg">
            <div className=" py-8 md:py-0">
            <h1 className="font-bold text-3xl ms:text-4xl mb-10">YX1 EARPHONES</h1>
            <button className="font-bold uppercase text-sm border-black  border-2 px-8 py-3 hover:bg-black hover:text-white transition-all">see product</button>
            </div>

            </div>
          </div>
        </section>

        <section className="lg:container px-6">
          <StoreDescription />
        </section>

        <footer className="bg-blackSecondary">
            <Footer />
        </footer>
      </div>
    </>
  );
}

export default Home;
