import { Button } from "@/components/ui/button";
import chatofficon from "@/images/icons/nochat.svg";
import { Flex } from "@radix-ui/themes";
import { MdModeEdit } from "react-icons/md";
export function ChatOff({}) {
  return (
    <>
      <Flex
        direction="column"
        className="w-[68px] h-[90px]"
        align="center"
        justify="center"
        gap="4"
      >
        <img src={chatofficon} className="fill-zinc-500 text-zinc-500 w-8 " />
        <Button
          variant="ghost"
          className=" hover:bg-transparent p-3 aspect-square rounded-sm border border-zinc-500 hover:border-blue-600 "
        >
          <MdModeEdit className="w-5 h-5" />
        </Button>
      </Flex>
    </>
  );
}
