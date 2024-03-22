import { SubText, Title } from "@/components/NexusUI/text";

export function Content() {
  return (
    <div className="w-full text-center p-2 mb-3 border border-green-400">
      <Title>Adaptado exclusivamente para você</Title>
      <SubText>
        Reconhecemos a singularidade de cada cliente
        <br />
        por isso oferecemos um serviço premium.
      </SubText>
    </div>
  );
}
