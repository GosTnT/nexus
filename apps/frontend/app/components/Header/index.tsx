import { Login } from "@/components/Header/login";
import { Logo } from "@/components/Header/logo";
import { NavbarItems } from "@/components/Header/navbarItems";
import { Flex } from "@radix-ui/themes";
export default function Header() {
  return (
    <>
      <Flex justify="between" align="center">
        <Logo />
        <NavbarItems />

        <Login />
      </Flex>
    </>
  );
}
