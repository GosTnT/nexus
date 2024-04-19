import { Flex, Heading } from "@radix-ui/themes";
export function DashboardRank({ ranking }: { ranking: string }) {
  return (
    <>
      <Flex direction="column" justify="center" align="center">
        <div>
          <img src="image-url-1.jpg" alt="Option 1" />
          <Heading size="3" weight="bold" className="text-zinc-500">
            {ranking}
          </Heading>
        </div>
      </Flex>
    </>
  );
}
