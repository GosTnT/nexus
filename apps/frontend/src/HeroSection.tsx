import { Button } from "./components/ui/button";
import './globals.css';
export function HeroSection() {
  return (
    <>
      <div className="my_width flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold tracking-tight text-title mb-6">
          A plataforma líder em ELO Boost
        </h1>
        <p className="text-lg leading-7 text-subtext_color mb-6">
          Alcance o ranking dos seus sonhos sem esforço<br></br>
          com a nossa plataforma de ELO Boost
        </p>
        <div className="text-xl">
          <Button size="lg" className="px-8 py-4 text-xl bg-gradient-to-r from-blue-500 to-blue-900">
            Contrate agora
          </Button>
        </div>
      </div>

    </>
  )
}
