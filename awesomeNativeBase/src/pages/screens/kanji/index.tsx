import { View } from "native-base";
import KanjiCardItem from "../../../components/kanji/KanjiCardItem";
import KanjiCardItemListHeader from "../../../components/kanji/KanjiCardItemListHeader";

export default function Word(): React.JSX.Element {
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
      <KanjiCardItem />
    </View>
  );
}
