import { Input } from "@/components/ui/input";
import { useRanking } from "@/containers/Checkout/hooks/useRanking";
import { useValidation } from "@/containers/Checkout/hooks/useValidation";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export function CheckoutRank() {
  const { isValid, validateInput, username, tagline } = useValidation(); // Use o hook useValidation
  const { ranking, updateRankingState } = useRanking(); // Use o hook useRanking

  const [inputValue, setInputValue] = useState(""); // Estado simplificado para a entrada

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  useEffect(() => {
    validateInput(inputValue);
    if (isValid) {
      updateRankingState(username, tagline);
      console.log("rankigUpdated");
    }
  }, [inputValue]);
  return (
    <Flex
      direction="column"
      justify="between"
      className="h-full border border-red-500"
      p="7"
    >
      <Flex direction="column" gap="3">
        <Heading
          size="5"
          weight="medium"
          className="text-center text-title font-general tracking-wide-[.010em]"
        >
          Insira seu nome de invocador
        </Heading>
        <Text size="2" color="gray">
          Nós preencheremos seu elo automaticamente
        </Text>
      </Flex>
      <Flex justify="center" align="center">
        <Input
          type="text"
          value={inputValue} // Usar o estado local do input
          onChange={handleChange}
        />
      </Flex>
      {ranking && (
        <Flex direction="column" gap="2">
          <Text>Rank: {ranking.rank}</Text>
          <Text>Divisão: {ranking.division}</Text>
          <Text>PDL: {ranking.pdl}</Text>
        </Flex>
      )}
    </Flex>
  );
}
