import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import templateAvatar from "@/images/124599.jpeg";
import { Flex, Heading, Text } from "@radix-ui/themes";

export function BoosterProfile({}) {
  return (
    <>
      <Flex direction="column" gap="4" p="6" className="h-full">
        <Flex justify="center" direction="column" align="center" gap="2">
          <Avatar className="w-20 h-20">
            <AvatarImage src={templateAvatar} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Flex justify="center" gap="1" direction="column" align="center">
            <Heading>Jacoba U bala</Heading>
            <Text weight="light" className="text-foreground-500">
              O sinistro
            </Text>
          </Flex>
        </Flex>
        <Flex className="w-full" justify="center" align="center">
          <Button className="bg-red-500">
            <Heading size="1">Solicitar outro</Heading>
          </Button>
          <Button>Enviar doação</Button>
        </Flex>
      </Flex>
    </>
  );
}
