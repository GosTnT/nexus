import { NexusButton } from "@/components/NexusUI/NexusButton";
import { SubText, Title } from "@/components/NexusUI/text";
import { Flex } from "@radix-ui/themes";

export default function HeroSection() {
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
        <strong className="text-transparent bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% bg-clip-text">
          líder{" "}
        </strong>
        em ELO Boost
      </Title>
      <SubText>
        Alcance o ranking dos seus <strong>sonhos </strong>
        sem esforço <br></br>com os nossos serviços de eloboosting
      </SubText>
      <NexusButton>Contrate agora</NexusButton>
    </Flex>
  );
}
