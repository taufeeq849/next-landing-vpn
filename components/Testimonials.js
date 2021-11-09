import React from "react";
import Image from "next/image";
import Testimony from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";

const Testimonial = () => (
  <div className="flex flex-col w-full my-16" id="testimonials">
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
      Trusted by Thousands of Happy Customer{" "}
    </h3>
    <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
      These are the stories of our customers who have joined us with great
      pleasure when using this crazy feature.
    </p>
    <div className="w-full flex flex-col py-12">
      <Testimony />
    </div>
    <div className="relative w-full mt-16">
      <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
        <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
          <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
            Subscribe Now for <br /> Get Special Features!
          </h5>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <ButtonPrimary>Get Started</ButtonPrimary>
      </div>
      <div
        className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
        style={{ filter: "blur(114px)" }}
      ></div>
    </div>
  </div>
);
export default Testimonial;
