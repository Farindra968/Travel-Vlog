import React from 'react'
import ImageCard from '../ui/ImageCard'
import Image from 'next/image'
import vector2 from '@/assets/images/vector2.svg'
import like_icon from '@/assets/images/like_icon.svg'
import heart_icon from '@/assets/images/heart_icon.svg'
import arrow_icon from '@/assets/images/arrow_icon.svg'

const HeroSection4 = () => {
    const GuideData = [
        {
            icon: like_icon,
            title: 'Expertise',
            label: 'Our guides are experts in their fields, ensuring in-depth knowledge and insights into every destination.',
        },
        {
            icon: heart_icon,
            title: 'Passion',
            label: 'They are passionate about travel, culture, and history, making your journey engaging and captivating.'
        },
        {
            icon: arrow_icon,
            title: 'Dedication',
            label: 'Our guides are dedicated to providing exceptional service and ensuring your travel memories are truly unforgettable.'
        }
    ]
  return (
    <section className='max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-2'>
      <div className=''>
              <h1 className='font-poppins-bold text-4xl leading-10 tracking-normal md:tracking-wide dark:text-gray-200 py-2'>Meet Our Expert Tour Guides</h1>
              <p className='font-Poppins text-sm text-gray-600 py-6 dark:text-gray-300'>Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion</p>
              <div className='relative'>
              <ImageCard />
                  <Image src={vector2} height={75} width={75} alt='vector2' className='absolute -top-10 right-0' />
                  <Image src={vector2} height={100} width={100} alt='vector2' className='absolute bottom-0 -left-10' />
              </div>
          </div>
          <div className='flex flex-col items-center'>
              {
                  GuideData.map((guide, index) => (
                    <div key={index} className=' flex items-center gap-6 border-b border-gray-300 dark:border-gray-600 py-6 '>
                    <div className=' flex justify-center items-center'>
                        <p className='flex justify-center items-center bg-gray-200 w-12 h-12 rounded-full'>
                        <Image src={guide.icon} height={25} width={25} alt='Like Icon'/>
                        </p>
                    </div>
                    <div className='w-full'>
                        <p className='font-poppins-bold text-xl text-gray-700 dark:text-gray-200'>{guide.title}</p>
                        <p className='font-Poppins text-gray-500 dark:text-gray-300 md:pr-6 text-sm py-2'>{guide.label}</p>
                    </div>
                </div>
                ))
              }

              {/* 2 */}
              
          </div>
    </section>
  )
}

export default HeroSection4
