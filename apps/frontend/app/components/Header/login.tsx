import { Button } from "@/components/ui/button";
import { RxPerson } from "react-icons/rx";
export function Login() {
  return (
    <>
      <Button variant="link">
        <RxPerson className="text-primary text-xl opacity-80 hover:opacity-100 hover:no-underline " />
      </Button>
    </>
  );
}
