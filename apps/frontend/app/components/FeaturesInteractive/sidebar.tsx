import akali from "@/images/akali.jpeg";
import image from "@/images/goldIcon.png";
import star from "@/images/rating-star-red.png";
import logo from "@/images/silverIcon.png";
import { useState } from "react";

export function Sidebar() {
  type SidebarItem = {
    id: number;
    title: string;
    subtitle: string;
    isSelected: boolean;
    image: string;
  };

  const initialSidebarItems: SidebarItem[] = [
    {
      id: 1,
      title: "Visão completa",
      subtitle: "Acompanhe",
      isSelected: true,
      image: akali,
    },
    {
      id: 2,
      title: "Sidebar 2",
      subtitle: "Mini subtitle 2",
      isSelected: false,
      image: star,
    },
    {
      id: 3,
      title: "Content",
      subtitle: "Mini subtitle 3",
      isSelected: false,
      image: image,
    },
    {
      id: 4,
      title: "Contenetetet",
      subtitle: "Mini subtitle 4",
      isSelected: false,
      image: logo,
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [sidebarItems, setSidebarItems] =
    useState<SidebarItem[]>(initialSidebarItems);

  const handleButtonClick = (clickedItem: SidebarItem) => {
    setSelectedImageIndex(clickedItem.id);
    const updatedItems = sidebarItems.map((item) => ({
      ...item,
      isSelected: item.id === clickedItem.id,
    }));
    setSidebarItems(updatedItems);
  };

  return (
    <div className="grid grid-cols-8">
      <div className="col-span-2">
        {sidebarItems.map((option: SidebarItem) => (
          <button
            key={option.id}
            className={`p-10 w-full text-center rounded-none hover:bg-opacity-80 bg-transparent cursor-pointer  ${
              option.isSelected ? "bg-blue-400" : ""
            }`}
            onClick={() => handleButtonClick(option)}
          >
            <h1>{option.title}</h1>
            <p>{option.subtitle}</p>
          </button>
        ))}
      </div>

      <div className="col-span-6 row-span-4">
        <img
          src={sidebarItems[selectedImageIndex - 1]?.image}
          className=""
          alt={`Image ${selectedImageIndex}`}
        />
      </div>
    </div>
  );
}
