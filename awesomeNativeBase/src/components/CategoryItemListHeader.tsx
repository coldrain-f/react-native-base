import React from "react";
import { Box, Flex, Progress, Text, View } from "native-base";
import type { Book } from "../@types/bookType";

interface Props {
  book: Book;
  learningFinishedCount: number;
  learningTotalCount: number;
}

export default function CategoryItemListHeader(props: Props) {
  const { book, learningFinishedCount, learningTotalCount } = props;

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
      <Text
        color="coolGray.900"
        fontSize="md"
        mb="1"
        _dark={{
          color: "coolGray.100",
        }}
      >
        학습 진척도:{" "}
        {((learningFinishedCount / learningTotalCount) * 100).toFixed(1)}%
      </Text>
      <Flex direction="row">
        <Box w="60%" mt="2">
          <Progress
            colorScheme="info"
            value={(learningFinishedCount / learningTotalCount) * 100}
            size="sm"
          />
        </Box>
        <Box w="26%" ml="3">
          <Text
            color="coolGray.900"
            _dark={{
              color: "coolGray.100",
            }}
          >
            {learningFinishedCount} / {learningTotalCount}자
          </Text>
        </Box>
      </Flex>
    </View>
  );
}
