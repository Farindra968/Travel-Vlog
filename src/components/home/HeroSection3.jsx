import React from 'react'
import { SubTitle } from '../ui/SubTitle'
import Title from '../ui/Title'
import SecondaryTitle from '../ui/SecondaryTitle'
import hero6 from '@/assets/images/hero6.png'
import circle_vector from '@/assets/images/circle.svg'
import vector2 from '@/assets/images/vector2.svg'
import Image from 'next/image'

const HeroSection3 = () => {
  return (
      <section className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center  items-end gap-6  px-6'>
          <div className='w-full flex justify-center md:justify-start '>
              <div className='relative'>
              <Image src={circle_vector} width={400} height={400} alt='hero6' className=''/>
                  <Image src={hero6} width={230} height={230} alt='hero6' className='absolute bottom-0 left-20' />
                  <Image src={vector2} height={75} width={75} alt='vector2' className='absolute bottom-10 -left-5' />
                  <Image src={vector2} height={100} width={100} alt='vector2' className='absolute -top-10 right-0' />
                  <div className='w-10 h-10 rounded-full bg-orange-500 bg-opacity-80 absolute bottom-20 right-20'></div>
                  <div className='w-5 h-5 rounded-full bg-orange-500 bg-opacity-80 absolute top-20'></div>
              </div>
          </div>
          <div className='w-auto md:w-[70%]'>
              <SubTitle title='we are the best for you' />
              <h1 className='font-poppins-bold text-4xl leading-10 tracking-normal md:tracking-wide dark:text-gray-200 py-2'>Unlock Your Dream Destination</h1>
              <div className='py-4'>
                  <p className='font-Poppins text-sm text-gray-500 dark:text-gray-300'>We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</p>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col justify-center items-center p-6 rounded-lg border-2 dark:border-gray-600'>
                  <p className='font-poppins-bold text-pink-500 text-2xl'>4K+</p>
                  <p className='font-Poppins text-sm text-center dark:text-gray-300'>Satisfied Customers</p>
                  </div>
                  <div className='flex flex-col justify-center items-center p-6 rounded-lg border-2 dark:border-gray-600'>
                  <p className='font-poppins-bold text-pink-500 text-2xl'>4K+</p>
                  <p className='font-Poppins text-sm text-center dark:text-gray-300'>Satisfied Customers</p>
                  </div>
                  <div className='flex flex-col justify-center items-center p-6 rounded-lg border-2 dark:border-gray-600'>
                  <p className='font-poppins-bold text-pink-500 text-2xl'>4K+</p>
                  <p className='font-Poppins text-sm text-center dark:text-gray-300'>Satisfied Customers</p>
                  </div>
                  <div className='flex flex-col justify-center items-center p-6 rounded-lg border-2 dark:border-gray-600'>
                  <p className='font-poppins-bold text-pink-500 text-2xl'>4K+</p>
                  <p className='font-Poppins text-sm text-center dark:text-gray-300'>Satisfied Customers</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default HeroSection3
