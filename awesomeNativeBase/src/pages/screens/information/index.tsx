import { Box, Center, Heading, View } from "native-base";
import React from "react";
import { InformationProps } from "../../bottomNavigation";

export default function Information({
  navigation,
  route,
}: InformationProps): React.JSX.Element {
  return (
    <View>
      <Center p="5">
        <Heading size="md" color="coolGray.700">
          {"Coming soon".toUpperCase()}
        </Heading>
      </Center>
    </View>
  );
}
