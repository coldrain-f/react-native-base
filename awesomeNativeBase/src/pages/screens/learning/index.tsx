import React from "react";
import { HStack, Heading, Spinner, View } from "native-base";
import { LearningProps } from "../../navigation";
import LearningHeader from "../../../components/learning/LearningHeader";
import LearningFlipCard from "../../../components/learning/LearningFlipCard";

export default function Learning(props: LearningProps): React.JSX.Element {
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
          <LearningHeader />
          <View flex={1}>
            <LearningFlipCard />
          </View>
        </>
      )}
    </View>
  );
}
