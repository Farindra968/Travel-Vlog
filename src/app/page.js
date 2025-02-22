import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <section className="">
      <section className="max-w-screen-lg mx-auto p md:pt-20">
        <HeroSection />
        <div className="py-8">
          <Services/>
        </div>
      </section>
    </section>
  );
}
