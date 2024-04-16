import { StaticOrderInfo } from "@/containers/Dashboard/staticOrderInfo";
import { Flex, Heading } from "@radix-ui/themes";
import { ChampionsList } from "./championsList";

export function Section() {
  return (
    <>
      <div className="col-span-6 col-start-3 row-span-4 row-start-2 p-8 rounded-3xl bg-zinc-800">
        <Heading size="8" className="p-3">
          {" "}
          Serviço Solo
        </Heading>
        <StaticOrderInfo />
      </div>

      <ChampionsList />
      <div className="col-span-4 col-start-7 row-span-4 row-start-6 p-12 rounded-3xl bg-zinc-800">
        <Heading className="text-center">Adicionais</Heading>
        <Flex></Flex>
      </div>
      <div className="col-span-4 col-start-9 row-span-2 row-start-2 rounded-3xl bg-zinc-800">
        <Flex></Flex>
      </div>
    </>
  );
}
