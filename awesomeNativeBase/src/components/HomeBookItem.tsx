import React from "react";
import { Avatar, Box, HStack, Pressable, Text } from "native-base";

type Book = {
  id: number;
  title: string;
  subtitle: string;
  wordCount: number;
  uri: string;
};

type Props = {
  book: Book;
  onPress(): void;
};

export default function HomeBookItem(props: Props): React.JSX.Element {
  const { book, onPress } = props;
  return (
    <Pressable onPress={onPress} my="2">
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
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="md"
                source={{
                  uri: book.uri,
                }}
                alignSelf="center"
              />
              <Box>
                <Text color="coolGray.700" fontWeight="bold" fontSize="md">
                  {book.title}
                </Text>
                <Text color="warmGray.600">{book.subtitle}</Text>
              </Box>
              <Box>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                >
                  {book.wordCount}자
                </Text>
              </Box>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  );
}
