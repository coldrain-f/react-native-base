import React from "react";
import { FlatList, View, HStack, Heading, Spinner } from "native-base";
import HomeBanner from "../../../components/HomeBanner";
import HomeBookItem from "../../../components/HomeBookItem";
import type { HomeProps } from "../../bottomNavigation";
import type { Book } from "../../../@types/bookType";
import VocabularyItemListHeader from "../../../components/VocabularyItemListHeader";

export default function Home({ navigation }: HomeProps) {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchBooks = (): Book[] => {
    return require("./books");
  };

  React.useEffect((): void => {
    setBooks(fetchBooks());
    setIsLoading(false);
  }, []);

  return (
    <View
      flex={1}
      bg="warmGray.100"
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
          <HomeBanner />
          <VocabularyItemListHeader />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => {}}
            refreshing={false}
            data={books}
            renderItem={({ item }) => <HomeBookItem book={item} />}
          />
        </>
      )}
    </View>
  );
}
