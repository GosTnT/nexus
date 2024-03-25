import { useGSAP } from "@gsap/react";
import { Text } from "@radix-ui/themes";
import { useRef } from "react";

import { gsap } from "gsap";
export function HeroSubText() {
  const subText = useRef(null);

  const common_duration = 5;
  useGSAP(() => {
    gsap.from(subText.current, {
      opacity: 0,
      x: 300,
      duration: common_duration,
    });
  }, {});

  return (
    <>
      <Text
        size="3"
        className="text-zinc-300 opacity-90 text-wrap tracking-wide-[0.010em]"
        ref={subText}
      >
        Alcance o ranking dos seus <strong>sonhos </strong>
        sem esforço <br></br>com os nossos serviços de eloboosting
      </Text>
    </>
  );
}
