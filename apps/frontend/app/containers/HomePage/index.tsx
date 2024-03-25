import { BoosterCard } from "@/components/BoosterCard";
import Faq from "@/components/Faq";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import FeaturesInteractive from "@/components/FeaturesInteractive";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import LastCTA from "@/components/LastCTA";
import logo from "@/images/akali.jpeg";
import { Flex } from "@radix-ui/themes";
export default function HomePage() {
  return (
    <>
      <img src={logo} className="opacity-20 absolute -z-10" />
      <Flex direction="column" className="z-1">
        <Header />
        <HeroSection />
        <FeaturesCarousel />
        <FeaturesInteractive />
        <BoosterCard />
        <Faq />
        <LastCTA />
        <Footer />
      </Flex>
    </>
  );
}
