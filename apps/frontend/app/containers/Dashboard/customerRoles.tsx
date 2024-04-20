import { Button } from "@/components/ui/button";
import adc from "@/images/icons/roles/position-bottom-light.svg";
import jungle from "@/images/icons/roles/position-jungle-light.svg";

import { Flex } from "@radix-ui/themes";
import { MdModeEdit } from "react-icons/md";
interface CustomerRole {
  name: string;
  image: string;
}

const customerRoles: CustomerRole[] = [
  {
    name: "ADC",
    image: adc,
  },
  {
    name: "Jungle",
    image: jungle,
  },
];

export function CustomerRoles() {
  return (
    <>
      <Flex direction="column" align="center" justify="center" gap="4">
        <Flex>
          {customerRoles.map((role, index) => (
            <div key={index}>
              <img src={role.image} alt={role.name} />
            </div>
          ))}
        </Flex>
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
