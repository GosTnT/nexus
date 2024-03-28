import { timeline } from "@/components/Hero/gsap/timeline";
import { NexusButton } from "@/components/NexusUI/NexusButton";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
export function HeroButton() {
  const button = useRef(null);
  useGSAP(() => {
    timeline.from(
      button.current,
      {
        y: 300,
      },
      "-=1",
    );
  });

  return (
    <>
      <Link to="/checkout">
        <NexusButton ref={button}>Contrate agora</NexusButton>
      </Link>
    </>
  );
}
