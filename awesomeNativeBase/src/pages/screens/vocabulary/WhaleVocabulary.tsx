import React from "react";
import { View } from "native-base";
import type { WhaleVocabularyProps } from "../../bottomNavigation";
import WhaleVocabularyBanner from "./WhaleVocabularyBanner";
import WhaleVocabularyTabView from "./WhaleVocabularyTabView";

export default function WhaleVocabulary({ navigation }: WhaleVocabularyProps) {
  return (
    <View
      flex={1}
      bg="warmGray.100"
      _dark={{
        bg: "#0F172A",
      }}
    >
      <WhaleVocabularyBanner />
      <WhaleVocabularyTabView />
    </View>
  );
}
