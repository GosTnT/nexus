import { Button } from "@/components/ui/button";
import logo from "@/images/icon2.svg";
export function Logo({}) {
  return (
    <>
      <Button variant="link" className="hover:opacity-70 hover:no-underline">
        <img src={logo} className="w-14" alt="regalis-logo" />
      </Button>
    </>
  );
}
