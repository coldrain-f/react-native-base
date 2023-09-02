import React from "react";
import { View } from "native-base";
import KanjiCardItem from "../../../components/kanji/KanjiCardItem";
import KanjiCardItemListHeader from "../../../components/kanji/KanjiCardItemListHeader";

interface KanjiType {
  id: number;
  kanji: string;
  meaning: string;
  onYomi: string[];
  kunYomi: string[];
  readCount: number;
  wordCount: number;
  strokeCount: number;
}

export default function Word(): React.JSX.Element {
  const [kanjiList, setKanjiList] = React.useState<KanjiType[]>([]);

  const fetchBooks = (): KanjiType[] => {
    return require("./kanjis");
  };

  React.useEffect((): void => {
    setKanjiList(fetchBooks());
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
      <KanjiCardItemListHeader />
      {kanjiList.map((kanji) => (
        <KanjiCardItem key={kanji.id} />
      ))}
    </View>
  );
}
