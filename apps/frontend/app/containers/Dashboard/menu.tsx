import { Flex } from "@radix-ui/themes";
import { FaBookOpen, FaHome, FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "@/images/logo.svg";
import { RiMessage2Fill } from "react-icons/ri";
const menuItems = [
  { icon: logo, link: "/" },
  { text: "Home", icon: FaHome, link: "/dashboard/home" },
  { text: "Order", icon: FaListUl, link: "/order" },
  { text: "Guide", icon: FaBookOpen, link: "/guide" },
  { text: "Guide", icon: RiMessage2Fill, link: "/message" },
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
            className="w-14 h-14 hover:opacity-80" // Adjust the class according to your styling needs
          />
        ) : (
          <item.icon className="text-4xl hover:cursor-pointer fill-gray-400 hover:fill-gray-200" />
        )}
      </Link>
    </div>
  ));
};
export function Menu() {
  return (
    <>
      <div className="flex z-30 col-span-1 justify-center row-span-12 bg-zinc-800">
        <Flex direction="column" gap="8" display="inline-flex" align="center">
          {renderMenuItems()}
        </Flex>
      </div>
    </>
  );
}
