import { Button, Flex, Heading } from "@radix-ui/themes";
import { RiMessage2Fill } from "react-icons/ri";

export function TalkBooster({}) {
  return (
    <>
      <Flex direction="column" gap="3" justify="center" className="h-full ">
        <Heading className="text-zinc-400" weight="medium">
          Fale com o Booster
        </Heading>
        <Button className="flex gap-2">
          <RiMessage2Fill />
          Chat
        </Button>
      </Flex>
    </>
  );
}
