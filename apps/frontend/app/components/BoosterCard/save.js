import akali from "@/images/akali.jpeg";

import gold from "@/images/goldIcon.png"; // Import images as needed
import star from "@/images/rating-star-red.png";
import silver from "@/images/silverIcon.png";
import { Flex, Heading, Text } from "@radix-ui/themes";

import icon from "@/images/124599.jpeg";

import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
export function BoosterCarousel() {
const options: EmblaOptionsType = { dragFree: true, loop: true };
const [emblaRef, emblaApi] = useEmblaCarousel(options, [
AutoScroll({
playOnInit: false,
}),
]);

[
{
id: 6,
image: gold,
reviewTitle: "Great booster!",
reviewText:
"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
stars: 5,
customerName: "John Doe",
orderId: "ABC123",
date: "2024-04-01",
},

    {
      id: 5,
      image: gold,
      reviewTitle: "Great booster!",
      reviewText:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      stars: 5,
      customerName: "John Doe",
      orderId: "ABC123",
      date: "2024-04-01",
    },

      {
      id: 3,
      image: akali,
      reviewTitle: "Very satisfied!",
      reviewText:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      stars: 5,
      customerName: "Alice Johnson",
      orderId: "GHI789",
      date: "2024-04-03",
    },
    // Add more booster cards as needed

];
return (
<section className="booster">
<div className="booster__viewport" ref={emblaRef}>
<div className="booster__container">
{boosterCards.map((card) => (
<div
              key={card.id}
              className="grid grid-rows-5 gap-3 justify-center p-8 rounded-3xl shadow-sm shadow-gray-600"
            >
<Flex gap="3">
<Flex justify="center" align="center">
<div className="overflow-hidden w-11 h-11 rounded-full">
<img src={icon} className="booster__slide__image" />
</div>
</Flex>
<Flex direction="column" justify="center">
<Heading size="4">{card.customerName}</Heading>
<Flex>
{[...Array(card.stars)].map((\_, starIndex) => (
<img key={starIndex} className="w-5 h-5" src={star} />
))}
</Flex>
</Flex>
</Flex>

              <div className="flex flex-col row-span-3 auto-rows-max justify-center">
                <Heading>{card.reviewTitle}</Heading>
                <Text>{card.reviewText}</Text> {/* Display review text */}
              </div>
              <Flex justify="between">
                <Text>{card.orderId}</Text>
                <Text>{card.date}</Text>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </section>

);
}
