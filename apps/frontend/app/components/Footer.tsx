import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
export default function Footer() {
  return (
    <>
      <Separator className="w-full bg-primary h-14"></Separator>
      <Flex justify="center" p="6">
        <Flex justify="center" direction="column" gap="3" className="w-8/12" >
          <Flex className="items-center gap-24"  >
            <Flex className="items-center" gap="3">
              <img alt="regalis-logo" className="w-16 h-16" />
              <Heading size="3" className="text-nowrap">Regalis Boost</Heading>
            </Flex>
            <Text> League of Legends é uma marca registrada da Riot Games, Inc.Nós não somos de nenhuma forma
              afiliados, associados ou endossado pela Riot Games, Inc. Todos os direitos autoriais, marcas imagens e marcas de serviço
              pertecem a seus respectivos proprietários.</Text>
          </Flex>
          <Flex className="justify-between items-center" >
            <Flex gap="4">
              <Heading size="2">Termos e condições</Heading>
              <Heading size="2">Politica de privacidade</Heading>
            </Flex>
            <Flex >
              Social media
              Social media
              Social media
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}


