import React from "react";
import { Box, Heading, View } from "native-base";
import { CategoryProps } from "../../bottomNavigation";
import CategoryItem from "../../../components/CategoryItem";

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { bookTitle } = route.params;

  return (
    <Box bg="warmGray.100" flex={1} width="100%" safeAreaTop>
      <View>
        <Heading size="md" p="5" pb="5" color="primary.900">
          {bookTitle}
        </Heading>
      </View>
      <CategoryItem onPress={() => {}} />
    </Box>
  );
}
