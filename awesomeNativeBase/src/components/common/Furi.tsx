import React from "react";
import { Flex, View, Text } from "native-base";

interface FuriType {
  word: string;
  furi: string;
}

interface FuriProps {
  furiData: FuriType[];
  showFuri: boolean;
  fontSize?: number;
  color?: string;
}

export default function Furi({
  furiData,
  showFuri,
  fontSize = 22,
  color = "coolGray.700",
}: FuriProps) {
  return (
    <Flex direction="row" flexWrap="wrap">
      {furiData.map((data, index) => (
        <View key={index}>
          <Text
            fontSize={fontSize * 0.5}
            textAlign="center"
            color={color}
            _dark={{
              color: "warmGray.200",
            }}
          >
            {data.furi && showFuri ? data.furi : " "}
          </Text>
          <Text
            fontSize={fontSize}
            textAlign={index === 0 ? "left" : "center"}
            color={color}
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
