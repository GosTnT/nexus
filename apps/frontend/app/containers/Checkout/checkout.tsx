import { CheckoutRank } from "@/containers/Checkout/checkoutRank";
import { Flex } from "@radix-ui/themes";
import { CheckboxDetails } from "./checkoutDetails";
export function Checkout() {
  return (
    <Flex align="center" justify="center" className="h-[75vh]" gap="3">
      <CheckoutRank />
      <CheckboxDetails />
    </Flex>
  );
}
