import { DashboardSections } from "@/containers/Dashboard/dashboardSections";
import { Menu } from "./menu";

export default function Dashboard() {
  return (
    <>
      <div className=" h-[100vh]">
        <div className="grid grid-cols-[1fr,1fr,260px,90px,100px,150px,100px,80px,130px,1fr] grid-rows-[30px,80px,80px,180px,75px,110px,100px,repeat(2,1fr)]    gap-7  h-full w-full">
          <Menu />
          <DashboardSections />

          {/* <Chat /> */}
        </div>
      </div>
    </>
  );
}
