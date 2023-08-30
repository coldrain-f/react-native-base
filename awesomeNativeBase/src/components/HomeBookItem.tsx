import React from "react";
import { Avatar, Box, Pressable, Text, Flex, useColorMode } from "native-base";
import { Book } from "../@types/bookType";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { HomeProps } from "../pages/bottomNavigation";
import { StackNavigationProp } from "../pages/navigation";

interface Props {
  book: Book;
  // onPress(): void;
}

export default function HomeBookItem(props: Props): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();

  const { colorMode } = useColorMode();

  const { book } = props;
  return (
    <Pressable
      my="2"
      onPress={() => {
        navigation.navigate("Category", { book });
      }}
    >
      {({ isPressed }) => {
        return (
          <Box
            h={20}
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
            _dark={{
              bg: "#171E2E",
              borderColor: "coolGray.100",
            }}
          >
            <Flex direction="row">
              <Box pr="7">
                <Avatar
                  size="md"
                  source={{
                    uri: book.uri,
                  }}
                  alignSelf="center"
                />
              </Box>
              <Box>
                <Text
                  color="coolGray.700"
                  fontWeight="bold"
                  fontSize="md"
                  _dark={{ color: "warmGray.100" }}
                >
                  {book.title}
                </Text>
                <Text color="warmGray.600" _dark={{ color: "warmGray.200" }}>
                  {book.subtitle}
                </Text>
              </Box>
              <Flex flex={1} flexDirection="row" justifyContent="flex-end">
                <Icon
                  name="arrow-forward-circle-outline"
                  color={colorMode === "light" ? "black" : "white"}
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
