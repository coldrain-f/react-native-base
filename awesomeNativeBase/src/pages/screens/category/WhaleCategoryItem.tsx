import React from "react";
import {
  Progress,
  Box,
  Pressable,
  Text,
  Flex,
  useColorMode,
} from "native-base";
import type { StackNavigationProp } from "../../navigation";
import type { CategoryType } from "../../../@types/categoryType";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  category: CategoryType;
}

export default function WhaleCategoryItem(props: Props): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();
  const { category } = props;
  const { colorMode } = useColorMode();

  return (
    <Pressable
      my="2"
      onPress={() => {
        navigation.navigate("Kanji");
      }}
    >
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
            borderWidth={1}
            borderColor="coolGray.300"
            shadow={3}
            _dark={{
              bg: "#171E2E",
              borderColor: "coolGray.700",
              borderWidth: 1,
            }}
          >
            <Flex direction="row">
              <Box>
                <Text
                  color="coolGray.700"
                  fontWeight="bold"
                  fontSize="md"
                  _dark={{
                    color: "warmGray.100",
                  }}
                >
                  {category.subject}
                </Text>
                <Text
                  color={
                    category.learningStatus === "Ongoing"
                      ? "secondary.700"
                      : "primary.700"
                  }
                  _dark={{
                    color:
                      category.learningStatus === "Ongoing"
                        ? "secondary.200"
                        : "primary.200",
                  }}
                >
                  {category.learningStatus === "Ongoing"
                    ? "학습 진행중"
                    : "학습 완료"}
                </Text>
                <Flex direction="row">
                  <Box w="64%" mt="2">
                    <Progress
                      colorScheme="info"
                      value={
                        (category.finishedCount / category.totalCount) * 100
                      }
                      size="sm"
                    />
                  </Box>
                  <Box w="26%" ml="3">
                    <Text
                      color="coolGray.700"
                      _dark={{ color: "coolGray.100" }}
                    >
                      {category.finishedCount} / {category.totalCount}자
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Flex flex={1} direction="row" justifyContent="flex-end">
                <Icon
                  name="arrow-forward-circle-outline"
                  color={colorMode === "light" ? "gray" : "white"}
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
