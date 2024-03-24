import { NexusButton } from "@/components/NexusUI/NexusButton";

import { SubText, Title } from "@/components/NexusUI/text";
import { useGSAP } from "@gsap/react";
import { Flex } from "@radix-ui/themes";
import { gsap } from "gsap";
import { useRef } from "react";
export default function HeroSection() {
  const highlighted = useRef(null);
  const highlightedL = useRef(null);
  const Button = useRef(null);

  const animate = () => {
    console.log(highlighted.current);
  };
  useGSAP(() => {
    gsap.from(highlightedL.current, {
      opacity: 0,
      y: 100,
      width: 200,
      rotate: 90,
      duration: 3,
    });
  });
  // useGSAP(() => {
  //   gsap.from(highlighted.current, { opacity: 100, y: 180, duration: 2 });
  // });
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="h-[75vh]"
      gap="3"
    >
      <Title>
        A plataforma{" "}
        <p
          ref={highlighted}
          className="text-transparent tracking-wide bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% bg-clip-text inline"
        >
          {" "}
          líder{" "}
        </p>
        em ELO Boost
      </Title>
      <SubText>
        Alcance o ranking dos seus <strong>sonhos </strong>
        sem esforço <br></br>com os nossos serviços de eloboosting
      </SubText>
      <NexusButton onClick={animate} ref={Button}>
        Contrate agora
      </NexusButton>
    </Flex>
  );
}
