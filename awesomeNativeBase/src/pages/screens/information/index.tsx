import React from "react";
import { View } from "native-base";
import { InformationProps } from "../../bottomNavigation";
import FlipCard from "../../../components/learning/FlipCard";

export default function Information({
  navigation,
  route,
}: InformationProps): React.JSX.Element {
  return (
    <View flex={1}>
      <View h="100%">
        <FlipCard />
      </View>
    </View>
  );
}
