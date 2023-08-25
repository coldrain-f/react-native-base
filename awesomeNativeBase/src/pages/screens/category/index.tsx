import React from "react";
import { Box, Heading, Center } from "native-base";
import { CategoryProps } from "../../navigation";

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { bookTitle } = route.params;

  return (
    <Box>
      <Center p="5">
        <Heading size="md">{bookTitle}</Heading>
      </Center>
    </Box>
  );
}
