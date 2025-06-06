import { Title } from "@/components/NexusUI/text";
import { Button } from "@/components/ui/button";
import { Flex, Text } from "@radix-ui/themes";

export default function LastCallToAction() {
  return (
    <Flex justify="center">
      <Flex
        p={"9"}
        justify="between"
        className="items-center self-center mt-20 w-2/4 rounded-3xl shadow-lg bg-neutral-900 shadow-zinc-600"
        gap="9"
      >
        <Flex direction="column" gap="4">
          <Title>Pare de gastar tempo</Title>
          <Text size="5">Jogue no seu elo merecido agora mesmo</Text>
        </Flex>
        <Button size="lg" className="text-center">
          Contrate agora
        </Button>
      </Flex>
    </Flex>
  );
}
