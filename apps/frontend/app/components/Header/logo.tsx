import { Button } from "@/components/ui/button";
import logo from "@/images/rating-star-red.png";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <>
      <Link to="/">
        <Button
          variant="link"
          className="opacity-90 hover:opacity-100  hover:no-underline"
        >
          <img src={logo} className="w-fit" alt="regalis-logo" />
        </Button>
      </Link>
    </>
  );
}
