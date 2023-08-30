import { Box, Center, Heading } from "native-base";

export default function Word(): React.JSX.Element {
  return (
    <Box>
      <Center p="5">
        <Heading size="md" color="coolGray.700">
          {"Coming soon".toUpperCase()}
        </Heading>
      </Center>
    </Box>
  );
}
