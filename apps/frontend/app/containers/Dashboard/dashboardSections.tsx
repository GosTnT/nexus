import { AddonsChosed } from "@/containers/Dashboard/addonsChosed";
import { BoosterProfile } from "@/containers/Dashboard/boosterProfile";
import { ChampionsList } from "@/containers/Dashboard/championsList";
import { ChatOff } from "@/containers/Dashboard/chatOff";
import { CustomerRoles } from "@/containers/Dashboard/customerRoles";
import { DashboardIcons } from "@/containers/Dashboard/dashboardIcons";
import { FlashPosition } from "@/containers/Dashboard/flashSpell";
import { OrderID } from "@/containers/Dashboard/orderID";
import { StaticOrderInfo } from "@/containers/Dashboard/staticOrderInfo";
import { TalkBooster } from "@/containers/Dashboard/talkBooster";

import { Flex, Separator } from "@radix-ui/themes";
export function DashboardSections() {
  return (
    <>
      <Flex
        justify="between"
        align="end"
        className=" w-full col-start-2 col-span-4 "
      >
        <OrderID />

        <Flex gap="5">
          <DashboardIcons />
        </Flex>
      </Flex>

      <div className="  col-start-2 col-span-2  row-start-2 row-span-1 p-8 rounded-sm bg-[#343A46]">
        <StaticOrderInfo />
      </div>

      <div className=" col-start-2 col-span-1  p-8 row-start-3 row-span-2 rounded-2xl bg-[#343A46]">
        <ChampionsList />
      </div>
      <div className=" col-start-3 row-start-3 row-span-2  p-8 rounded-2xl bg-[#343A46] ">
        <AddonsChosed />
      </div>

      <div className=" col-start-4 p-8 col-span-2 row-start-2 row-span-1 rounded-3xl  bg-[#343A46]">
        <BoosterProfile />
      </div>

      <div className=" col-start-4 col-span-2 p-8 row-start-3 rounded-3xl bg-[#343A46]">
        <TalkBooster />
      </div>

      <div className="col-start-4 col-span-2  p-8 row-start-4 rounded-3xl bg-[#343A46]">
        <Flex align="center" justify="center" gap="3">
          <CustomerRoles />
          <Separator
            orientation="vertical"
            size="3"
            className="text-zinc-500 "
          />
          <FlashPosition />

          <Separator
            orientation="vertical"
            size="3"
            className="text-zinc-500 "
          />
          <ChatOff />
        </Flex>
      </div>
      {/* <div> */}
      {/*   <PauseOrder /> */}
      {/* </div> */}
      {/* <div> */}
      {/*   <Heading> Booster Favorito</Heading> */}
      {/*   <Button>Seleecionar booster</Button> */}
      {/* </div> */}
    </>
  );
}
