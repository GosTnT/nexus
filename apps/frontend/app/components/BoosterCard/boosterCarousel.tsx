import gold from "@/images/goldIcon.png"; // Import images as needed
import silver from "@/images/silverIcon.png";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import star from "@/images/rating-star-red.png";
import { Flex, Heading, Text } from "@radix-ui/themes";

import icon from "@/images/124599.jpeg";
import { EmblaOptionsType } from "embla-carousel";

export function BoosterCarousel() {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false }),
  ]);
  type BoosterCard = {
    id: number;
    image: string;
    reviewTitle?: string;
    reviewText?: string; // Add review text property
    stars?: number;
    customerName: string;
    orderId: string;
    date: string;
  };

  const boosterCards: BoosterCard[] = [
    {
      id: 1,
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
      id: 1,
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
      id: 8,
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
      id: 2,
      image: silver,
      reviewTitle: "Good job!",
      reviewText: "consectetur adipiscing elit",
      stars: 4,
      customerName: "Jane Smith",
      orderId: "DEF456",
      date: "2024-04-02",
    },
    {
      id: 3,
      image: silver,
      reviewTitle: "Good job!",
      reviewText: "consectetur adipiscing elit",
      stars: 4,
      customerName: "Jane Smith",
      orderId: "DEF456",
      date: "2024-04-02",
    },
    {
      id: 7,
      image: silver,
      reviewTitle: "Good job!",
      reviewText: "consectetur adipiscing elit",
      stars: 4,
      customerName: "Jane Smith",
      orderId: "DEF456",
      date: "2024-04-02",
    },
  ];

  return (
    <div className="booster">
      <div className="booster__viewport" ref={emblaRef}>
        <div className="booster__container">
          {boosterCards.map((card) => (
            <div
              key={card.id}
              className="flex overflow-hidden flex-col gap-5 justify-center p-6 rounded-3xl shadow-lg booster__slide shadow-gray-700"
            >
              {/* <Flex */}
              {/*   direction="column" */}
              {/*   p="6" */}
              {/*   gap="5" */}
              {/*   justify="center" */}
              {/*   className="overflow-hidden rounded-3xl shadow-lg shadow-gray-700" */}
              {/* > */}
              <Flex gap="5">
                <Flex justify="center" align="center">
                  <div className="overflow-hidden w-11 h-11 rounded-full">
                    <img src={icon} className="" />
                  </div>
                </Flex>
                <Flex direction="column" justify="center">
                  <Heading size="5" ml="1">
                    Jacoba da silva
                  </Heading>
                  <Flex>
                    <img className="w-6 h-6" src={star} />
                    <img className="w-6 h-6" src={star} />
                    <img className="w-6 h-6" src={star} />
                    <img className="w-6 h-6" src={star} />
                    <img className="w-6 h-6" src={star} />
                  </Flex>
                </Flex>
              </Flex>

              <div className="flex flex-col gap-1 justify-center">
                <Heading size="5">fodasefodasefodase</Heading>
                <Text>
                  slc esse mano ai absurdo genio do league maluco tem um slc slc
                  esse mano ai absurdo genio do league maluco tem um slc slc
                  esse mano ai absurdo genio do league maluco tem um slc esse
                </Text>
              </div>

              <Flex justify="between">
                <Text className="text-gray-400">#32532</Text>
                <Text className="text-gray-400">há 3 horas</Text>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
