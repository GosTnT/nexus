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
  const [position, setPosition] = useState("bottom");
  return (
    <>
      <Flex direction="column" justify="center" align="center">
        <Avatar className="h-13">
          <AvatarImage className="h-13" src={flash} alt="flash" />
        </Avatar>

        <Heading size="3" weight="bold" className="text-zinc-500">
          Flash
        </Heading>
        <Flex align="center" justify="center" gap="2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="border border-zinc-500">
                Open
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      </Flex>
    </>
  );
}
