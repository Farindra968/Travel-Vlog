import React from 'react'
import ImageCard from '../ui/ImageCard'

const HeroSection4 = () => {
  return (
    <section className='max-w-screen-lg mx-auto grid grid-cols-2 gap-4'>
      <div>
              <h1 className='font-poppins-bold text-4xl leading-10 tracking-normal md:tracking-wide dark:text-gray-200 py-2'>Meet Our Expert Tour Guides</h1>
              <p className='font-Poppins text-sm text-gray-600 py-6 dark:text-gray-300'>Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion</p>
              <ImageCard/>
          </div>
          <div className=''></div>
    </section>
  )
}

export default HeroSection4
