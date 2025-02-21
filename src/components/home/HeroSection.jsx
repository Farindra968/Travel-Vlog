import Image from 'next/image';
import React from 'react'
import { MdLocationPin, MdOutlineTravelExplore, MdPlayCircle } from "react-icons/md";
import hero1 from '@/assets/images/hero1.svg'
import hero2 from '@/assets/images/map.svg'
import hero3 from '@/assets/images/hero3.png'

const HeroSection = () => {
  return (
    <section className='grid grid-cols-3'>
          <div>
              <button className='flex items-center gap-2 px-5 py-3 shadow-lg rounded-full shadow-pink-200 text-sm font-Poppins-Medium text-pink-600  '>Explore the World! <MdOutlineTravelExplore /></button>
              <div className='pt-10'>
                  <h1 className='font-poppins-bold text-5xl leading-[60px] tracking-wide'>Travel <span className='text-pink-500'>top destionation</span> of the world</h1>
              </div>
              <div>
              <p className='text-gray-500 text-sm mt-5 font-Poppins'>
                  Where adventure meets comfort. We create unforgettable travel experiences
                  </p>
                  <div className='py-4 space-x-4'>
                      <button className="font-Poppins-Medium text-white text-[14px] bg-indigo-700 px-4 py-2 rounded-2xl shadow-lg shadow-indigo-400">Get Started</button>
                      <button className="inline-flex items-center gap-4 font-Poppins-Medium text-[14px] text-indigo-700 px-4 py-2 rounded-2xl shadow-lg border border-indigo-200"><MdPlayCircle className='text-[14px]' /> Watch Demo</button>
                  </div>
              </div>
          </div>
          <div className='col-span-2 flex justify-center items-end  '>
              <div className='relative'>
                  <div className='inline-flex items-center font-poppins-semibold gap-2 bg-white px-4 py-2 rounded-full text-pink-500 absolute z-50 bottom-0 shadow-md shadow-pink-300 '><MdLocationPin /><p>Top Place</p></div>
                  <div className='inline-flex items-center font-poppins-semibold gap-2 bg-white px-4 py-2 rounded-full text-pink-500 absolute z-50 top-0 right-0 shadow-md shadow-pink-300 '><MdLocationPin /><p>Top Place</p></div>
                  <Image src={hero1} height={400} width={400} alt='Travlog' className='-z-30' />
                  <Image src={hero2} height={400} width={400} alt='Travlog' className='absolute top-6' />
                  <Image src={hero2} height={400} width={400} alt='Travlog' className='absolute bottom-0 rotate-180' />
                  <Image src={hero3} height={400} width={400} alt='Travlog' className='absolute bottom-[-4px] right-3' />

              </div>
          </div>
    </section>
  )
}

export default HeroSection
