import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import logo from '../img/logo.jpg'
import { RxPerson } from "react-icons/rx";
import { Tittle } from "./my_components";

const links = ["Serviços", "Jogadores", "Premium"];

export function NavigationMenuDemo() {
  return (
    <>
      <header className="flex justify-around items-center p-3">
        <div className={`${navigationMenuTriggerStyle()} cursor-pointer gap-2 self-start`}>
          <img src={logo} className="w-14" alt="regalis-logo" />
          <Tittle tag="h2" text="Regalis Boost" />
        </div>
        <a href="#">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </a>

        <div className={`${navigationMenuTriggerStyle()} gap-1 cursor-pointer`}>
          <RxPerson className="text-primary text-xl" />
          {/* <p className="text-primary">Login</p> */}
        </div>
      </header>
    </>
  )

    ;
}
