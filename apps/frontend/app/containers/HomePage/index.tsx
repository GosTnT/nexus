import BoosterCard from "@/components/BoosterCard";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import FeaturesInteractive from "@/components/FeaturesInteractive";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
// import logo from "@/images/akalitestes/BlurEbluecolor.jpeg";
export default function HomePage() {
  return (
    <>
      {/* <img src={logo} className="absolute opacity-15 -z-10" /> */}
      <div className="grid grid-cols-12 gap-y-72 pt-4  grid-flow-col  grid-rows-12 background-color ">
        <div className="grid col-start-2  col-end-12 ">
          <div className="col-span-10">
            <Header />
          </div>
          <HeroSection />
        </div>

        <div className="col-start-1 col-end-13 row-span-2 row-start-2">
          <FeaturesCarousel />
        </div>

        <div className="col-span-full col-start-1 row-start-3">
          <FeaturesInteractive />
        </div>
      </div>
      <div className="col-span-full col-start-1 row-start-4">
        <BoosterCard />
      </div>
      {/* <Faq /> */}
      {/* <LastCTA /> */}
      {/* <Footer /> */}
    </>
  );
}
