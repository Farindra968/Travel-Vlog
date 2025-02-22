import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import vector from '@/assets/images/vector.svg'
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <div className="md:pt-20 relative">
        <HeroSection />
        <Image src={vector} width={500} height={500} alt="Travel Vlog" className="absolute bottom-16 right-0"/>
      </div>
      <div className="py-8">
          <Services/>
        </div>
    </section>
  );
}
