import React from "react";
import { View, Text, Heading, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function WhaleVocabularyBeginnerVocaFlatListHeader() {
  const [showIntroduction, setShowIntroduction] = React.useState(true);
  const { colorMode } = useColorMode();

  return (
    <View
      p={5}
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "white",
      }}
    >
      <View flexDirection="row">
        <Heading
          size="sm"
          color="primary.900"
          _dark={{
            color: "info.200",
          }}
          w="80%"
        >
          일본어 입문 소개
        </Heading>
        <View w="20%" alignItems="flex-end">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShowIntroduction(!showIntroduction);
            }}
          >
            {/* #111825: coolGray.900 */}
            <Ionicon
              name={
                showIntroduction ? "caret-up-outline" : "caret-down-outline"
              }
              color={colorMode === "light" ? "#374151" : "#f3f4f6"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showIntroduction && (
        <Text
          mt={2}
          color="coolGray.700"
          _dark={{
            color: "coolGray.100",
          }}
        >
          일본어 단어를 쉽게 암기하기 위한 히라가나와 가타카나 기초 과정입니다.
          단어를 발음하고 읽을 때 도움이 됩니다.
        </Text>
      )}
    </View>
  );
}
