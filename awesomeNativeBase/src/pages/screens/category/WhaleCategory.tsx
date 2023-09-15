import React from "react";
import { FlatList, Heading, Spinner, View, HStack } from "native-base";
import type { CategoryType } from "../../../@types/categoryType";
import type { WhaleCategoryProps } from "../../navigation";
import WhaleCategoryHeader from "./WhaleCategoryHeader";
import WhaleCategoryItem from "./WhaleCategoryItem";

export default function WhaleCategory(props: WhaleCategoryProps) {
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
          <WhaleCategoryHeader book={book} />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => {}}
            refreshing={false}
            data={categories}
            renderItem={({ item }) => {
              return <WhaleCategoryItem category={item} />;
            }}
          />
        </>
      )}
    </View>
  );
}
