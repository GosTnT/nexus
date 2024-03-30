import { CarouselTitle } from "@/components/FeaturesCarousel/CarouselTitle";
import CarouselAnimation from "@/components/FeaturesCarousel/carouselAnimation";
export default function FeaturesCarousel() {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <CarouselTitle />
      <CarouselAnimation />
    </>
  );
}
