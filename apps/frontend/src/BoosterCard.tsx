import { Box, Flex, Heading } from "@radix-ui/themes";
import star from "../img/rating-star-red.png";

import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { SubText, Title } from "./components/nexus_components/text";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import avatarimage from "../img/124599.jpeg";

export function BoosterCard() {
  return (
    <>
      <div className="text-center">
        <Title>Veja a opinião de nossos clientes</Title>
      </div>
      <div className="flex justify-center">
        <Carousel className="flex w-3/4">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3 max-w-fit">
                <Card>
                  <CardContent className="flex gap-5 p-3">
                    <CardTitle>
                      <Avatar>
                        <AvatarImage src={avatarimage} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </CardTitle>
                    <CardTitle>
                      <div className="flex flex-col m-0 p-0">
                        <Heading size="2" ml="1">
                          Jacoba
                        </Heading>
                        <Flex>
                          <img src={star} className="w-4 h-4" />
                          <img src={star} className="w-4 h-4" />
                          <img src={star} className="w-4 h-4" />
                          <img src={star} className="w-4 h-4" />
                          <img src={star} className="w-4 h-4" />
                        </Flex>
                      </div>
                    </CardTitle>
                  </CardContent>
                  <CardContent>
                    <CardTitle className="text-md">
                      Einstein do league
                    </CardTitle>

                    <CardDescription>
                      <SubText>
                        aa slc esse mano ai absurdo genio do league maluco tem
                      </SubText>
                    </CardDescription>
                    <CardFooter>
                      <div className="flex justify-between w-full">
                        <SubText>eae</SubText>

                        <SubText>12/02/2024</SubText>
                      </div>
                    </CardFooter>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* <Flex justify="center"> */}
      {/*   <Carousel */}
      {/*     opts={{ */}
      {/*       align: "start", */}
      {/*     }} */}
      {/*     className="" */}
      {/*   > */}
      {/*     <CarouselContent> */}
      {/*       {Array.from({ length: 20 }).map((_, index) => ( */}
      {/*         <CarouselItem key={index} className="basis-1/6"> */}
      {/*           <Card> */}
      {/*             <CardContent className="p-2"> */}
      {/*               <CardTitle> */}
      {/*                 <Flex className="flex-row"> */}
      {/*                   <Avatar> */}
      {/*                     <AvatarImage src={avatarimage} alt="@shadcn" /> */}
      {/*                     <AvatarFallback>CN</AvatarFallback> */}
      {/*                   </Avatar> */}
      {/*                   <CardDescription className="ml-6 text-center"> */}
      {/*                     <SubText>Jacoba</SubText> */}
      {/*                     <Flex className="border-yellow-300"> */}
      {/*                       <img src={star} className="w-4 h-4" /> */}
      {/*                       <img src={star} className="w-4 h-4" /> */}
      {/*                       <img src={star} className="w-4 h-4" /> */}
      {/*                       <img src={star} className="w-4 h-4" /> */}
      {/*                       <img src={star} className="w-4 h-4" /> */}
      {/*                     </Flex> */}
      {/*                   </CardDescription> */}
      {/*                 </Flex> */}
      {/*               </CardTitle> */}
      {/*             </CardContent> */}
      {/*           </Card> */}
      {/*         </CarouselItem> */}
      {/*       ))} */}
      {/*     </CarouselContent> */}
      {/*   </Carousel> */}
      {/* </Flex> */}
    </>
  );
}
