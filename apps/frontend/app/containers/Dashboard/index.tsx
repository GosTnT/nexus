import { DashboardSections } from "@/containers/Dashboard/dashboardSections";
import { Menu } from "./menu";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-[10%,350px,350px,150px,150px,1fr] grid-rows-[70px,300px,150px,150px,1fr,1fr,1fr]    gap-7  h-[100vh] w-[100vw] bg-background dark ">
        <Menu />
        <DashboardSections />

        {/* <Chat /> */}
      </div>
    </>
  );
}
