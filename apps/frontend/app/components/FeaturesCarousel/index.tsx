import CarouselAnimation from "@/components/FeaturesCarousel/carouselAnimation";
import { CarouselTitle } from "@/components/FeaturesCarousel/carouselTitle";
import { Flex } from "@radix-ui/themes";
export default function FeaturesCarousel() {
  return (
    <>
      <Flex direction="column" gap="9">
        <CarouselTitle />
        <CarouselAnimation />
      </Flex>
    </>
  );
}
