import { Menu } from "./menu";
import { Section } from "./section";

export default function Dashboard() {
  return (
    <>
      <div className="grid relative grid-cols-12 gap-7 pr-7 grid-rows-12 h-[100vh] bg-zinc-950">
        <Menu />
        <Section />

        {/* <Chat /> */}
      </div>
    </>
  );
}
