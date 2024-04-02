import logo from "@/images/rating-star-red.png";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <>
      <Link className="hover:opacity-80 px-4 py-2" to="/" reloadDocument>
        <img src={logo} className="w-fit" alt="regalis-logo" />
      </Link>
    </>
  );
}
