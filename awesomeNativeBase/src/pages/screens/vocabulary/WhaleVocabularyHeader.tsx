import React from "react";
import { Text, View } from "native-base";

interface Props {}

export default function WhaleVocabularyHeader(props: Props) {
  const titleRef = React.useRef<string>("모든 단어장");

  return (
    <View
      p={5}
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "coolGray.100",
      }}
    >
      {/* Begin::리스트 헤더 제목 */}
      <View flexDirection="row" flexWrap="wrap">
        <Text
          color="primary.900"
          fontWeight="bold"
          fontSize="lg"
          _dark={{
            color: "coolGray.100",
          }}
        >
          {titleRef.current}
        </Text>
      </View>
      {/* End::리스트 헤더 제목 */}
    </View>
  );
}
