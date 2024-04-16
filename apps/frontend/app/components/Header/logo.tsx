import logo from "@/images/rating-star-red.png";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <>
      <Link className="py-2 px-4 hover:opacity-80" to="/" reloadDocument>
        <img src={logo} className="w-fit" alt="regalis-logo" />
      </Link>
    </>
  );
}
