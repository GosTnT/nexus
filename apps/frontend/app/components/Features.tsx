import { SubText, Title } from "@/components/text";
import { Heading, Text } from "@radix-ui/themes";

function Sidebar() {
  // Define an array of sidebar items
  const sidebarItems = [
    { title: "Visão completa", subtitle: "Acompanhe em tempo real o progresso do pedido" },
    { title: "Sidebar 2", subtitle: "Mini subtitle 2" },
    { title: "Content", subtitle: "Mini subtitle 3" },
    { title: "Content", subtitle: "Mini subtitle 4" },
  ];

  return (
    <div className="flex flex-col w-2/6 text-opacity-80">
      {/* Iterate over the sidebar items array and render each item */}
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`bg-features flex-1 p-4 ${index === 0 ? "rounded-tl-2xl" : ""}`}
        >
          <Heading size="3" mb="1">{item.title}</Heading>
          <Text size="2" mt="4">{item.subtitle}</Text>
        </div>
      ))}
    </div>
  );
}
export function Features() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-9/12 p-6 border border-white">
          <div className="w-full text-center p-2 mb-3 border border-green-400">
            <Title>Adaptado exclusivamente para você</Title>
            <SubText>
              Reconhecemos a singularidade de cada cliente
              <br />
              por isso oferecemos um serviço premium.
            </SubText>
          </div>

          <div className="flex flex-row w-full h-fit">
            <Sidebar />
            <div className="w-full h-96 bg-red-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
