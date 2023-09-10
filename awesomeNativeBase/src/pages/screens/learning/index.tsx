import React from "react";
import { View } from "native-base";
import { LearningProps } from "../../navigation";
import LearningHeader from "../../../components/learning/LearningHeader";
import LearningFlipCard from "../../../components/learning/LearningFlipCard";

export default function Learning({
  navigation,
  route,
}: LearningProps): React.JSX.Element {
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
          <LearningFlipCard />
        </View>
      </View>
    </View>
  );
}
