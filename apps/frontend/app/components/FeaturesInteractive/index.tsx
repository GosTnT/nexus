import { Content } from "@/components/FeaturesInteractive/content";
import { Sidebar } from "@/components/FeaturesInteractive/sidebar";

export default function FeaturesInteractive() {
  return (
    <div className="flex justify-center">
      <div className="w-9/12 p-6 border border-white">
        <Content />
        <Sidebar />
      </div>
    </div>
  );
}
