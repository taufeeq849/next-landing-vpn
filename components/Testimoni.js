import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const testimonies = ({
  listtestimony = [
    {
      name: "Aakeela Juma",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.9",
      testimony:
        "Cafeteria has enabled me to find products that I absolutely love. You're doing yourself a disfavour by not signing up",
    },
    {
      name: "Cynthia Roberts",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.8",
      testimony:
        "Cafeteria has enabled me to find products that I absolutely love. You're doing yourself a disfavour by not signing up",
    },
    {
      name: "Julia Silvers",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "5.0",
      testimony:
        "Cafeteria has enabled me to find products that I absolutely love. You're doing yourself a disfavour by not signing up",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listtestimony.map((listtestimonys, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listtestimonys.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listtestimonys.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listtestimonys.testimony}”.</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default testimonies;
