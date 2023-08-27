import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {FaFacebook} from 'react-icons/fa'

function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const settings = {
    dots:false,
    speed:500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase:"linear"
  };

  const phones = {
    US: "+1",
    GB: "+5",
    FR: "+70",
    DE: "+30",
    IT: "+11",
    TR: "+90",
  };
  return (
    <div className="h-auto sm:h-[500px] bg-purple-500 relative before:bg-gradient-to-r before:from-purple-600 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-8 text-4xl font-semibold text-white ">
            Dakikalar içinde <br />
            kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                countries={Object.keys(phones)}
                customLabels={phones}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-all hover:bg-primary-brand-color hover:text-brand-yellow flex items-center justify-center h-12 rounded-md w-full text-sm font-semibold">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2"/>
            <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-all hover:bg-blue-700 hover:text-white flex items-center h-12 rounded-md w-full text-sm font-semibold">
              <FaFacebook size={24}/>
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
