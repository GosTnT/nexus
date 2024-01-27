import { Button } from "./components/ui/button"

export function HeroSection() {
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        A plataforma lider em elobost
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4 text-lg">
        Alcance o ranking dos seus sonhos sem esforço com os nossos seguros serviços de LoL Boosting, Coaching & Contas.

      </p>
      <div className="flex justify-center gap-4 text-xl">
        <Button size="lg">
          Rank up
        </Button>
        <Button size="lg" variant="outline">
          Buy Coach
        </Button>
      </div>
    </div>
  )
}
