import React from "react";
import { FlatList, View, HStack, Heading, Spinner } from "native-base";
import type { Book } from "../../../@types/bookType";
import type { WhaleVocabularyProps } from "../../bottomNavigation";
import WhaleVocabularyHeader from "./WhaleVocabularyHeader";
import WhaleVocabularyBanner from "./WhaleVocabularyBanner";
import WhaleVocabularyItem from "./WhaleVocabularyItem";

export default function WhaleVocabulary({ navigation }: WhaleVocabularyProps) {
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
          <WhaleVocabularyBanner />
          <WhaleVocabularyHeader />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => {}}
            refreshing={false}
            data={books}
            renderItem={({ item }) => {
              return <WhaleVocabularyItem book={item} />;
            }}
          />
        </>
      )}
    </View>
  );
}
