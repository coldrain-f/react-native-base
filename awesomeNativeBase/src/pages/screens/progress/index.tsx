import React from "react";
import { Center, Heading, View } from "native-base";
import type { ProgressProps } from "../../bottomNavigation";

export default function Progress({
  navigation,
  route,
}: ProgressProps): React.JSX.Element {
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
