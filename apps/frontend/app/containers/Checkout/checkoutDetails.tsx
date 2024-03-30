import { CheckoutButton } from "@/containers/Checkout/checkoutButton";
import { DetailsAddons } from "@/containers/Checkout/detailsAddons";
import { DetailsHeader } from "@/containers/Checkout/detailsHeader";
import { DetailsPrice } from "@/containers/Checkout/detailsPrice";
import { Flex } from "@radix-ui/themes";

export function CheckboxDetails() {
  return (
    <Flex
      className="border border-yellow h-full backdrop-brightness-100"
      justify="between"
      p="7"
      direction="column"
    >
      <DetailsHeader />
      <DetailsAddons />

      <Flex direction="column" justify="center" gap="6">
        <DetailsPrice />
        <CheckoutButton />
      </Flex>
    </Flex>
  );
}
