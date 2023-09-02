import React from "react";
import { FlatList, HStack, Heading, Spinner, View } from "native-base";
import KanjiCardItem from "../../../components/kanji/KanjiCardItem";
import KanjiCardItemListHeader from "../../../components/kanji/KanjiCardItemListHeader";
import type { KanjiType } from "../../../@types/kanjiType";

export default function Word(): React.JSX.Element {
  const [kanjiList, setKanjiList] = React.useState<KanjiType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchBooks = (): KanjiType[] => {
    return require("./kanjis");
  };

  React.useEffect((): void => {
    setKanjiList(fetchBooks());
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
          <KanjiCardItemListHeader />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => {}}
            refreshing={false}
            data={kanjiList}
            renderItem={({ item }) => <KanjiCardItem kanji={item} />}
          />
        </>
      )}
    </View>
  );
}
