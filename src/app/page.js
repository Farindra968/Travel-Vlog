import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import vector from '@/assets/images/vector.svg'
import Image from "next/image";
import HeroSection2 from "@/components/home/HeroSection2";

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
      <div className="md:py-6 relative">
        <HeroSection2 />
      </div>
    </section>
  );
}
