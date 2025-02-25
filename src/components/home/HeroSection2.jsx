import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import hero4 from "@/assets/images/hero4.png";
import HeroImage from "../ui/HeroImage";
import { SubTitle } from "../ui/SubTitle";
import Title from "../ui/Title";

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
      <div className="grid md:grid-cols-2  md:place-items-end px-6 lg:px-1">
        <div className="">
          <div className="pt-4">
            <SubTitle title='Our Experience'/>
            <Title title='Crafting Unforgettable Adventures'/>
          </div>
          <div className="text-center md:text-left">
            <p className="md:w-[400px] text-gray-500 mt-2 text-[14px] font-Poppins dark:text-gray-300">
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
                    <span className="font-Poppins  p-4 md:px-0 dark:text-gray-200">
                      {item.info}
                    </span>
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
