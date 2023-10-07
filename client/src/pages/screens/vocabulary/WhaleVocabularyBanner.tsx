import React from "react";
import { AspectRatio, Box, Image, Text, useColorMode } from "native-base";

export default function WhaleVocabularyBanner(): React.JSX.Element {
  const { colorMode } = useColorMode();
  const [type, setType] = React.useState("b");

  const backgroundList = [
    "https://cdn.pixabay.com/photo/2017/02/09/15/10/sea-2052650_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/04/16/59/whale-2580660_1280.jpg",
  ];

  // 디자인 피드백 반영
  // const title = React.useRef<string>("Whale Vocabulary");

  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image
          source={{
            uri: colorMode === "light" ? backgroundList[0] : backgroundList[1],
          }}
          resizeMode="cover"
          alt="image"
        />
      </AspectRatio>
      <Box
        _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xl",
        }}
        position="absolute"
        bottom="0"
        px="3"
        py="1.5"
        // 디자인 피드백 반영
        w="100%"
      >
        {/* 디자인 피드백 반영 */}

        {type === "a" ? (
          <>
            <Text
              color="coolGray.50"
              fontWeight="700"
              fontSize="xl"
              textAlign="right"
            >
              일본어 입문 소개
            </Text>
            <Text color="coolGray.50" textAlign="right">
              히라가나와 가타가나 기초 과정입니다.
            </Text>
            <Text color="coolGray.50" textAlign="right">
              단어를 발음하고 읽을 때 도움이 됩니다.
            </Text>
          </>
        ) : (
          <></>
        )}

        {type === "b" ? (
          <>
            <Text
              color="coolGray.50"
              fontWeight="700"
              fontSize="xl"
              textAlign="right"
            >
              漢字별 단어장
            </Text>
            <Text color="coolGray.50" textAlign="right">
              한자가 포함된 단어를 각각의 한자로 묶어 학습하여
            </Text>
            <Text color="coolGray.50" textAlign="right">
              일본어 한자를 숙달하는 데 도움이 됩니다.
            </Text>
          </>
        ) : (
          <></>
        )}

        {type === "c" ? (
          <>
            <Text
              color="coolGray.50"
              fontWeight="700"
              fontSize="xl"
              textAlign="right"
            >
              JLPT 단어장 소개
            </Text>
            <Text color="coolGray.50" textAlign="right">
              JLPT N5부터 N1까지의 단어를 급수별로 묶어 학습하여
            </Text>
            <Text color="coolGray.50" textAlign="right">
              JLPT 자격증을 취득하는 데 도움이 됩니다.
            </Text>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
