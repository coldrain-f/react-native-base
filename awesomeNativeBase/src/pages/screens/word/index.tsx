import {
  View,
  Box,
  Pressable,
  Center,
  Heading,
  Progress,
  Flex,
  Text,
  useColorMode,
  Divider,
  Checkbox,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

export default function Word(): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <View
      bg="warmGray.100"
      width="100%"
      flex={1}
      _dark={{
        bg: "#0F172A",
      }}
    >
      <Pressable my="2" onPress={() => {}}>
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
              p="4"
              pt="2"
              pb="2"
              borderWidth={0}
              borderColor="coolGray.300"
              shadow={3}
              _dark={{ bg: "#171E2E" }}
            >
              <Flex direction="row">
                {/* 한자 표시 Grid */}
                <View borderWidth={0} pl={2} w="25%">
                  <Text
                    color="coolGray.700"
                    fontWeight="bold"
                    fontSize="4xl"
                    _dark={{
                      color: "warmGray.100",
                    }}
                  >
                    馬
                  </Text>
                  <Text
                    color="primary.700"
                    fontWeight="bold"
                    _dark={{
                      color: "primary.200",
                    }}
                  >
                    <Text color="coolGray.700">{"매화나무"}</Text> {"매"}
                  </Text>
                  <Text color="coolGray.700">획수: 4획</Text>
                </View>
                <Divider thickness={1} mx={2} orientation="vertical" />
                {/* 음독, 훈독 Grid */}
                <View borderWidth={0} p={2} ml={1} w="60%">
                  <Flex direction="row">
                    <Text
                      fontWeight="bold"
                      color="coolGray.700"
                      fontSize="md"
                      pb={1}
                      w="20%"
                    >
                      음독:
                    </Text>
                    <Text color="coolGray.700" fontSize="md" w="80%">
                      ぎょ, うお
                    </Text>
                  </Flex>
                  <Flex direction="row">
                    <Text
                      fontWeight="bold"
                      color="coolGray.700"
                      fontSize="md"
                      w="20%"
                    >
                      훈독:
                    </Text>
                    <Text color="coolGray.700" fontSize="md" w="80%">
                      うお, さかな
                    </Text>
                  </Flex>
                  {/* 회독 수, 포함 단어 Grid */}
                  <Flex direction="row" mt={3.5} flexWrap="wrap" w="100%">
                    <Text fontWeight="bold" color="info.700" pr={1}>
                      0
                    </Text>
                    <Text>회독 완료</Text>
                    <Divider orientation="vertical" mx={2} thickness={2} />
                    <Text pr={1}>포함 단어:</Text>
                    <Text fontWeight="bold" color="info.700">
                      10
                    </Text>
                    <Text>개</Text>
                  </Flex>
                </View>
                <Flex pt={2} flex={1} direction="column" alignItems="flex-end">
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
    </View>
  );
}
