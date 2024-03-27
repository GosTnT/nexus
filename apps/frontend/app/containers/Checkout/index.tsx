import BoosterCard from "@/components/BoosterCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Checkout } from "@/containers/Checkout/checkout";

export default function CheckoutPage() {
  return (
    <>
      <Header />;
      <Checkout />
      <BoosterCard />
      <Footer />
    </>
  );
}
