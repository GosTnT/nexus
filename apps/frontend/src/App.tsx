import { BoosterCard } from "./BoosterCard";
import { MyCarousel } from "./Carousel";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { HeroSection } from "./HeroSection";
import LastCallToAction from "./LastCallToAction";
import { NavigationMenuDemo } from "./NavigationMenuDemo";

import Footer from "./Footer";
export default function App() {


  return (
    <>
      <NavigationMenuDemo />
      <HeroSection />
      <MyCarousel />

      <Features />
      <BoosterCard />
      <Faq />
      <LastCallToAction />
      < Footer />
    </>
  )

}
