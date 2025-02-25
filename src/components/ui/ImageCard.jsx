import React from 'react'
import image1 from '@/assets/images/image1.png'
import { MdLocationPin } from 'react-icons/md'
import Image from 'next/image'

const ImageCard = () => {
  return (
          <div className="relative h-64 w-full overflow-hidden rounded-3xl">
            <Image
              src={image1}
              alt='Meet'
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
            <div className='w-auto h-8 rounded-full bg-black bg-opacity-50 absolute top-4 left-4 flex items-center justify-center font-Poppins-Medium gap-2 text-gray-50 px-4  '><MdLocationPin className='text-xl' /> New York, USA</div>
              </div>
  )
}

export default ImageCard
