import { Box, Flex, TextArea } from "@radix-ui/themes";
export function Chat() {
  return (
    <>
      <div className="p-12 col-start-9 col-span-4 row-start-2 row-span-10 bg-zinc-800 rounded-3xl">
        <Flex direction="column" justify="between" className="h-full">
          <Flex>
            <Box> </Box>
          </Flex>
          <div>
            <TextArea
              placeholder="Mensagem..."
              variant="surface"
              className="rounded-2xl"
            />
          </div>
        </Flex>
      </div>
    </>
  );
}
