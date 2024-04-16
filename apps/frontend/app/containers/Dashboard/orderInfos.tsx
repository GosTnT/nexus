import { DashboardRank } from "@/containers/Dashboard/dashboardRanking";
import { FlashSpell } from "@/containers/Dashboard/flashSpell";
import { Flex } from "@radix-ui/themes";

export function OrderInfo() {
  return (
    <>
      <Flex gap="5">
        <Flex gap="4">
          <DashboardRank />
          <FlashSpell />
        </Flex>
      </Flex>
    </>
  );
}
