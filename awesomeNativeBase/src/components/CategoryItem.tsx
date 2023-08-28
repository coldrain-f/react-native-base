import React from "react";
import { Progress, Box, Pressable, Text, Flex, Badge } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  onPress(): void;
}

export default function CategoryItem(props: Props): React.JSX.Element {
  const { onPress } = props;
  return (
    <Pressable my="2" onPress={onPress}>
      {({ isPressed }) => {
        return (
          <Box
            h="100px"
            w="100%"
            bg={isPressed ? "coolGray.200" : "coolGray.100"}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            p="5"
            borderWidth={0}
            borderColor="coolGray.300"
            shadow={3}
          >
            <Flex direction="row">
              <Box>
                <Text color="coolGray.700" fontWeight="bold" fontSize="md">
                  초등학교 1학년 한자
                </Text>
                <Text color="secondary.700">학습 진행중</Text>
                <Flex direction="row">
                  <Box w="70%" mt="2">
                    <Progress
                      colorScheme="primary"
                      value={(50 / 80) * 100}
                      size="md"
                    />
                  </Box>
                  <Box ml="3">
                    <Text color="coolGray.700">50 / 80자</Text>
                  </Box>
                </Flex>
              </Box>
              <Flex flex={1} direction="row" justifyContent="flex-end">
                <Icon
                  name="arrow-forward-circle-outline"
                  color="black"
                  size={24}
                />
              </Flex>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}
