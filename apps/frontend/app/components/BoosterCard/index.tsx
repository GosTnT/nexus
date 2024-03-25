import { Title } from "@/components/NexusUI/text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function BoosterCard() {
  return (
    <>
      <div className="text-center">
        <Title>Veja a opinião de nossos clientes</Title>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-3/4">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 h-56 border border-gray-500 rounded-xl"
              ></CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
