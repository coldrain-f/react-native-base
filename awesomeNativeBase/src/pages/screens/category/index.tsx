import React from "react";
import { Box, Heading } from "native-base";
import { CategoryProps } from "../../bottomNavigation";
import CategoryItem from "../../../components/CategoryItem";

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { bookTitle } = route.params;

  return (
    <Box bg="warmGray.100" flex={1} safeAreaTop width="100%">
      <CategoryItem onPress={() => {}} />
    </Box>
  );
}
