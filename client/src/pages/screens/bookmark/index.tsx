import React from "react";
import { Center, Heading, View } from "native-base";
import type { BookmarkProps } from "../../bottomNavigation";

export default function BookMark({
  navigation,
  route,
}: BookmarkProps): React.JSX.Element {
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
