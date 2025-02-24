import Image from "next/image";
import React from "react";
import {
  MdLocationPin,
  MdOutlineTravelExplore,
  MdPlayCircle,
} from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { HiSignal } from "react-icons/hi2";
import hero1 from "@/assets/images/hero1.svg";
import hero2 from "@/assets/images/map.svg";
import hero3 from "@/assets/images/hero3.png";
import patner from "@/assets/images/patner.svg";
import patner2 from "@/assets/images/patner2.svg";
import patner3 from "@/assets/images/patner3.svg";
import patner4 from "@/assets/images/patner4.svg";
import patner5 from "@/assets/images/patner5.svg";
import HeroImage from "../ui/HeroImage";

const patnerInfo = [
  {
    logo: patner,
    label: "Booking.com",
  },
  {
    logo: patner2,
    label: "Tripadvisor",
  },
  {
    logo: patner3,
    label: "Airbnb",
  },
  {
    logo: patner4,
    label: "Expedia",
  },
  {
    logo: patner5,
    label: "Agoda",
  },
];

const HeroSection = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <div className="grid md:grid-cols-2 md:place-items-end place-content-center px-6 lg:px-1 ">
        <div className="">

          <div className="pt-6 md:w-80">
            <h1 className="text-center flex items-center justify-center md:justify-start py-3 md:py-0 gap-3 font-Poppins-Medium text-[18px] text-pink-500">Our Experience <MdOutlineTravelExplore /></h1>
            <h1 className=" font-poppins-bold text-4xl lg:text-5xl text-center md:text-left leading-tight lg:leading-tight tracking-normal md:tracking-wide">
              Travel <span className="text-pink-500">top destionation</span> of
              the world
            </h1>
          </div>
          <div className="text-center md:text-left">
            <p className=" text-gray-500 text-sm mt-5 font-Poppins">
              Where adventure meets comfort. We create unforgettable travel
              experiences
            </p>
            <div className="py-4 space-x-4">
              <button className="font-Poppins-Medium text-white text-[14px] bg-indigo-700 px-4 py-2 rounded-2xl shadow-lg shadow-indigo-400">
                Get Started
              </button>
              <button className="inline-flex items-center gap-4 font-Poppins-Medium text-[14px] text-indigo-700 px-4 py-2 rounded-2xl shadow-lg border border-indigo-200">
                <MdPlayCircle className="text-[14px]" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
        <HeroImage icon1={<MdLocationPin/>} info1='Top Place' icon2={<FaHotel/>} info2='Top Hotels' hero3={hero3} height={400} width={400} bottom='bottom-[-2px]' right='right-3'/>
      </div>
      <div className=" md:py-12">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center space-x-24">
          {patnerInfo.map((item, index) => (
            <div key={index}>
              <Image
                src={item.logo}
                width={125}
                height={50}
                alt={item.label}
                title={item.label}
              />
            </div>
          ))}
        </div>
          </div>

    </section>
  );
};

export default HeroSection;
