import BoosterCard from "@/components/BoosterCard";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import { Checkout } from "@/containers/Checkout/checkout";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <Checkout />
      <Faq />
      <BoosterCard />
    </>
  );
}
