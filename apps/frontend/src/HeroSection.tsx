import { Button } from "./components/ui/button";
import { Text } from "@radix-ui/themes";
import Heading from '@/components/nexus_components/text'
import './globals.css';
export function HeroSection() {
  return (
    <>
      <div className="h-[75vh] flex flex-col justify-center items-center">
        <Heading>
          A plataforma líder em ELO Boost
        </Heading>
        <Text size="3" mb="3" className="text-subtext">
          Alcance o ranking dos seus sonhos sem esforço<br></br>
          com a nossa plataforma de ELO Boost
        </Text>
        <div className="text-xl">
          <Button size="lg" className="px-8 py-4 text-xl bg-gradient-to-r from-blue-500 to-blue-900">
            Contrate agora
          </Button>
        </div>
      </div>

    </>
  )
}
