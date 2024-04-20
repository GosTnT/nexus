import { Button } from "@/components/ui/button";
import { Flex, Heading } from "@radix-ui/themes";

import { FaCheckCircle } from "react-icons/fa";
export function AddonsChosed() {
  const Addons = [
    "Boost premium",
    "Mono campeão",
    "Correção de pdl",
    "Ordem prioritária",
    "Stream dos jogos ",
  ];
  return (
    <>
      <Flex direction="column" className="h-full" justify="between">
        <div>
          <Heading className="text-center text-zinc-400" weight="medium" mb="3">
            Adicionais
          </Heading>

          <Flex direction="column" gap="2" justify="between">
            {Addons.map((addon, index) => (
              <Flex direction="column" gap="1" justify="center">
                <Flex gap="3" align="center">
                  <FaCheckCircle className=" p-0 m-0 fill-primary-400 text-xl" />
                  <Heading size="4" weight="medium" key={index} className="">
                    {addon}
                  </Heading>
                </Flex>

                {/* <Separator className="bg-zinc-500" size="4" /> */}
              </Flex>
            ))}
          </Flex>
        </div>

        <Button variant="ghost" className="border border-foreground">
          Adicionar
        </Button>
      </Flex>
    </>
  );
}
