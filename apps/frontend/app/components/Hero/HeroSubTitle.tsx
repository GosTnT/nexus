import { timeline } from "@/components/Hero/gsap/timeline";
import { useGSAP } from "@gsap/react";
import { Text } from "@radix-ui/themes";
import { useRef } from "react";
export function HeroSubText() {
  const subText = useRef(null);

  useGSAP(() => {
    timeline.from(
      subText.current,
      {
        x: 300,
      },
      "-=1",
    );
  }, {});

  return (
    <>
      <Text
        className="text-lg text-gray-300 tracking-wide-[0.010em]"
        ref={subText}
      >
        Alcance o ranking dos seus <strong>sonhos </strong>
        sem esforço
        <br /> com os nossos serviços de eloboosting
      </Text>
    </>
  );
}
