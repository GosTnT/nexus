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

          <Flex direction="column" gap="3">
            {Addons.map((addon, index) => (
              <Flex gap="2" align="center">
                <FaCheckCircle className="  fill-primary-400" />

                <Heading size="4" weight="medium" key={index}>
                  {addon}
                </Heading>
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
