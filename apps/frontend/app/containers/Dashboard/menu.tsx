import logo from "@/images/logo.svg"; // Assuming this is the correct import path for your logo
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { FaBookOpen, FaHome, FaListUl } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const itemsMenu = [
  { icon: logo, link: "/dashboard", text: "Logo", active: false },
  { icon: FaHome, link: "/dashboard/home", text: "Home", active: false },
  { icon: FaListUl, link: "/dashboard/orders", text: "Order", active: true },
  { icon: FaBookOpen, link: "/dashboard/guide", text: "Guide", active: false },
  {
    icon: RiMessage2Fill,
    link: "/dashboard/message",
    text: "Message",
    active: false,
  },
];

export function Menu() {
  const [_, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex z-30 min-w-fit max-w-fit p-2 justify-center row-span-full bg-[#343A46]">
        <Flex direction="column" pb="6" justify="between" align="center">
          <Flex direction="column" gap="8" align="center">
            {itemsMenu.map((item, index) => (
              <div key={index} onClick={() => handleItemClick(index)}>
                <Link to={item.link}>
                  {item.icon === logo ? (
                    <img
                      src={item.icon}
                      alt={item.text}
                      className={`min-w-12 min-h-12 aspect-square hover:opacity-80 `}
                    />
                  ) : (
                    <item.icon
                      className={`text-3xl hover:cursor-pointer fill-gray-400 hover:fill-gray-200`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </Flex>
          <FaGear className="text-3xl hover:cursor-pointer fill-gray-400 hover:fill-gray-200" />
        </Flex>
      </div>
    </>
  );
}
