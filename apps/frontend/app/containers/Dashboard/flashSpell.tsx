import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import flash from "@/images/icons/summoner_flash.png";
import { Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
export function FlashPosition() {
  const [position, setPosition] = useState("F");
  return (
    <>
      <Flex justify="between" align="center" className="h-full w-full">
        <Flex gap="3" align="center">
          <Avatar className="h-13">
            <AvatarImage className="h-13" src={flash} alt="flash" />
          </Avatar>

          <Heading size="3">Flash</Heading>
        </Flex>
        <Flex align="center" justify="center" gap="2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="destructive"
                className="bg-red-500 border border-foreground-400 p-6 aspect-square"
              >
                {position}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
              <DropdownMenuLabel>Posição do flash</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="D">D</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="F">F</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      </Flex>
    </>
  );
}
