import React from "react";
import { View, Text, Heading, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function WhaleVocabularyJlptVocaFlatListHeader() {
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
          JLPT 단어장 소개
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
          JLPT N5부터 N1까지의 단어를 급수별로 묶어 학습할 수 있는 단어장입니다.
          JLPT 자격증을 취득하는 데 도움이 됩니다.
        </Text>
      )}
    </View>
  );
}
