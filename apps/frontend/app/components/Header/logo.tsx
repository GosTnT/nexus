import { Button } from "@/components/ui/button";
import logo from "@/images/icon2.svg";
export function Logo({}) {
  return (
    <>
      <Button
        variant="link"
        className="opacity-90 hover:opacity-100  hover:no-underline"
      >
        <img src={logo} className="w-14" alt="regalis-logo" />
      </Button>
    </>
  );
}
