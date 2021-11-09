import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import ProcessStep from "./ProcessStep";

const Process = () => {
  const steps = [
    {
      title: "1. Sign Up",
      imageSrc: "/assets/Free.png",
      alt: "Illustration",
      listItems: [
        { text: "Create an account" },
        { text: "Fill in our initial survey" },
        { text: "Get matched with products we think you'll love" },
      ],
    },
    {
      title: "2. Box Delivery",
      imageSrc: "/assets/Free.png",
      alt: "Illustration",
      listItems: [
        { text: "Receive a box of samples, on us" },
        { text: "Open your box and try out your products" },
        { text: "Remember what you think" },
      ],
    },
    {
      title: "3. Tell us what you think",
      imageSrc: "/assets/Free.png",
      alt: "Illustration",
      listItems: [
        { text: "Fill in our feedback surveys" },
        { text: "It takes less than 2 minutes" },
        {
          text: "Get products that better suit your preferences",
        },
      ],
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Here's how it works
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Our 3 steps process ensures that you find the products you love
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {steps.map((step) => {
              return (
                <ProcessStep
                  imageSrc={step.imageSrc}
                  alt={step.alt}
                  title={step.title}
                  listItems={step.listItems}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Trusted by Thousands of Product Lovers{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Here's what our customers have to say
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  What are you waiting for? <br /> Sign up now
                </h5>
                <p>Find the products that you love</p>
              </div>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
