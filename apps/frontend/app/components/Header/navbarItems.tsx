import { Button } from "@/components/ui/button";
import { Flex } from "@radix-ui/themes";

export function NavbarItems() {
  const links = ["Serviços", "Jogadores", "Premium"];
  return (
    <>
      <Flex>
        {links.map((link, index) => (
          <Button
            className="text-title opacity-90 hover:opacity-100  hover:no-underline"
            variant="link"
            key={index}
          >
            {link}
          </Button>
        ))}
      </Flex>
    </>
  );
}
