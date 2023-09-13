import React from "react";
import {
  Box,
  FlatList,
  Flex,
  Heading,
  Progress,
  Spinner,
  Text,
  View,
  HStack,
} from "native-base";
import CategoryItem from "../../../components/CategoryItem";
import type { CategoryType } from "../../../@types/categoryType";
import type { CategoryProps } from "../../navigation";
import type { Book } from "../../../@types/bookType";
import CategoryItemListHeader from "../../../components/CategoryItemListHeader";

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { book } = route.params;

  const [categories, setCategories] = React.useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [learningFinishedCount, setLearningFinishedCount] =
    React.useState<number>(0);

  const [learningTotalCount, setLearningTotalCount] = React.useState<number>(0);

  const fetchCategories = (): CategoryType[] => {
    return require("./categories");
  };

  React.useEffect((): void => {
    setCategories(fetchCategories());
    setLearningFinishedCount(207);
    setLearningTotalCount(1026);
    setIsLoading(false);
  }, []);

  return (
    <View
      bg="warmGray.100"
      width="100%"
      flex={1}
      _dark={{
        bg: "#0F172A",
      }}
    >
      {isLoading ? (
        <HStack space={2} justifyContent="center" alignItems="center" h="100%">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      ) : (
        <>
          <CategoryItemListHeader
            book={book}
            learningFinishedCount={learningFinishedCount}
            learningTotalCount={learningTotalCount}
          />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => {}}
            refreshing={false}
            data={categories}
            renderItem={({ item }) => <CategoryItem category={item} />}
          />
        </>
      )}
    </View>
  );
}
