import { AddonsChosed } from "@/containers/Dashboard/addonsChosed";
import { BoosterProfile } from "@/containers/Dashboard/boosterProfile";
import { ChampionsList } from "@/containers/Dashboard/championsList";
import { DashboardIcons } from "@/containers/Dashboard/dashboardIcons";
import { FlashPosition } from "@/containers/Dashboard/flashSpell";
import { OrderID } from "@/containers/Dashboard/orderID";
import { StaticOrderInfo } from "@/containers/Dashboard/staticOrderInfo";
import { TalkBooster } from "@/containers/Dashboard/talkBooster";
export function DashboardSections() {
  return (
    <>
      <div className="col-start-3 row-start-2 col-span-6">
        <OrderID />
      </div>

      <div className="flex gap-4 col-start-9 row-start-2 col-span-1 ">
        <DashboardIcons />
      </div>
      <div className=" col-start-3 col-span-4 row-start-3 row-span-2 p-8 rounded-sm bg-[#343A46]">
        <StaticOrderInfo />
      </div>

      <div className=" col-start-3 col-span-2  p-8 row-start-5 row-span-3  rounded-2xl bg-[#343A46]">
        <ChampionsList />
      </div>
      <div className=" col-start-5 col-span-2 row-start-5 row-span-3 p-8 rounded-2xl bg-[#343A46] ">
        <AddonsChosed />
      </div>

      <div className=" col-start-7 col-span-3 p-8  row-start-3 row-end-4 rounded-3xl bg-[#343A46]"></div>
      <div className=" col-start-7 col-span-3 row-start-4 row-span-2 rounded-3xl bg-[#343A46]">
        <BoosterProfile />
      </div>

      <div className=" col-start-7 col-span-3 p-8 row-start-6 rounded-3xl bg-[#343A46]">
        <TalkBooster />
      </div>

      <div className=" col-start-7 col-span-3 p-8  row-start-7 rounded-3xl bg-[#343A46]">
        <FlashPosition />
      </div>
      {/* <div> */}
      {/*   <PauseOrder /> */}
      {/* </div> */}
      {/* <div> */}
      {/*   <Heading>Extender a ordem</Heading> */}
      {/*   <Button>Extender</Button> */}
      {/* </div> */}
      {/* <div> */}
      {/*   <ChatOff /> */}
      {/* </div> */}
      {/* <div> */}
      {/*   <Heading> Booster Favorito</Heading> */}
      {/*   <Button>Seleecionar booster</Button> */}
      {/* </div> */}
    </>
  );
}
