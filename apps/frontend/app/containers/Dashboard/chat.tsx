import { Box, Flex, TextArea } from "@radix-ui/themes";
export function Chat() {
  return (
    <>
      <div className="col-span-4 col-start-9 row-start-2 p-12 rounded-3xl row-span-10 bg-zinc-800">
        <Flex direction="column" justify="between" className="h-full">
          <Flex>
            <Box> </Box>
          </Flex>
          <div>
            <TextArea
              placeholder="Mensagem..."
              variant="surface"
              className="rounded-3xl"
            />
          </div>
        </Flex>
      </div>
    </>
  );
}
