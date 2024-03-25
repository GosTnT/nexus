import { Title } from "@/components/NexusUI/text";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
function FaqMessage() {
  return (
    <Flex className="p-6 bg-neutral-900 w-1/4 ">
      <p>
        A Regalis mantém total anonimato e privacidade dos seus clientes. Nossos
        jogadores de ponta são extremamente confiáveis e jamais enviarão
        mensagens para a lista de amigos da sua conta ou durante o jogo. Além
        disso, nosso aplicativo bloqueia as comunicações no client do jogo para
        garantir ainda mais a privacidade e segurança.
      </p>
    </Flex>
  );
}
function FaqRadio() {
  const faqQuestions = [
    { question: "eu posso ser banido?" },
    { question: "eu posso ser banido?" },
    { question: "eu posso ser banido?" },
    { question: "eu posso ser banido?" },
    { question: "eu posso ser banido?" },
    // Add more message objects as needed
  ];
  const [selected, setSelected] = useState("");

  return (
    <>
      <Flex className="w-full justify-center gap-9 radius">
        <Flex className="flex-col gap-3">
          <Flex justify={"center"} className="items-center">
            <hr className="w-full border-t border-gray-500" />
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </Flex>
          <RadioGroup value={selected} onValueChange={setSelected}>
            {faqQuestions.map((faq, index) => (
              <Radio
                key={index}
                value={faq.question} // Access the message property
                className="rounded-full data-[selected=true]:border base"
              >
                {faq.question} {/* Access the message property */}
              </Radio>
            ))}
          </RadioGroup>
        </Flex>
        <FaqMessage />
      </Flex>
    </>
  );
}
export default function Faq() {
  return (
    <>
      <Title>Ainda tem duvidas ?</Title>
      <FaqRadio />
    </>
  );
}
