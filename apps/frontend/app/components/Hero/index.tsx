import { HeroButton } from "@/components/Hero/HeroButton";
import { HeroSubText } from "@/components/Hero/HeroSubTitle";
import { HeroTitle } from "@/components/Hero/HeroTitle";
import { Flex } from "@radix-ui/themes";
import { useRef } from "react";
export default function HeroSection() {
  const container = useRef(null);

  return (
    <Flex direction="column" gap="3" ref={container}>
      <HeroTitle />
      <HeroSubText />
      <HeroButton />
    </Flex>
  );
}
