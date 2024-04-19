import { Flex, Heading, Text } from "@radix-ui/themes";

import { FaMedal } from "react-icons/fa";
export function QueueType() {
  return (
    <Flex direction="column" justify="between" align="center">
      <FaMedal className="text-5xl  fill-zinc-50 opacity-70 " />
      <Heading size="3" weight="bold" className="text-zinc-500">
        Tipo de fila
      </Heading>
      <Text size="2" weight="light" className="text-zinc-500">
        Solo/Duo
      </Text>
    </Flex>
  );
}
