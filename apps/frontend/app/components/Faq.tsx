import { Title } from "@/components/text";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Flex } from "@radix-ui/themes";
function FaqMessage() {
  return (
    <Flex className="p-6 bg-neutral-900 w-1/4 ">
      <p>
        A Regalis mantém total anonimato e privacidade dos seus clientes. Nossos jogadores de ponta são extremamente confiáveis e jamais enviarão mensagens para a lista de amigos da sua conta ou durante o jogo. Além disso, nosso aplicativo bloqueia as comunicações no client do jogo para garantir ainda mais a privacidade e segurança.
      </p></Flex>

  )
}
function FaqRadio() {
  const [selected, setSelected] = useState("buenos-aires");

  return (<>
    <Flex className="w-full justify-center gap-9 radius">
      <Flex className="flex-col gap-3">
        <Flex justify={"center"} className="items-center">
          <hr className="w-full border-t border-gray-500" />
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
        </Flex>
        <RadioGroup
          value={selected} onValueChange={setSelected}
        >
          <Radio
            value="buenos-aires"
            className="rounded-full data-[selected=true]:border base"
          >
            Eu posso ser banido?
          </Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>
      </Flex>
      <FaqMessage />
    </Flex>
  </>
  );
}
export function Faq() {

  return (
    <>
      <Title>Ainda tem duvidas ?</Title>
      <FaqRadio />
    </>
  )
}
