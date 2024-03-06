import { SubText, Title, SubTitle } from "@/components/nexus_components/text";
import { Heading } from "@radix-ui/themes";

function Sidebar() {
  // Define an array of sidebar items
  const sidebarItems = [
    { title: "Sidebar 1", subtitle: "Mini subtitle 1" },
    { title: "Sidebar 2", subtitle: "Mini subtitle 2" },
    { title: "Content", subtitle: "Mini subtitle 3" },
    { title: "Content", subtitle: "Mini subtitle 4" },
  ];

  return (
    <div className="flex flex-row">
      <div className="w-44">
        {/* Iterate over the sidebar items array and render each item */}
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-200 p-4 ${index === 0 ? "rounded-tr-2xl" : ""}`}
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function Features() {
  return (
    <>
      <Heading size="9">TESTE</Heading>
      <div className="flex justify-center">
        <div className="w-9/12 p-6">
          <div className="w-full text-center p-2 mb-3">
            <Title>Adaptado exclusivamente para você</Title>
            <SubText>
              Reconhecemos a singularidade de cada cliente
              <br />
              por isso oferecemos um serviço premium.
            </SubText>
          </div>

          <div className="flex flex-row w-full h-fit">
            <Sidebar />
            <div className="w-full h-100 bg-red-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
