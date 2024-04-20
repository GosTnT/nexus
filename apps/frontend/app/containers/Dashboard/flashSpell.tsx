import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import flash from "@/images/icons/summoner_flash.png";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
export function FlashPosition() {
  const [position, setPosition] = useState("F");
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Flex
            align="center"
            className="w-[68px] h-[90px]"
            justify="center"
            direction="column"
            gap="4"
          >
            {/* <Avatar className=" fill-zinc-700"> */}
            {/*   <AvatarImage */}
            {/*     className="text-2xl fill-zinc-700" */}
            {/*     src={flash} */}
            {/*     alt="Image" */}
            {/*   /> */}
            {/*   <AvatarFallback>JD</AvatarFallback> */}
            {/* </Avatar> */}
            <img src={flash} className="w-8" />
            <Button
              variant="ghost"
              className=" hover:bg-transparent p-3 rounded-sm border border-zinc-500 aspect-square  hover:border-blue-601"
            >
              <MdModeEdit className="w-5 h-5" />
            </Button>
          </Flex>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="D">D</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="F">F</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
