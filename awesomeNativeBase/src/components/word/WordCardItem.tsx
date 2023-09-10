import React from "react";
import {
  View,
  Box,
  Flex,
  Text,
  Divider,
  Button,
  useColorMode,
  Center,
  Badge,
} from "native-base";
import Furi from "../common/Furi";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function WordCardItem(): React.JSX.Element {
  const { colorMode } = useColorMode();
  const [showFuri, setShowFuri] = React.useState<boolean>(true);
  const [showMeaning, setShowMeaning] = React.useState<boolean>(true);

  const [words, setWords] = React.useState([
    { name: "人口", furi: "じんこう", meaning: "인구" },
    { name: "人生", furi: "じんせい", meaning: "인생" },
    { name: "人物", furi: "じんぶつ", meaning: "인물" },
    { name: "人類", furi: "じんるい", meaning: "인류" },
    { name: "偉人", furi: "いじん", meaning: "위인" },
  ]);

  const shuffle = require("fisher-yates");

  const handleShuffleClick = () => {
    setWords(shuffle(words));
  };

  return (
    <View>
      <Badge
        colorScheme={colorMode === "light" ? "info" : "coolGray"}
        mb={-4}
        mr={2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}
      >
        5개
      </Badge>
      <Box
        w="100%"
        bg={"coolGray.100"}
        style={{
          transform: [
            {
              scale: 1,
            },
          ],
        }}
        p={2}
        pt={5}
        pb={5}
        borderWidth={1}
        borderColor="coolGray.300"
        shadow={3}
        _dark={{
          bg: "#171E2E",
          borderColor: "coolGray.700",
          borderWidth: 1,
        }}
      >
        <View>
          <Flex direction="row">
            <View flexDirection="row" w="20%" flexWrap="wrap">
              <Center>
                <Text
                  fontSize="md"
                  color="coolGray.700"
                  fontWeight="bold"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  じん
                </Text>
              </Center>
            </View>
            <Divider
              thickness={1}
              mx={2}
              orientation="vertical"
              _dark={{
                backgroundColor: "warmGray.200",
              }}
            />
            <Flex
              direction="row"
              flexWrap="wrap"
              w="65%"
              justifyContent="space-between"
            >
              {words.map((word) => (
                <View flexDirection="row" key={word.name}>
                  <Furi
                    furiData={[{ word: word.name, furi: word.furi }]}
                    showFuri={showFuri}
                    fontSize={20}
                  />
                  <View justifyContent="flex-end" pb={1}>
                    <Text ml={2} opacity={showMeaning ? 1 : 0}>
                      {word.meaning}
                    </Text>
                  </View>
                </View>
              ))}
            </Flex>
          </Flex>
        </View>
        <Flex direction="row" mt={5} justifyContent="space-between">
          <Button
            w="30%"
            size="sm"
            variant="outline"
            leftIcon={
              <Ionicon
                name={showFuri ? "eye" : "eye-outline"}
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
            onPress={() => {
              setShowFuri(!showFuri);
            }}
          >
            <Text
              color="coolGray.900"
              _dark={{
                color: "coolGray.200",
              }}
            >
              발음
            </Text>
          </Button>
          <Button
            w="30%"
            size="sm"
            variant="outline"
            leftIcon={
              <Ionicon
                name={showMeaning ? "eye" : "eye-outline"}
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
            onPress={() => {
              setShowMeaning(!showMeaning);
            }}
          >
            <Text
              color={"coolGray.900"}
              _dark={{
                color: "coolGray.200",
              }}
            >
              뜻
            </Text>
          </Button>
          <Button
            w="35%"
            size="sm"
            variant="outline"
            leftIcon={
              <Ionicon
                name="shuffle-outline"
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
            onPress={handleShuffleClick}
          >
            <Text
              color="coolGray.900"
              _dark={{
                color: "coolGray.200",
              }}
            >
              순서 뒤집기
            </Text>
          </Button>
        </Flex>
      </Box>
    </View>
  );
}
