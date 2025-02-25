import React from 'react'

import Image from 'next/image'
import blur_image from '@/assets/images/blur.svg'
import { MdOutlineStarPurple500 } from 'react-icons/md'

const ProductCard = ({name, images, price, location, rate}) => {
  return (
    <div className="">

      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl">
        <Image
          src={images}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
        <div className='w-16 h-8 rounded-full bg-black bg-opacity-50 absolute top-4 right-4 flex items-center justify-center font-Poppins-Medium gap-2 text-gray-50  '><MdOutlineStarPurple500 className='text-yellow-500' /> {rate }</div>
          </div>

          <div className='px-2 py-2'>
              
              <h1 className='font-poppins-semibold text-gray-900 dark:text-gray-200 text-xl'>{name}</h1>
              <p className='font-Poppins text-xs py-4 text-gray-500 dark:text-gray-400'>Lorem Ipsum is simply dummy text of the printing and...see more</p>
          </div>
          <div className=' flex justify-between items-center bg-[#FBFBFB] dark:bg-gray-700 px-4 py-3 rounded-b-lg'>
              <div>
                  <p className='font-Poppins text-sm text-gray-500 dark:text-gray-300'>{location}</p>
          <p className='flex items-center gap-1'><span className='font-poppins-bold text-xl dark:text-pink-500 '>${price}</span><span className='font-Poppins text-xs text-gray-400 dark:text-gray-300'>x 12 interest free</span></p>
              </div>
              <button type='bottom' className='bg-gradient-to-t from-indigo-700 to-indigo-500 p-2 rounded-xl text-sm font-Poppins text-white shadow-md shadow-indigo-300 dark:shadow-indigo-500'>See More</button>
          </div>

    </div>
  )
}

export default ProductCard
