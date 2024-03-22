import { Heading, Text } from "@radix-ui/themes";
export function Sidebar() {
  // Define an array of sidebar items
  const sidebarItems = [
    {
      title: "Visão completa",
      subtitle: "Acompanhe em tempo real o progresso do pedido",
    },
    { title: "Sidebar 2", subtitle: "Mini subtitle 2" },
    { title: "Content", subtitle: "Mini subtitle 3" },
    { title: "Content", subtitle: "Mini subtitle 4" },
  ];

  return (
    <div className="flex flex-row w-full h-fit">
      <div className="flex flex-row w-full h-fit">
        <div className="flex flex-col w-2/6 text-opacity-80">
          {/* Iterate over the sidebar items array and render each item */}
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`bg-features flex-1 p-4 ${index === 0 ? "rounded-tl-2xl" : ""}`}
            >
              <Heading size="3" mb="1">
                {item.title}
              </Heading>
              <Text size="2" mt="4">
                {item.subtitle}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
