import { Title } from "@/components/NexusUI/text";
import { Text } from "@radix-ui/themes";
export function Content() {
  return (
    <div className="w-full text-center p-2 mb-3 border border-green-400">
      <Title>Adaptado exclusivamente para você</Title>
      <Text
        size="3"
        className="text-zinc-300 opacity-90 text-wrap tracking-wide-[0.010em]"
      >
        Reconhecemos a singularidade de cada cliente
        <br />
        por isso oferecemos um serviço premium.
      </Text>
    </div>
  );
}
