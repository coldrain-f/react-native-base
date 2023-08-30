import React from "react";
import { FlatList, HStack, Heading, Spinner, View } from "native-base";
import HomeBanner from "../../../components/HomeBanner";
import HomeBookItem from "../../../components/HomeBookItem";
import type { HomeProps } from "../../bottomNavigation";
import type { Book } from "../../../@types/bookType";

function HomeBookItemListHeader() {
  return (
    <View
      p="5"
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{ bg: "#171E2E", borderColor: "white" }}
    >
      <Heading
        color="primary.900"
        fontWeight="bold"
        size="md"
        _dark={{ color: "white" }}
      >
        모든 단어장
      </Heading>
    </View>
  );
}

export default function Home({ navigation }: HomeProps): React.JSX.Element {
  const [books, setBooks] = React.useState<Book[]>([]);

  const fetchBooks = (): Book[] => {
    return require("./books");
  };

  React.useEffect((): void => {
    setBooks(fetchBooks());
  }, []);

  return (
    <View
      flex={1}
      width="100%"
      _light={{ bg: "warmGray.100" }}
      _dark={{ bg: "#0F172A" }}
    >
      <HomeBanner />
      <HomeBookItemListHeader />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        onRefresh={() => {}}
        refreshing={false}
        data={books}
        renderItem={({ item }) => <HomeBookItem book={item} />}
      />
    </View>
  );
}
