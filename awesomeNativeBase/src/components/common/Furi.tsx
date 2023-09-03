import React from "react";
import { Flex, View, Text } from "native-base";

interface FuriType {
  word: string;
  furi: string;
}

interface FuriProps {
  furiData: FuriType[];
  showFuri?: boolean;
  fontSize?: number;
}

export default function Furi({
  furiData,
  showFuri = true,
  fontSize = 22,
}: FuriProps) {
  return (
    <Flex direction="row" flexWrap="wrap">
      {furiData.map((data, index) => (
        <View key={index}>
          <Text
            fontSize={fontSize * 0.5}
            textAlign="center"
            color="coolGray.700"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {data.furi && showFuri ? data.furi : " "}
          </Text>
          <Text
            fontSize={fontSize}
            textAlign={index === 0 ? "left" : "center"}
            color="coolGray.700"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {data.word}
          </Text>
        </View>
      ))}
    </Flex>
  );
}
