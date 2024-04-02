import { Sidebar } from "@/components/FeaturesInteractive/sidebar";
import { Flex, Heading, Text } from "@radix-ui/themes";
export default function FeaturesInteractive() {
  return (
    <div className="shadow-xl shadow-gray-500/10 ">
      <Flex justify="center">
        <Flex direction="column" gap="4" className="justify-between">
          <Heading size="8">Adaptado exclusivamente para você</Heading>
          <Text size="3" className="text-center">
            Reconhecemos a singularidade de cada cliente
            <br /> por isso oferecemos um serviço premium.
          </Text>
        </Flex>
      </Flex>
      <Sidebar />
    </div>
  );
}
