import gold from "@/images/goldIcon.png";
import silver from "@/images/silverIcon.png";
import { Flex, Heading, Text } from "@radix-ui/themes";
export function DashboardRank() {
  const infosOptions = [
    {
      label: "Elo atual",
      image: silver,
      division: "IV",
      ranking: "Prata 4",
      lp: 0,
    },
    {
      label: "Elo desejado",
      image: gold,
      division: "IV",
      ranking: "Ouro 2",
      lp: 30,
    },
  ];
  return (
    <>
      {infosOptions.map((option, index) => (
        <Flex key={index} direction="column" justify="center" align="center">
          {/* Rendering image if available */}
          {option.image && <img src={option.image} alt={option.label} />}

          <Heading size="3" weight="bold" className="text-zinc-500">
            {option.label}
          </Heading>

          <Flex align="center" justify="center" gap="2">
            <Text size="2" weight="light" className="text-zinc-500">
              {option.ranking}
              {"  "}
            </Text>
            <Text className="text-red-400" size="2" weight="light">
              {option.lp + "LP"}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  );
}
