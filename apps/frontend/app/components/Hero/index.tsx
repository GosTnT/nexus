import { NexusButton } from "@/components/NexusUI/NexusButton";
import { SubText, Title } from "@/components/NexusUI/text";
import { useGSAP } from "@gsap/react";
import { Flex } from "@radix-ui/themes";
import gsap from "gsap";

import { useRef } from "react";
export default function HeroSection() {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });
  const animate = contextSafe(() => {
    gsap.to(".test", { backgroundColor: "red", duration: 3 });
  });
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="h-[75vh]"
      gap="3"
      ref={container}
    >
      <Title>
        A plataforma{" "}
        <strong className="text-transparent bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% bg-clip-text">
          líder{" "}
        </strong>
        em ELO Boost
      </Title>
      <SubText>
        Alcance o ranking dos seus <strong>sonhos </strong>
        sem esforço <br></br>com os nossos serviços de eloboosting
      </SubText>
      <NexusButton onClick={animate}>Contrate agora</NexusButton>
      <div className="test w-44 h-20 border border-white">
        lorem ipsum dolor asi met
      </div>
    </Flex>
  );
}
