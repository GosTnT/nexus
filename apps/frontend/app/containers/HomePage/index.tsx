import FeaturesCarousel from "@/components/FeaturesCarousel";
import FeaturesInteractive from "@/components/FeaturesInteractive";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { Flex } from "@radix-ui/themes";
export default function HomePage() {
  return (
    <>
      {/* <img src={logo} className="opacity-20 absolute -z-10" /> */}
      <Flex direction="column" className="z-1">
        <Header />
        <HeroSection />
        <FeaturesCarousel />
        <FeaturesInteractive />
      </Flex>
    </>
  );
}
