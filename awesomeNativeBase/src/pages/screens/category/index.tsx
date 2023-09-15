import React from "react";
import { FlatList, Heading, Spinner, View, HStack } from "native-base";
import CategoryItemListHeader from "../../../components/CategoryItemListHeader";
import CategoryItem from "../../../components/CategoryItem";
import type { CategoryType } from "../../../@types/categoryType";
import type { CategoryProps } from "../../navigation";

export default function Category(props: CategoryProps) {
  const { route } = props;
  const { book } = route.params;

  const [categories, setCategories] = React.useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchCategories = (): CategoryType[] => {
    return require("./categories");
  };

  React.useEffect((): void => {
    setCategories(fetchCategories());
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
          <CategoryItemListHeader book={book} />
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
