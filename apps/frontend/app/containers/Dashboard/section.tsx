import { Chat } from "@/containers/Dashboard/chat";
import bottom from "@/images/icons/roles/position-bottom.svg";
import jungle from "@/images/icons/roles/position-jungle.svg";
import olaf from "@/images/olaficon.png";

import { Avatar, Flex, Heading } from "@radix-ui/themes";
import { OrderInfo } from "./orderInfos";

export function Section() {
  const championsList = [
    { name: "Olaf", image: olaf },
    { name: "Ashe", image: olaf },

    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    { name: "Lux", image: olaf },
    // Adicione mais campeões conforme necessário
  ];

  const roles = [
    {
      label: "Roles",
      images: [bottom, jungle], // Array of images for "Roles" option
    },
  ];
  return (
    <>
      <div className="col-start-3  p-12 row-start-2 col-span-6 row-span-4 bg-zinc-800 rounded-3xl">
        <Flex direction="column" gap="5">
          <Flex>
            <Heading size="8"> Serviço Solo</Heading>
          </Flex>
          <OrderInfo />
        </Flex>
      </div>

      <div className="col-start-3 p-12  row-start-6 col-span-2 row-span-4 bg-zinc-800 rounded-3xl aspect-square">
        <Flex direction="column" gap="6">
          <Heading>Campeões</Heading>
          <div>
            {championsList.map((champion, index) => (
              <Avatar
                key={index}
                fallback={champion.image}
                src={champion.image}
              />
            ))}
          </div>
        </Flex>
      </div>
      <div className="p-12 col-start-5 row-start-6 col-span-2 row-span-4 bg-zinc-800 rounded-3xl">
        <Heading className="text-center">Adicionais</Heading>
      </div>
      <div className="col-start-7 row-start-6 col-span-2 row-span-4 bg-zinc-800 rounded-3xl"></div>
      <div className="col-start-9 col-span-4 row-start-2 row-span-2 bg-zinc-800 rounded-3xl"></div>
      <Chat />
    </>
  );
}
