import React from "react";
import { Button, Flex, Text, View, useColorMode } from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";
import Furi from "../common/Furi";

interface WordType {
  name: string;
  furi: string;
  meaning: string;
}

interface Props {
  word: WordType;
  showFuri: boolean;
  showMeaning: boolean;
  handleNextWord: () => void;
}

export default function LearningFlipCard(props: Props) {
  const { word, showFuri, showMeaning, handleNextWord } = props;
  const { colorMode } = useColorMode();

  return (
    <View
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
      }}
    >
      <View justifyContent="center" alignItems="center">
        <Flex direction="row" w="100%" mb={3}>
          <View w="50%">
            <Text
              color="info.700"
              bold
              ml={7}
              mt={2}
              _dark={{
                color: "info.300",
              }}
            >
              {showFuri ? "정답" : "문제"}
            </Text>
          </View>
          <View w="50%" alignItems="flex-end">
            <Button
              w="30%"
              variant="ghost"
              leftIcon={<Ionicon name="bookmark" color="#0369a1" size={20} />}
            />
          </View>
        </Flex>
        <Furi
          furiData={[{ word: word.name, furi: word.furi }]}
          showFuri={showFuri}
          fontSize={44}
        />
        <Text
          fontSize="2xl"
          color="coolGray.700"
          _dark={{
            color: "warmGray.200",
          }}
        >
          {showMeaning ? word.meaning : " "}
        </Text>
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          bg="coolGray.100"
          borderColor="warmGray.200"
          mt={10}
          w="100%"
          _dark={{
            bg: "#171E2E",
          }}
        >
          <Button
            w="37.5%"
            colorScheme="danger"
            variant="outline"
            _dark={{
              _text: {
                color: "danger.300",
              },
            }}
            leftIcon={
              <Ionicon
                name="close-circle-outline"
                color={colorMode === "light" ? "#be123c" : "#fda4af"}
                size={20}
              />
            }
            onPress={() => handleNextWord()}
          >
            모르겠어요
          </Button>
          <Button
            w="15%"
            colorScheme="info"
            variant="outline"
            leftIcon={
              <Ionicon
                name="volume-medium-outline"
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
            onPress={() => {}}
          />
          <Button
            w="37.5%"
            colorScheme="info"
            variant="outline"
            _dark={{
              _text: {
                color: "info.300",
              },
            }}
            leftIcon={
              <Ionicon
                name="chevron-down-circle-outline"
                color={colorMode === "light" ? "#0369a1" : "#7dd3fc"}
                size={20}
              />
            }
            onPress={() => handleNextWord()}
          >
            외웠어요
          </Button>
        </Flex>
      </View>
    </View>
  );
}
