import { Flex, Link } from "@radix-ui/themes";

export function NavbarItems() {
  const links = ["Serviços", "Jogadores", "Premium"];
  return (
    <>
      <Flex gap="9">
        {links.map((link, index) => (
          <Link className="text-white hover:opacity-80" key={index}>
            {link}
          </Link>
        ))}
      </Flex>
    </>
  );
}
