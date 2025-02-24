import React from 'react'
import services1 from '@/assets/images/services1.svg'
import services2 from '@/assets/images/services2.svg'
import services3 from '@/assets/images/services3.svg'
import Image from 'next/image';

const servicesInfo = [
    {
        icon: services1,
        title: 'Lot of choices',
        desc: "Embrace life's vastness, venture forth,"
    },
    {
        icon: services2,
        title: 'Best Tour Guide',
        desc: "Embrace life's vastness, venture forth,"
    },
    {
        icon: services1,
        title: 'Easy Booking',
        desc: "Embrace life's vastness, venture forth,"
    },
    {
        icon: services1,
        title: 'Easy Booking',
        desc: "Embrace life's vastness, venture forth,"
    },

]
const Services = () => {
    return (
        <section className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-6 '>
            <div className='w-auto md:w-56 flex flex-col justify-center md:justify-start items-center md:items-start'>
                <h1 className='text-[18px] font-Poppins-Medium capitalize  text-pink-500'>What we Serve</h1>
                <h1 className='font-poppins-semibold text-3xl leading-10 dark:text-gray-200'>Top Values For You</h1>
                <p className='font-Poppins text-sm text-gray-600 pt-3 md:pt-6 dark:text-gray-300'>Embrace life's vastness, venture forth,</p>
            </div>
            <section className='w-full col-span-2 grid grid-cols-1 md:grid-cols-4 gap-6 space-x-2 px-4 '>
                {
                    servicesInfo.map((item, index)=>(
                        <div key={index} className='flex flex-col justify-center md:justify-start items-center md:items-start'>
                        <Image src={item.icon} height={75} width={75} alt={item.title}  />
                        <h1 className='font-poppins-semibold font-xl pt-2 md:pt-6 dark:text-gray-300 '>{item.title}</h1>
                        <p className='font-Poppins text-sm text-gray-600 pt-2 md:pt-6 dark:text-gray-300'>{item.desc}</p>
                    </div>
                    ))
                }

            </section>
        </section>
    );
}

export default Services
