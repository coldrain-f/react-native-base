import React from "react";
import { Text, View } from "native-base";

export default function Learning(): React.JSX.Element {
  return (
    <View
      bg="warmGray.100"
      width="100%"
      flex={1}
      _dark={{
        bg: "#0F172A",
      }}
    >
      <Text>LEARNING</Text>
    </View>
  );
}
