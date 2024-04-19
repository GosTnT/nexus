import gold from "@/images/goldIcon.png";
import silver from "@/images/silverIcon.png";

import { Flex, Heading } from "@radix-ui/themes";

import { FaMedal } from "react-icons/fa";
interface ImageWithTextProps {
  src: string;
  alt: string;
  text: string;
  subtext: string;
}

export function StaticOrderInfo() {
  const images: Record<string, string> = {
    actual_elo: silver,
    desired_elo: gold,
  };

  const texts: Record<string, string> = {
    queue_type: "Solo/Duo",
    actual_elo: "Silver IV",
    desired_elo: "Gold IV",
    lp_gains: "Ganhos de LP",
    roles: "Roles",
    region: "Region",
  };
  const subtexts = {
    queue_type: "Tipo de fila",
    actual_elo: "Elo atual",
    desired_elo: "Elo desejado",
    lp_gains: "+18",
    roles: ["TOP", "JUNGLE"],
    region: "Brazil",
  };
  return (
    <>
      <Heading size="8" className="p-3">
        Serviço Solo
      </Heading>
      <Flex gap="1" align="start" direction="column">
        <Flex justify="center" align="center" gap="6">
          <ImageWithText
            src={images.actual_elo}
            alt={texts.actual_elo}
            text={texts.actual_elo}
            subtext={subtexts.actual_elo}
          />
          <ImageWithText
            src={images.desired_elo}
            alt={texts.desired_elo}
            text={texts.desired_elo}
            subtext={subtexts.desired_elo}
          />{" "}
          <Flex direction="column" align="center">
            <FaMedal className="text-5xl m-4 fill-zinc-50 opacity-70" />
            <Heading size="2" weight="bold" className="text-foreground-700">
              {subtexts.queue_type}
            </Heading>

            <Heading size="3" className="text-foreground-500">
              {texts.queue_type}
            </Heading>
          </Flex>
        </Flex>
        <Flex justify="center" align="center" gap="9"></Flex>
      </Flex>
    </>
  );
}

function ImageWithText({ src, alt, text, subtext }: ImageWithTextProps) {
  return (
    <Flex direction="column" align="center">
      <img src={src} alt={alt} />
      <Heading size="2" weight="bold" className="text-foreground-700">
        {subtext}
      </Heading>
      <Heading size="3" className="text-foreground-500">
        {text}
      </Heading>
    </Flex>
  );
}
