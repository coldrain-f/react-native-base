import { useNavigation } from "@react-navigation/native";
import {
  View,
  Box,
  Pressable,
  Flex,
  Text,
  Divider,
  Checkbox,
} from "native-base";
import { StackNavigationProp } from "../../pages/navigation";
import { KanjiType } from "../../@types/kanjiType";

interface Props {
  kanji: KanjiType;
}

export default function KanjiCardItem({ kanji }: Props): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <Pressable
      mb={3}
      onPress={() => {
        navigation.navigate("Word");
      }}
    >
      {({ isPressed }) => {
        return (
          <Box
            w="100%"
            bg={isPressed ? "coolGray.200" : "coolGray.100"}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            pt="2"
            pb="2"
            borderWidth={0}
            borderColor="coolGray.300"
            shadow={3}
            _dark={{ bg: "#171E2E" }}
          >
            <Flex direction="row">
              {/* 한자 표시 Grid */}
              <View pl={5} w="25%">
                <Text
                  color="coolGray.700"
                  fontWeight="bold"
                  fontSize="4xl"
                  _dark={{
                    color: "warmGray.100",
                  }}
                >
                  {kanji.kanji}
                </Text>
                <Text
                  color="coolGray.700"
                  fontWeight="bold"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {kanji.meaning.split(" ")[0] + " "}
                  <Text
                    color="primary.700"
                    fontWeight="bold"
                    _dark={{
                      color: "primary.200",
                    }}
                  >
                    {kanji.meaning.split(" ")[1]}
                  </Text>
                </Text>
                <Text>획수: {kanji.strokeCount}획</Text>
              </View>
              <Divider
                thickness={1}
                mx={2}
                orientation="vertical"
                _dark={{
                  backgroundColor: "warmGray.200",
                }}
              />
              {/* 음독, 훈독 Grid */}
              <View p={2} ml={1} w="62.5%">
                <Flex direction="row" pb={1}>
                  <Text
                    fontWeight="bold"
                    color="coolGray.700"
                    fontSize="md"
                    w="100%"
                    _dark={{ color: "warmGray.200" }}
                  >
                    음독:{" "}
                    <Text fontWeight="medium">{kanji.onYomi.join(", ")}</Text>
                  </Text>
                </Flex>
                <Flex direction="row">
                  <Text
                    fontWeight="bold"
                    color="coolGray.700"
                    fontSize="md"
                    w="100%"
                    _dark={{ color: "warmGray.200" }}
                  >
                    훈독:{" "}
                    <Text fontWeight="medium">{kanji.kunYomi.join(", ")}</Text>
                  </Text>
                </Flex>
                {/* 회독 수, 포함 단어 Grid */}
                <Flex direction="row" mt={3.5} flexWrap="wrap" w="100%">
                  <View flexDirection="row" flexWrap="wrap" w="45%">
                    <Text
                      fontWeight="bold"
                      color="info.700"
                      pr={1}
                      _dark={{ color: "info.200" }}
                    >
                      {kanji.readCount}
                    </Text>
                    <Text
                      color="coolGray.700"
                      _dark={{ color: "warmGray.200" }}
                    >
                      회독 완료
                    </Text>
                  </View>
                  <View flexDirection="row" flexWrap="wrap" w="55%">
                    <Text
                      pr={1}
                      color="coolGray.700"
                      _dark={{ color: "warmGray.200" }}
                    >
                      포함 단어:
                    </Text>
                    <Text
                      fontWeight="bold"
                      color="info.700"
                      _dark={{ color: "info.200" }}
                    >
                      {kanji.wordCount}
                    </Text>
                    <Text
                      color="coolGray.700"
                      _dark={{ color: "warmGray.200" }}
                    >
                      개
                    </Text>
                  </View>
                </Flex>
              </View>
              <Flex pt={2} direction="column" alignItems="center">
                <Checkbox
                  value="0"
                  accessibilityLabel="This is a checkbox"
                  mt={0.5}
                />
              </Flex>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}
