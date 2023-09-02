import React from "react";
import { Box, Center, Heading, View } from "native-base";
import { ConfigurationProps } from "../../bottomNavigation";

export default function Configuration({
  navigation,
  route,
}: ConfigurationProps): React.JSX.Element {
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
