import React from "react";
import { Box, Pressable, Text, Flex, View, useColorMode } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "../../navigation";
import type { Book } from "../../../@types/bookType";

interface Props {
  book: Book;
}

export default function WhaleVocabularyItem(props: Props): React.JSX.Element {
  const { book } = props;
  const navigation = useNavigation<StackNavigationProp>();
  const { colorMode } = useColorMode();

  return (
    <Pressable
      my={2}
      onPress={() => {
        navigation.navigate("WhaleCategory", { book });
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
            p={5}
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
                {/* Begin:: 단어장 카드 아이템 제목 */}
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
                {/* End:: 단어장 카드 아이템 제목 */}

                {/* Begin:: 단어장 카드 아이템 서브 제목 */}
                <Text
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.200",
                  }}
                >
                  {book.subtitle}
                </Text>
                {/* End:: 단어장 카드 아이템 서브 제목 */}
              </View>

              {/* Begin:: 이동 아이콘 */}
              <View w="10%" alignItems="flex-end">
                <Icon
                  name="caret-forward-circle-outline"
                  // #374151: coolGray.700, #f3f4f6: coolGray.100
                  color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                  size={24}
                />
              </View>
              {/* End:: 이동 아이콘 */}
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}
