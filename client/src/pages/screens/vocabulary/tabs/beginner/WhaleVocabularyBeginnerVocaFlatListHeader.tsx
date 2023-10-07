import React from "react";
import { View, Text, Heading, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function WhaleVocabularyBeginnerVocaFlatListHeader() {
  const [showIntroduction, setShowIntroduction] = React.useState(true);
  const { colorMode } = useColorMode();

  return (
    <View
      bg="coolGray.200"
      _dark={{
        bg: "coolGray.900",
      }}
    ></View>
  );
}
