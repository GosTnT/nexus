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
        A plataforma{" "}
        <p className="text-transparent tracking-wide bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% bg-clip-text inline">
          {" "}
          líder{" "}
        </p>
        em ELO Boost
      </Heading>
    </>
  );
}
