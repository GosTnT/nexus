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
      <Text className="font-general text-zinc-400 " ref={subText}>
        {/* Eloboost como você sempre sonhou, aqui você controla do começo ao fim. */}
        {/* O seu resultado é a nossa prioridade,você control cada detalhe. */}
        Alcance o elo que você deseja <strong>sem estresse</strong> com os
        nossos serviços.
      </Text>
    </>
  );
}
