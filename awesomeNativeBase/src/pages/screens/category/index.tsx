import React from "react";
import {
  Box,
  FlatList,
  Flex,
  Progress,
  ScrollView,
  Text,
  View,
} from "native-base";
import CategoryItem from "../../../components/CategoryItem";
import type { CategoryType } from "../../../@types/categoryType";
import type { CategoryProps } from "../../navigation";

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { book } = route.params;

  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  const fetchCategories = (): CategoryType[] => {
    return require("./categories");
  };

  React.useEffect((): void => {
    setCategories(fetchCategories());
  }, []);

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
            학습 진척도: {20.2}%
          </Text>
          <Flex direction="row">
            <Box w="60%" mt="2">
              <Progress colorScheme="info" value={20.2} size="sm" />
            </Box>
            <Box w="26%" ml="3">
              <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
                207 / 1026자
              </Text>
            </Box>
          </Flex>
        </View>
      </View>
      <ScrollView>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
      {/* <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} onPress={() => {}} />
        )}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </Box>
  );
}
