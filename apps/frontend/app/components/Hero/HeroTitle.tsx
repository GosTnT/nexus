import { Heading } from "@radix-ui/themes";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
export function HeroTitle({}) {
  const heading = useRef(null);

  gsap.registerPlugin(TextPlugin);

  // useGSAP(() => {
  //   timeline.from(heading.current, {
  //     y: -100,
  //   });
  // });
  return (
    <>
      <Heading highContrast className="text-5xl tracking-wide" ref={heading}>
        A plataforma líder em ELO Boost
      </Heading>
    </>
  );
}
