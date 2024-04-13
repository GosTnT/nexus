import { useEffect, useState } from "react";

type Ranking = {
  rank: string;
  division: string;
  pdl: number;
};

export function useRanking() {
  const [ranking, setRanking] = useState<Ranking | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:3333/ws");

    newSocket.onopen = () => {
      console.log("Conexão WebSocket aberta");
    };

    newSocket.onmessage = (event) => {
      if (event.data == "NAO RANQUEADO") {
        return;
      }
      const jsonData = JSON.parse(event.data);
      const { rank, division, pdl } = jsonData;
      const newRanking: Ranking = { rank, division, pdl };
      setRanking(newRanking);
    };

    newSocket.onerror = (error) => {
      console.error("Erro na conexão WebSocket:", error);
    };

    newSocket.onclose = () => {
      console.log("Conexão WebSocket fechada");
    };

    setSocket(newSocket);

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  const updateRankingState = (username: string, tagline: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const jsonData = JSON.stringify({
        username: username,
        tagline: tagline,
      });
      socket.send(jsonData);
    } else {
      console.error(
        "Erro ao enviar mensagem: conexão WebSocket não está aberta",
      );
    }
  };

  return { ranking, updateRankingState };
}
