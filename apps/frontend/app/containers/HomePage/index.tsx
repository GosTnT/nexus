
import { BoosterCard } from "components/BoosterCard";
import { MyCarousel } from "components/Carousel";
import { Faq } from "components/Faq";
import { Features } from "components/Features";
import { HeroSection } from "components/HeroSection";
import LastCallToAction from "components/LastCallToAction";
import { NavigationMenuDemo } from "components/NavigationMenuDemo";

import Footer from "components/Footer";
export default function HomePage() {

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
