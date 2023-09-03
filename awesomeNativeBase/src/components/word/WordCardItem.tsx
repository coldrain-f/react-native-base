import React from "react";
import {
  View,
  Box,
  Flex,
  Text,
  Divider,
  Checkbox,
  Button,
  useColorMode,
  Link,
  Modal,
  ScrollView,
  Heading,
  Center,
  Badge,
} from "native-base";
import Furi from "../common/Furi";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function WordCardItem(): React.JSX.Element {
  const { colorMode } = useColorMode();
  const [showFuri, setShowFuri] = React.useState<boolean>(true);

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
              <View flexDirection="row">
                <Furi
                  furiData={[{ word: "人口", furi: "じんこう" }]}
                  showFuri={showFuri}
                  fontSize={20}
                />
                <View justifyContent="flex-end" pb={1}>
                  <Text ml={2}>인구</Text>
                </View>
              </View>
              <View flexDirection="row">
                <Furi
                  furiData={[{ word: "人生", furi: "じんせい" }]}
                  showFuri={showFuri}
                  fontSize={20}
                />
                <View justifyContent="flex-end" pb={1}>
                  <Text ml={2}>인생</Text>
                </View>
              </View>
              <View flexDirection="row">
                <Furi
                  furiData={[{ word: "人物", furi: "じんぶつ" }]}
                  showFuri={showFuri}
                  fontSize={20}
                />
                <View justifyContent="flex-end" pb={1}>
                  <Text ml={2}>인물</Text>
                </View>
              </View>
              <View flexDirection="row">
                <Furi
                  furiData={[{ word: "人類", furi: "じんるい" }]}
                  showFuri={showFuri}
                  fontSize={20}
                />
                <View justifyContent="flex-end" pb={1}>
                  <Text ml={2}>인류</Text>
                </View>
              </View>
              <View flexDirection="row">
                <Furi
                  furiData={[{ word: "偉人", furi: "いじん" }]}
                  showFuri={showFuri}
                  fontSize={20}
                />
                <View justifyContent="flex-end" pb={1}>
                  <Text ml={2}>위인</Text>
                </View>
              </View>
            </Flex>
          </Flex>
        </View>
        <Flex direction="row" mt={5} justifyContent="space-between">
          <Button
            w="48.5%"
            size="sm"
            variant="outline"
            leftIcon={
              <Ionicon
                name="eye"
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
            onPress={() => setShowFuri(!showFuri)}
          >
            <Text
              color="coolGray.900"
              _dark={{
                color: "coolGray.200",
              }}
            >
              {showFuri ? "후리가나 숨기기" : "후리가나 보기"}
            </Text>
          </Button>
          <Button
            w="48.5%"
            size="sm"
            variant="outline"
            leftIcon={
              <Ionicon
                name="shuffle-outline"
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
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
