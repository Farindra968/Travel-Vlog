import React from 'react'
import hero1 from "@/assets/images/hero1.svg";
import hero2 from "@/assets/images/map.svg";
import { HiSignal } from 'react-icons/hi2';
import Image from 'next/image';

const HeroImage = ({icon1, icon2, info1, info2, hero3, height, width, top, right, bottom, left}) => {
  return (
        <div className="py-24 md:py-2 md:col-span- flex justify-center items-center md:items-end  ">
          <div className="relative">
            <div className="inline-flex items-center font-poppins-semibold gap-2 bg-white px-4 py-2 rounded-full  absolute z-40  bottom-14 shadow-sm shadow-pink-300 ">
            <span className="text-orange-500 text-xl">{icon1}</span>
            <p className="text-gray-800">{info1}</p>
            </div>
            <div className="inline-flex items-center font-poppins-semibold gap-2 bg-white px-4 py-2 rounded-full absolute z-40 bottom-0 right-0 shadow-sm shadow-pink-300 ">
                  <span className="text-orange-500 text-xl">{icon2}</span>
                  <p className="text-gray-800">{info2}</p>
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
              height={height}
              width={width}
              alt="Travlog"
              className={`absolute ${bottom} ${right} ${left} ${top}`}
            />
          </div>
        </div>
  )
}

export default HeroImage
