import { Flex } from "@radix-ui/themes";
import { FaBookOpen, FaHome, FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "@/images/logo.svg";
const menuItems = [
  { icon: logo, link: "/" },
  { text: "Home", icon: FaHome, link: "/dashboard/home" },
  { text: "Home", icon: FaHome, link: "/dashboard/home" },
  { text: "Order", icon: FaListUl, link: "/order" },
  { text: "Guide", icon: FaBookOpen, link: "/guide" },
];

// Função para renderizar os itens do menu
const renderMenuItems = () => {
  return menuItems.map((item, index) => (
    <div key={index}>
      <Link to={item.link}>
        {item.icon === logo ? (
          <img
            src={item.icon}
            alt="Logo"
            className="w-20 h-20" // Adjust the class according to your styling needs
          />
        ) : (
          <item.icon className="fill-gray-400 text-5xl hover:fill-gray-200 hover:cursor-pointer" />
        )}
      </Link>
    </div>
  ));
};
export function Menu() {
  return (
    <>
      <div>
        <div className=" col-span-2 row-start-2 col-start-1 row-span-10 z-10 relative">
          <Flex
            direction="column"
            gap="8"
            pt="7"
            display="inline-flex"
            align="center"
            className="h-[100vh] bg-zinc-800"
          >
            {renderMenuItems()}
          </Flex>
        </div>
      </div>
    </>
  );
}
