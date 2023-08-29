import React from "react";
import { Box, FlatList, Flex, Progress, Text, View } from "native-base";
import { CategoryProps } from "../../bottomNavigation";
import CategoryItem from "../../../components/CategoryItem";
import type { CategoryType } from "../../../@types/categoryType";

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { book, categories } = route.params;

  return (
    <Box
      bg="warmGray.100"
      width="100%"
      flex={1}
      _dark={{
        bg: "#0F172A",
      }}
      safeAreaTop
    >
      <View>
        <View
          p="5"
          mb="2"
          borderBottomWidth={1}
          borderColor="coolGray.400"
          bg="coolGray.100"
          _dark={{ bg: "#171E2E", borderColor: "white" }}
        >
          <Text
            color="primary.900"
            fontWeight="bold"
            fontSize="lg"
            _dark={{ color: "white" }}
          >
            {book.title}
          </Text>
          <Text
            color="coolGray.900"
            fontSize="md"
            mb="1"
            _dark={{ color: "coolGray.100" }}
          >
            학습 진척도:{" "}
            {(
              (categories.reduce((acc, value) => {
                return acc + value.finishedCount;
              }, 0) /
                categories.reduce((acc, value) => {
                  return acc + value.totalCount;
                }, 0)) *
              100
            ).toFixed(1)}
            %
          </Text>
          <Flex direction="row">
            <Box w="60%" mt="2">
              <Progress
                colorScheme="info"
                value={
                  (categories.reduce((acc, value) => {
                    return acc + value.finishedCount;
                  }, 0) /
                    categories.reduce((acc, value) => {
                      return acc + value.totalCount;
                    }, 0)) *
                  100
                }
                size="sm"
              />
            </Box>
            <Box w="26%" ml="3">
              <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
                {categories.reduce((acc, value) => {
                  return acc + value.finishedCount;
                }, 0)}{" "}
                /{" "}
                {categories.reduce((acc, value) => {
                  return acc + value.totalCount;
                }, 0)}
                자
              </Text>
            </Box>
          </Flex>
        </View>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} onPress={() => {}} key={item.id} />
        )}
      />
    </Box>
  );
}
