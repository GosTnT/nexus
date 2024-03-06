import { Button } from "./components/ui/button";
import { Title, SubText } from "@/components/nexus_components/text";
export function HeroSection() {
  return (
    <>
      <div className="h-[75vh] flex flex-col justify-center items-center">
        <Title>A plataforma líder em ELO Boost</Title>
        <SubText>
          A plataforma Alcance o ranking dos seus sonhos sem esforço<br></br>
          com os nossos serviços de eloboosting
        </SubText>
        <div className="text-xl">
          <Button size="lg">Contrate agora</Button>
        </div>
      </div>
    </>
  );
}

// px-8 py-4 text-xl bg-gradient-to-r from-blue-500 to-blue-900
