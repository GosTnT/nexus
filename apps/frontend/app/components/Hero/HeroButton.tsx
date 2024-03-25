import { NexusButton } from "@/components/NexusUI/NexusButton";
import { isRender } from "@/store/checkoutRender";
import { RootState } from "@/store/store";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
export function HeroButton() {
  const count = useSelector((state: RootState) => state.counter.rendered);
  const dispatch = useDispatch();
  const common_duration = 5;
  const button = useRef(null);
  useGSAP(() => {
    gsap.from(button.current, {
      opacity: 0,
      y: 300,
      duration: common_duration,
      overwrite: "auto",
    });
  });

  const renderCheckout = () => {
    dispatch(isRender());
    console.log(count);
  };
  return (
    <>
      <NexusButton onClick={renderCheckout} ref={button}>
        Contrate agora
      </NexusButton>
    </>
  );
}
