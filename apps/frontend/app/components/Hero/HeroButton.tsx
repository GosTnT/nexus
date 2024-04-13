import { timeline } from "@/components/Hero/gsap/timeline";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
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
        <Button ref={button} size="lg">
          Contrate Agora
        </Button>
      </Link>
    </>
  );
}
