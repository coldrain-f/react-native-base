import { View } from "native-base";
import KanjiCardItem from "../../../components/kanji/KanjiCardItem";

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
      <KanjiCardItem />
    </View>
  );
}
