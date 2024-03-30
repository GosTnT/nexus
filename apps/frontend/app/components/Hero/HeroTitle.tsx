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
        size="8"
        weight="medium"
        className="text-title font-general text-center tracking-wide-[.010em] "
        ref={heading}
      >
        A plataforma líder em ELO Boost
      </Heading>
    </>
  );
}
