import { CarouselTitle } from "@/components/FeaturesCarousel/CarouselTitle";
import CarouselAnimation from "@/components/FeaturesCarousel/carouselAnimation";
import { EmblaOptionsType } from "embla-carousel";
export default function FeaturesCarousel() {
  const OPTIONS: EmblaOptionsType = { align: "start", direction: "ltr" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <CarouselTitle />
      <CarouselAnimation slides={SLIDES} options={OPTIONS} />
    </>
  );
}
