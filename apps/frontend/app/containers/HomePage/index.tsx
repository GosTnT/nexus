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
      <div className="grid grid-cols-12 grid-flow-col grid-rows-12">
        <div className="col-start-2 col-end-12 row-start-1 row-span-11">
          <div className="grid grid-cols-12 grid-flow-col gap-y-52 grid-rows-12">
            <div className="grid col-start-1 col-end-13 grid-rows-4">
              <div className="col-span-full col-start-1 col-end-12 row-start-1 pt-5">
                <Header />
              </div>

              <div className="col-span-full col-start-1 col-end-12 row-start-3 self-center">
                <HeroSection />
              </div>
            </div>

            <div className="col-start-1 col-end-13 row-span-2 row-start-2">
              <FeaturesCarousel />
            </div>

            <div className="col-span-full col-start-1 row-start-3">
              <FeaturesInteractive />
            </div>
          </div>
        </div>
        <div className="col-span-full col-start-1 row-start-4">
          <BoosterCard />
        </div>
        {/* <Faq /> */}
        {/* <LastCTA /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
