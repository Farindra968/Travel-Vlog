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
import vector from "@/assets/images/vector.svg";

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
      <div className="grid md:grid-cols-3 p-6">
        <div className="">
          <button className="flex items-center gap-2 px-5 py-3 shadow-lg rounded-full shadow-pink-200 text-sm font-Poppins-Medium text-pink-600  ">
            Explore the World! <MdOutlineTravelExplore />
          </button>
          <div className="pt-10">
            <h1 className="font-poppins-bold text-4xl lg:text-5xl text-center md:text-left  leading-[60px] md:leading-[60px] md:tracking-wide">
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
        <div className="py-24 md:py-2 md:col-span-2 flex justify-center items-center md:items-end  ">
          <div className="relative">
            <div className="inline-flex items-center font-poppins-semibold gap-2 bg-white px-4 py-2 rounded-full  absolute z-40  bottom-14 shadow-sm shadow-pink-300 ">
              <MdLocationPin className="text-orange-500 text-xl" />
              <p className="text-gray-800">Top Place</p>
            </div>
            <div className="inline-flex items-center font-poppins-semibold gap-2 bg-white px-4 py-2 rounded-full absolute z-50 bottom-0 right-0 shadow-sm shadow-pink-300 ">
              <FaHotel className="text-orange-500 text-xl" />
              <p className="text-gray-800">Top Hotels</p>
            </div>
            <div className="inline-flex items-center justify-center gap-4 bg-white  px-4  py-1 md:py-2 rounded-md absolute z-40 md:bottom-44  right-0 md:-right-20 shadow-sm shadow-pink-300 ">
              <div className="flex items-start justify-start text-2xl text-orange-500">
                <HiSignal />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-poppins-semibold text-indigo-800 ">
                  5000+
                </p>
                <span className="text-xs font-Poppins text-gray-600">
                  Customer
                </span>
              </div>
            </div>
            <Image
              src={hero1}
              height={400}
              width={400}
              alt="Travlog"
              className="-z-30"
            />
            <Image
              src={hero2}
              height={1000}
              width={1000}
              alt="Travlog"
              className=" absolute top-2 right-0"
            />
            <Image
              src={hero2}
              height={400}
              width={400}
              alt="Travlog"
              className="absolute bottom-0 rotate-180"
            />
            <Image
              src={hero3}
              height={400}
              width={400}
              alt="Travlog"
              className="absolute bottom-[-4px] right-3"
            />
          </div>
        </div>
      </div>
      <div className="py-8 md:py-12">
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
