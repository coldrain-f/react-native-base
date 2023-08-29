import React from "react";
import { Box, FlatList, Heading, View } from "native-base";
import HomeBanner from "../../../components/HomeBanner";
import HomeBookItem from "../../../components/HomeBookItem";
import { HomeProps } from "../../bottomNavigation";
import type { Book } from "../../../@types/bookType";
import type { CategoryType } from "../../../@types/categoryType";

export default function Home({ navigation }: HomeProps): React.JSX.Element {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  const fetchData = (): Book[] => {
    return require("./books");
  };

  const fetchCategories = (): CategoryType[] => {
    return require("./categories");
  };

  React.useEffect((): void => {
    const data: Book[] = fetchData();
    const categories = fetchCategories();
    setBooks(data);
    setCategories(categories);
  }, []);

  return (
    <Box
      flex={1}
      safeAreaTop
      width="100%"
      _light={{ bg: "warmGray.100" }}
      _dark={{ bg: "#0F172A" }}
    >
      <HomeBanner />
      <View>
        <Heading
          size="md"
          p="5"
          pb="5"
          _light={{ color: "primary.900" }}
          _dark={{ color: "white" }}
        >
          모든 단어장
        </Heading>
      </View>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <HomeBookItem
            book={item}
            onPress={() => {
              navigation.navigate("Category", {
                book: item,
                categories: categories,
              });
            }}
            key={item.id}
          />
        )}
      />
    </Box>
  );
}
