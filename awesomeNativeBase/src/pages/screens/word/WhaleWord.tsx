import React from "react";
import { View, HStack, Spinner, Heading } from "native-base";
import WhaleWordHeader from "./WhaleWordHeader";
import WhaleWordFlatListItem from "./WhaleWordFlatListItem";

export default function WhaleWord() {
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
          <WhaleWordHeader />
          <WhaleWordFlatListItem />
        </>
      )}
    </View>
  );
}
