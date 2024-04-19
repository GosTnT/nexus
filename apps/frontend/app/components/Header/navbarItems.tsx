import { Box, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
export function NavbarItems() {
  const links = ["Serviços", "Jogadores", "Premium"];
  return (
    <Box>
      <Flex gap="9" justify="start">
        {links.map((link, index) => (
          <Link to={link} className="hover:opacity-80" key={index}>
            {link}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
