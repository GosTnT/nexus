import { HeroButton } from "@/components/Hero/HeroButton";
import { HeroSubText } from "@/components/Hero/HeroSubTitle";
import { HeroTitle } from "@/components/Hero/HeroTitle";
import { RootState } from "@/store/store";
import { Flex } from "@radix-ui/themes";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
export default function HeroSection() {
  const rendered = useSelector((state: RootState) => state.counter.rendered);
  const container = useRef(null);
  const checkout = () => {
    gsap.to(container.current, { opacity: 0, x: 1000, duration: 2 });
    console.log("checkout");
  };

  // const heroSection= () => {
  //   gsap.from(container.current, { opacity: 0, x: 1000, duration: 2 });
  //   console.log("checkout");
  // };
  useEffect(() => {
    if (rendered) {
      checkout();
      console.log(rendered);
    }
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
      <HeroTitle />
      <HeroSubText />
      <HeroButton />
    </Flex>
  );
}
