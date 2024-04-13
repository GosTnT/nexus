import { useState } from "react";

type ValidationResult = {
  isValid: boolean;
  username: string;
  tagline: string;
};

export function useValidation() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tagline, setTagline] = useState<string>("");

  const validateInput = (data: string): ValidationResult => {
    // Dividir a entrada em username e tagline
    const parts = data.split("#");
    const usernamePart = parts[0].trim(); // Remover espaços em branco em excesso
    const taglinePart = parts.slice(1).join("#").trim(); // Unir partes restantes da tagline e remover espaços em branco em excesso

    // Verificar se cada parte do username e da tagline contém pelo menos 3 letras
    const isValidUsername = usernamePart.length > 2;
    const isValidTagline = taglinePart.length > 2; // Verificar se tagline não é uma string vazia

    // Atualizar os estados de username e tagline
    setUsername(usernamePart);
    setTagline(taglinePart);

    // Verificar se ambas as partes são válidas
    const isValidInput = isValidUsername && isValidTagline;

    // Atualizar o estado de validação
    setIsValid(isValidInput);

    // Retornar o resultado da validação juntamente com username e tagline
    return {
      isValid: isValidInput,
      username: usernamePart,
      tagline: taglinePart,
    };
  };

  const updateInputState = (data: string): void => {
    // Realizar a validação do input
    validateInput(data);
  };

  return { validateInput, isValid, username, tagline, updateInputState };
}
