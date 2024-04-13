import { Button } from "@/components/ui/button";
import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

export function DetailsAddons() {
  // Type alias for clarity
  type AddonOption = {
    id: number;
    text: string;
    percentage: string;
    isSelected: boolean;
  };

  const [addonsOptions, setAddonsOptions] = useState<AddonOption[]>([
    {
      id: 1,
      text: "Premium Boosting",
      percentage: "+30%",
      isSelected: false,
    },
    {
      id: 2,
      text: "Accept privacy policy",
      percentage: "+50%",
      isSelected: false,
    },
    {
      id: 3,
      text: "Subscribe to newsletter",
      percentage: "+10%",
      isSelected: false,
    },
    {
      id: 4,
      text: "Agree to receive promotional emails",
      percentage: "+25%",
      isSelected: false,
    },
    {
      id: 5,
      text: "Agree to receive promotional emails",
      percentage: "+25%",
      isSelected: false,
    },
    {
      id: 6,
      text: "Agree to receive promotional emails",
      percentage: "+25%",
      isSelected: false,
    },
  ]);

  const handleButtonClick = (option: AddonOption) => {
    // Criando uma cópia do array de opções selecionadas
    const updatedOptions = addonsOptions.map((addonOption) =>
      addonOption.id === option.id
        ? { ...addonOption, isSelected: !addonOption.isSelected }
        : addonOption,
    );

    setAddonsOptions(updatedOptions);
  };

  return (
    <Flex direction="column" gap="3">
      {addonsOptions.map((option: AddonOption) => (
        <Button
          key={option.id}
          variant="outline"
          size="sm"
          className={`flex gap-4 rounded-none py-5 hover:bg-transparent bg-transparent cursor-pointer border ${
            option.isSelected ? "border-primary-600" : ""
          }`}
          onClick={() => handleButtonClick(option)}
        >
          <Text>{option.text}</Text>
          <Text>{option.percentage}</Text>
        </Button>
      ))}
    </Flex>
  );
}
