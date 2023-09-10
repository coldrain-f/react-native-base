import React from "react";
import { Flex, View, useColorMode } from "native-base";
import { LearningProps } from "../../navigation";
import LearningHeader from "../../../components/learning/LearningHeader";
import FlipCard from "../../../components/learning/FlipCard";

export default function Learning({
  navigation,
  route,
}: LearningProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <View
      flex={1}
      bg="warmGray.100"
      _dark={{
        bg: "#0F172A",
      }}
    >
      <View flex={1}>
        <LearningHeader />
        <View flex={1}>
          <FlipCard />
        </View>
      </View>
    </View>
  );
}
