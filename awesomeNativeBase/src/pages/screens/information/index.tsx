import React from "react";
import { View, Center, Heading } from "native-base";
import { InformationProps } from "../../bottomNavigation";
import FlipCard from "../../../components/learning/FlipCard";

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
