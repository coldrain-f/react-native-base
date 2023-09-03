import { View } from "native-base";
import WordCardItemListHeader from "../../../components/word/WordCardItemListHeader";
import WordCardItem from "../../../components/word/WordCardItem";

export default function Word() {
  return (
    <View
      bg="warmGray.100"
      width="100%"
      flex={1}
      _dark={{
        bg: "#0F172A",
      }}
    >
      <WordCardItemListHeader />
      <WordCardItem />
    </View>
  );
}
