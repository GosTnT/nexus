import { DashboardRank } from "@/containers/Dashboard/dashboardRanking";
import { Flex } from "@radix-ui/themes";

export function StaticOrderInfo() {
  return (
    <>
      <Flex gap="5">
        <Flex gap="4" align="end">
          <DashboardRank />
        </Flex>
      </Flex>
    </>
  );
}
