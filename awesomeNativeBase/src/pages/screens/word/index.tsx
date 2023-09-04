import React from "react";
import { View, HStack, Spinner, Heading } from "native-base";
import WordCardItemListHeader from "../../../components/word/WordCardItemListHeader";
import WordCardItem from "../../../components/word/WordCardItem";

export default function Word() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsLoading(false);
  });

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
          <WordCardItemListHeader />
          <WordCardItem />
        </>
      )}
    </View>
  );
}
