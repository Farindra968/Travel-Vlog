import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import vector from '@/assets/images/vector.svg'
import Image from "next/image";
import HeroSection2 from "@/components/home/HeroSection2";
import ProductSlider from "@/components/home/ProductSlider";
import ProductSection from "@/components/home/ProductSection";
import HeroSection3 from "@/components/home/HeroSection3";
import HeroSection4 from "@/components/home/HeroSection4";

export default function Home() {
  return (
    <section className=" dark:bg-gray-800">
      <div className="md:pt-20 relative">
        <HeroSection />
        <Image src={vector} width={500} height={500} alt="Travel Vlog" className="absolute bottom-16 right-0"/>
      </div>
      <div className="py-10">
          <Services/>
      </div>
      <div className="py-10">
          <ProductSlider/>
      </div>
      <div className="pt-28 md:pt-10 pb-10 ">
        <HeroSection3 />
      </div>
      <div className="py-10">
          <ProductSection/>
      </div>
      <div className="md:py-6 ">
        <HeroSection2 />
      </div>
      <div className="py-20 ">
        <HeroSection4 />
      </div>
    </section>
  );
}
