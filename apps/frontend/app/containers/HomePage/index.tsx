import BoosterCard from "@/components/BoosterCard";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import FeaturesInteractive from "@/components/FeaturesInteractive";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
// import logo from "@/images/akalitestes/BlurEbluecolor.jpeg";
export default function HomePage() {
  return (
    <>
      {/* <img src={logo} className="opacity-15 absolute -z-10" /> */}
      <div className="grid grid-flow-col grid-rows-12 grid-cols-12 ">
        <div className="col-start-2 row-start-1 row-span-11 col-end-12">
          <div className="grid  gap-y-52 grid-flow-col grid-rows-12 grid-cols-12">
            <div className="grid grid-rows-4 col-start-1 col-end-13">
              <div className=" row-start-1 col-start-1 col-end-12 col-span-full pt-5">
                <Header />
              </div>

              <div className="row-start-3 col-start-1 col-end-12 col-span-full self-center">
                <HeroSection />
              </div>
            </div>

            <div className=" col-start-1 row-start-2 row-span-2 col-end-13">
              <FeaturesCarousel />
            </div>

            <div className="col-start-1 row-start-3 col-span-full">
              <FeaturesInteractive />
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-4 col-span-full">
          <BoosterCard />
        </div>
        {/* <Faq /> */}
        {/* <LastCTA /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
