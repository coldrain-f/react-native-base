import React from "react";
import { HStack, Heading, Spinner, View } from "native-base";
import type { WhaleLearningProps } from "../../navigation";
import WhaleLearningHeader from "./WhaleLearningHeader";
import WhaleLearningFlipCard from "./WhaleLearningFlipCard";

export default function WhaleLearning(props: WhaleLearningProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
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
          <WhaleLearningHeader />
          <View flex={1}>
            <WhaleLearningFlipCard />
          </View>
        </>
      )}
    </View>
  );
}
