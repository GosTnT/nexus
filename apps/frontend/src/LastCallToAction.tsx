import { Flex, Text } from "@radix-ui/themes";
import { Button } from "./components/ui/button"
import { Title } from "./components/nexus_components/text";

export default function LastCallToAction() {
  return (
    <Flex justify="center">
      <Flex p={"9"} justify="between" className="items-center self-center w-2/4 rounded-3xl bg-neutral-900 shadow-lg shadow-zinc-600 mt-20" gap="9">
        <Flex direction="column" gap="4">
          <Title>
            Pare de gastar tempo
          </Title>
          <Text size="5">
            Jogue no seu elo merecido agora mesmo
          </Text>
        </Flex>
        <Button size="lg" className="text-center">
          Contrate agora
        </Button>
      </Flex>
    </Flex>
  )
}
