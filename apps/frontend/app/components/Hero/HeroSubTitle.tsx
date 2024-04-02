import { Text } from "@radix-ui/themes";
import { useRef } from "react";

export function HeroSubText() {
  const subText = useRef(null);

  // useGSAP(() => {
  //   timeline.from(
  //     subText.current,
  //     {
  //       x: 300,
  //     },
  //     "-=1",
  //   );
  // }, {});

  return (
    <>
      <Text
        className="text-gray-300 text-lg tracking-wide-[0.010em]"
        ref={subText}
      >
        Alcance o ranking dos seus <strong>sonhos </strong>
        sem esforço
        <br /> com os nossos serviços de eloboosting
      </Text>
    </>
  );
}
