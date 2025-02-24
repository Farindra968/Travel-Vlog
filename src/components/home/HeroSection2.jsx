import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import hero4 from "@/assets/images/hero4.png";
import HeroImage from "../ui/HeroImage";

const HeroSection2 = () => {
  const experienceData = [
    {
      value: "1000+",
      info: "outdoor destinations",
    },
    {
      value: "98%",
      info: "customer satisfaction",
    },
    {
      value: "15+",
      info: "Years Of Experience",
    },
  ];
  return (
    <section className="max-w-screen-lg mx-auto">
      <div className="grid md:grid-cols-2  md:place-items-end px-4 md:px-0">
        <div className="">
          <div className="pt-4">
          <h1 className="font-Poppins-Medium text-center md:text-left  text-[18px] text-pink-500">
            Our Experience
          </h1>
            <h1 className=" font-poppins-semibold text-4xl lg:text-5xl text-center md:text-left leading-tight lg:leading-tight tracking-normal md:tracking-wide">
              Crafting Unforgettable Adventures
            </h1>
          </div>
          <div className="text-center md:text-left">
            <p className="md:w-[400px] text-gray-500 mt-2 text-[14px] font-Poppins">
              We excel in curating remarkable journeys, specializing in outdoor
              destinations around the globe. With a wealth of experience, we
              bring adventures to life and invite you to embark on your own. The
              call of nature awaits—begin your adventure today!
            </p>
            <div className="py-4 space-x-4">
                          <div className="flex justify-center items-center gap-2">
                          {experienceData.map((item, index) => (
                <p key={index}>
                  <span className=" flex flex-col font-poppins-semibold text-3xl text-pink-500">
                    {item.value}
                  </span>
                  <span className="font-Poppins py-4 px-6 md:px-0">{item.info}</span>
                </p>
              ))}
                </div>
            </div>
          </div>
        </div>
        <HeroImage
          icon1={<MdLocationPin />}
          info1="Best fun"
          icon2={<MdLocationPin />}
          info2="Best adventure"
          hero3={hero4}
          height={325}
          width={325}
          bottom="bottom-0"
          right="right-10"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
