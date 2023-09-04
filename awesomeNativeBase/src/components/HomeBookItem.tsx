import React from "react";
import {
  Avatar,
  Box,
  Pressable,
  Text,
  Flex,
  View,
  useColorMode,
} from "native-base";
import { Book } from "../@types/bookType";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../pages/navigation";

interface Props {
  book: Book;
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
            <Flex
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <View w="85%">
                <Text
                  color="coolGray.700"
                  fontWeight="bold"
                  fontSize="md"
                  _dark={{
                    color: "warmGray.100",
                  }}
                >
                  {book.title}
                </Text>
                <Text
                  color="warmGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {book.subtitle}
                </Text>
              </View>
              <View w="10%" alignItems="flex-end">
                <Icon
                  name="arrow-forward-circle-outline"
                  color={colorMode === "light" ? "gray" : "white"}
                  size={24}
                />
              </View>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}
