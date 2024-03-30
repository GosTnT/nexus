import { Input } from "@/components/ui/input";
import { Flex, Heading, Text } from "@radix-ui/themes";

export function CheckoutRank() {
  return (
    <Flex
      direction="column"
      justify="between"
      className="border border-red-500 h-full"
      p="7"
    >
      <Flex direction="column" gap="3">
        <Heading
          size="5"
          weight="medium"
          className="text-title font-general text-center tracking-wide-[.010em] "
        >
          Insira seu nome de invocador
        </Heading>
        <Text size="2" color="gray">
          Nós preencheremos seu elo automaticamente
        </Text>
      </Flex>
      <Flex justify="center" align="center">
        <Input placeholder="Nome de invocador + #BR1" />
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}
