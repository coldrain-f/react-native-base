import React from "react";
import { Box, Flex, Progress, Text, View } from "native-base";
import type { Book } from "../@types/bookType";

interface Props {
  book: Book;
}

export default function CategoryItemListHeader(props: Props) {
  const { book } = props;

  return (
    <View
      p="5"
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "white",
      }}
    >
      <Text
        color="primary.900"
        fontWeight="bold"
        fontSize="lg"
        _dark={{
          color: "white",
        }}
      >
        {book.title}
      </Text>
    </View>
  );
}
