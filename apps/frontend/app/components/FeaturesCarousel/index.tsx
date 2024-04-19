import CarouselAnimation from "@/components/FeaturesCarousel/carouselAnimation";
import { Flex, Heading } from "@radix-ui/themes";
export default function FeaturesCarousel() {
  return (
    <>
      <Heading className=" col-span-full col-start-2 text-5  ">
        Conheça mais de perto.
      </Heading>
      <Flex direction="column" gap="9">
        <CarouselAnimation />
      </Flex>
    </>
  );
}
