// import React from 'react'
import { NavLink } from "react-router-dom";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

const CATERGORY_DATA = [
  { title: "headphones", image: headphones, link: "/headphones", id: 1 },
  { title: "speakers", image: speakers, link: "/speakers", id: 2 },
  { title: "earphones", image: earphones, link: "/earphones", id: 3 },
];


function Catergory() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 items-center">
      {CATERGORY_DATA.map((el) => (
        <div key={el.id} className="w-full h-56 md:h-48 lg:h-64 relative">
          <div className="absolute left-1/2 -translate-x-1/2 z-10">
            <img src={el.image} alt={el.title} className=" w-40 md:w-full" />
          </div>
          <div className="flex flex-col items-center justify-end bg-whitePrimary absolute bottom-0 w-full h-[75%]">
            <div className="">
              <h1 className="text-center uppercase font-semibold text-xl mb-1">
                {el.title}
              </h1>
              <NavLink className="flex items-center justify-center gap-2 text-gray-700 hover:text-orangePrimary w-full pb-6" to={el.link}>
                <p className="uppercase font-semibold">shop</p>
                <img src={arrowRight} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Catergory;
