// import React from 'react'
import imgPerson from "/assets/shared/desktop/image-best-gear.jpg";
import imgPersonTab from "/assets/shared/tablet/image-best-gear.jpg";
import imgPersonMobile from "/assets/shared/mobile/image-best-gear.jpg";

function StoreDescription() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-32 my-20">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-12">
          Bringing you the <span className="text-orangePrimary">best</span>{" "}
          audio gear
        </h1>
        <p className="text-base sm:text-lg">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

<div className="lg:w-1/2">
  <img src={imgPersonMobile} alt="Best Gear" className="w-full sm:hidden" />
  <img src={imgPersonTab} alt="Best Gear" className="w-full hidden sm:block lg:hidden" />
  <img src={imgPerson} alt="Best Gear" className="w-full hidden lg:block" />
</div>
    </div>
  );
}

export default StoreDescription;
