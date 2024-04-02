import { BoosterCarousel } from "@/components/BoosterCard/boosterCarousel";
import { Title } from "../NexusUI/text";
import "./carousel.css";
export default function BoosterCard() {
  return (
    <>
      <div className="text-center">
        <Title>Veja a opinião de nossos clientes</Title>
      </div>
      {/* <BoosterCards /> */}
      <BoosterCarousel />
    </>
  );
}
