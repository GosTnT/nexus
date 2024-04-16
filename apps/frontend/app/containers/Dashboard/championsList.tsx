import { EditChampionDialog } from "./editChampionDialog";
import olaf from "@/images/olaficon.png";
import { Avatar, Flex, Heading } from "@radix-ui/themes";

export function ChampionsList({}) {
  return (
    <div className="col-span-4 col-start-3 row-span-5 row-start-6 justify-center p-8 rounded-3xl bg-zinc-800">
      <Flex direction="column" className="h-full" gap="5">
        <Heading className="text-center" size="7">
          Campeões
        </Heading>
        <ChampionsRender />
      </Flex>
    </div>
  );
}
function ChampionsRender() {
  const championsList = [
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
    { name: "Olaf", image: olaf },
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
