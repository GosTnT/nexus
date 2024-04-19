import { timeline } from "@/components/Hero/gsap/timeline";
import { useGSAP } from "@gsap/react";
import { Heading } from "@radix-ui/themes";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
export function HeroTitle({}) {
  const heading = useRef(null);

  gsap.registerPlugin(TextPlugin);

  useGSAP(() => {
    timeline.from(heading.current, {
      y: -100,
    });
  });
  return (
    <>
      <Heading
        size="9"
        weight="bold"
        className=" text-zinc-100 tracking-[0.01em]"
        ref={heading}
      >
        Não perca mais tempo
        <br /> com jogadores ruins.
        {/* A plataforma líder em Elo Boost. */}
      </Heading>
    </>
  );
}
