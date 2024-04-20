import goldIcon from "@/images/goldIcon.png";
import brazil from "@/images/icons/braza.svg";
import silverIcon from "@/images/silverIcon.png";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { IconType } from "react-icons";
import { FaMedal, FaRocket } from "react-icons/fa";
interface Ranking {
  alt: string;
  text: string;
  subtext: string;
  lp?: string;
  image: string;
}
interface Icon {
  alt: string;
  text: string;
  subtext: string;
  image: IconType;
}
interface Svg {
  alt: string;
  text: string;
  subtext: string;
  image: string;
}
const renderRanking = (data: Ranking): JSX.Element => {
  return (
    <Flex direction="column" justify="center" align="center">
      <img className="w-15" src={data.image} alt={data.alt} />
      <Flex direction="column" justify="center" align="center">
        <Heading className="text-foreground-600" size="1">
          {data.text}
        </Heading>
        <Text className="text-foreground-500" size="1">
          {data.subtext}{" "}
          {data.lp ? (
            <span className="text-red-500 text-[12px]">{data.lp} LP</span>
          ) : null}
        </Text>
      </Flex>
    </Flex>
  );
};

const renderIcon = (data: Icon): JSX.Element => {
  return (
    <Flex direction="column" justify="center" align="center">
      <div className="p-4">
        <data.image className="text-5xl fill-zinc-400" />
      </div>
      <Flex direction="column" justify="center" align="center">
        <Heading className="text-foreground-600" align="center" size="1">
          {data.text}
        </Heading>
        <Text className="text-foreground-500" size="1">
          {data.subtext}
        </Text>
      </Flex>
    </Flex>
  );
};
const renderSvg = (data: Svg): JSX.Element => {
  return (
    <Flex direction="column" justify="center" align="center">
      <div className="p-3 overflow-hidden rounded-full ">
        <img
          className="w-[56px] h-[56px] p-0 m-0 fill-zinc-400 text-zinc-400"
          src={data.image}
          alt={data.alt}
        />
      </div>
      <Flex direction="column" justify="center" align="center">
        <Heading className="text-foreground-600" size="1">
          {data.text}
        </Heading>
        <Text className="text-foreground-500" size="1">
          {data.subtext}
        </Text>
      </Flex>
    </Flex>
  );
};

export function StaticOrderInfo() {
  const actual_elo: Ranking = {
    alt: "silver",
    text: "Elo Atual",
    subtext: "Silver III",
    lp: "80",
    image: silverIcon,
  };

  const desired_elo: Ranking = {
    alt: "gold",
    text: "Elo desejado",
    subtext: "Gold IV",
    lp: "0",
    image: goldIcon,
  };
  const lp_gains: Icon = {
    alt: "gold",
    subtext: "+18 LP",
    text: "Ganhos de PDL",
    image: FaRocket,
  };
  const queue_type: Icon = {
    alt: "tipo de fila",
    text: "Tipo de fila",
    subtext: "Solo/Duo",
    image: FaMedal,
  };
  const region: Svg = {
    alt: "Brazil",
    text: "Servidor",
    subtext: "BR",
    image: brazil,
  };

  return (
    <>
      <Flex direction="column" className="h-full w-full" justify="between">
        <Flex gap="5" align="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="70"
            height="70"
            viewBox="0 0 50 50"
            className="fill-zinc-400 "
          >
            <path d="M 11 3 C 10.621 3 10.275469 3.2137344 10.105469 3.5527344 C 9.9364688 3.8917344 9.9712188 4.2966094 10.199219 4.5996094 L 13 8.3320312 L 13 41.667969 L 9.1992188 45.400391 C 8.9722187 45.703391 8.9374687 46.108266 9.1054688 46.447266 C 9.2754687 46.786266 9.621 47 10 47 L 39 47 C 39.304 47 39.59125 46.862 39.78125 46.625 L 44.78125 41.625 C 45.02125 41.324 45.066391 40.913406 44.900391 40.566406 C 44.733391 40.221406 44.385 40 44 40 L 23 40 L 23 4 C 23 3.447 22.553 3 22 3 L 11 3 z M 25 7 L 25 9 C 34.925 9 43 17.075 43 27 C 43 31.144 41.578797 34.954 39.216797 38 L 41.685547 38 C 43.774547 34.841 45 31.063 45 27 C 45 15.972 36.028 7 25 7 z M 25 11 L 25 38 L 36.589844 38 C 39.315844 35.13 41 31.262 41 27 C 41 18.178 33.822 11 25 11 z M 11 12.740234 C 7.544 16.134234 5.3072969 20.765109 5.0292969 25.912109 C 5.0102969 26.272109 5 26.635 5 27 C 5 27.59 5.0261719 28.174953 5.0761719 28.751953 C 5.5021719 33.631953 7.693 38.012766 11 41.259766 L 11 38.287109 C 8.503 35.197109 7 31.273 7 27 C 7 22.727 8.503 18.802891 11 15.712891 L 11 12.740234 z M 11 19.271484 C 9.729 21.564484 9 24.198 9 27 C 9 29.802 9.729 32.435516 11 34.728516 L 11 19.271484 z"></path>
          </svg>
          <Heading size="8" className="  ">
            Serviço Solo
          </Heading>
        </Flex>

        <Separator size="4" className="text-zinc-500" />
        <Flex gap="1" align="start" direction="column">
          <Flex justify="center" align="center" gap="6">
            {renderRanking(actual_elo)}
            {renderRanking(desired_elo)}
            {renderIcon(lp_gains)}
            {renderIcon(queue_type)}
            {renderSvg(region)}
          </Flex>
          <Flex justify="center" align="center" gap="9"></Flex>
        </Flex>
      </Flex>
    </>
  );
}
