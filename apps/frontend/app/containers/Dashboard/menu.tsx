import logo from "@/images/logo.svg";
import { Flex } from "@radix-ui/themes";
import { FaBookOpen, FaHome, FaListUl } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { FaGear } from "react-icons/fa6";
const itemsMenu = [
  { icon: logo, link: "/" },
  { text: "Home", icon: FaHome, link: "/dashboard/home" },
  { text: "Order", icon: FaListUl, link: "/order" },
  { text: "Guide", icon: FaBookOpen, link: "/guide" },
  { text: "Guide", icon: RiMessage2Fill, link: "/message" },
];

// Função para renderizar os itens do menu
const renderMenuItems = () => {
  return itemsMenu.map((item, index) => (
    <div key={index}>
      <Link to={item.link}>
        {item.icon === logo ? (
          <img
            src={item.icon}
            alt="Logo"
            className="min-w-12 min-h-12 aspect-square hover:opacity-80" // Adjust the class according to your styling needs
          />
        ) : (
          <item.icon className="text-3xl hover:cursor-pointer fill-gray-400 hover:fill-gray-200" />
        )}
      </Link>
    </div>
  ));
};
export function Menu() {
  return (
    <>
      <div className="flex z-30 min-w-fit max-w-fit p-4 justify-center row-span-12 bg-[#343A46]">
        <Flex direction="column" pb="6" justify="between" align="center">
          <Flex direction="column" gap="8" align="center">
            {renderMenuItems()}
          </Flex>
          <FaGear className="text-3xl hover:cursor-pointer fill-gray-400 hover:fill-gray-200" />
        </Flex>
      </div>
    </>
  );
}
