import logo from "@/images/logo.svg";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <>
      <Link className=" hover:opacity-90" to="/" reloadDocument>
        <img src={logo} className="w-14 h-14" alt="regalis-logo" />
      </Link>
    </>
  );
}
