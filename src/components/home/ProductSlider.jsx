"use client"

import { MdOutlineArrowForwardIos } from "react-icons/md"
import SecondaryTitle from "../ui/SecondaryTitle"
import { SubTitle } from "../ui/SubTitle"
import ProductCard from "../ui/ProductCard"
import productData from "@/data/product"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useRef } from "react"

export const ProductSlider = () => {
    const swiperRef = useRef(null)
  return (
    <section className="max-w-screen-lg mx-auto px-4 lg:px-2">
      <div className="flex justify-between items-center py-4">
        <div>
          <SubTitle title="choose your next destination" />
          <SecondaryTitle title="Explore top destination" />
        </div>
        <div className="flex gap-6 ">
          <button onClick={()=>swiperRef.current?.slidePrev()} className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-indigo-600 shadow-md shadow-indigo-300">
            <MdOutlineArrowForwardIos className="rotate-180" />
          </button>
          <button onClick={()=> swiperRef.current?.slideNext()} className="w-10 h-10 text-white rounded-full flex justify-center items-center bg-indigo-500 shadow-md shadow-indigo-300">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {productData.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProductSlider

