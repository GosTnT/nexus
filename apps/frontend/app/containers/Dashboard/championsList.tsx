import olaf from "@/images/olaficon.png";
import { Avatar, Flex, Heading } from "@radix-ui/themes";
import { EditChampionDialog } from "./editChampionDialog";

export function ChampionsList({}) {
  return (
    <Flex direction="column" className="h-full" gap="3">
      <Heading className="text-center text-zinc-400" weight="medium">
        Campeões
      </Heading>
      <ChampionsRender />
    </Flex>
  );
}
function ChampionsRender() {
  const championsList = [
    { name: "Olaf", image: olaf },

    // Adicione mais campeões conforme necessário
  ];
  return (
    <Flex direction="column" justify="between" className="h-full">
      <div className="">
        {championsList.map((champion) => (
          <Avatar
            fallback={champion.image}
            src={champion.image}
            className="w-8 h-8"
          />
        ))}
      </div>
      <EditChampionDialog />
    </Flex>
  );
}
