import goldIcon from "@/images/goldIcon.png";
import silverIcon from "@/images/silverIcon.png";
import { RootState } from "@/store/store";
import { Flex, Heading } from "@radix-ui/themes";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
export function Checkout() {
  const checkoutContainer = useRef(null);
  const rendered = useSelector((state: RootState) => state.counter.rendered);

  useEffect(() => {
    if (rendered) {
      gsap.to(checkoutContainer.current, { opacity: 0, duration: 1 });
      console.log("uncheckout rendered", rendered);
    }
  }, [rendered]);

  return (
    <Flex p="9">
      <Flex className="h-96 w-full " gap="9" justify="center">
        <Flex direction="column" justify="between">
          <Heading
            size="8"
            weight="medium"
            className="text-title font-general text-center tracking-wide-[.010em] "
          >
            Escolha seu elo
          </Heading>
          <Flex justify="center" align="center">
            <img src={goldIcon} className="w-fit h-fit" />
            <img src={silverIcon} className="w-fit h-fit" />
          </Flex>
        </Flex>
        <Flex
          className="border border-yellow h-full backdrop-brightness-100"
          justify="between"
          p="9"
          gap="9"
          direction="column"
        >
          <Heading>Testando legal</Heading>
          <Flex direction="column">
            <p className="text-red-300">total</p>
            <p className="text-gray-300">desconto</p>
          </Flex>
          <Flex direction="column" justify="center">
            <button className="w-44 text-nowrap max-w-48  h-11 mt-2.5 px-8 items-center justify-center rounded-lg text-sm font-medium tracking-[.025em] ring-offset-[#4b6cb7] bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% opacity-90 hover:opacity-100">
              <span className="text-center">Contrate (RS 18.80)</span>
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
