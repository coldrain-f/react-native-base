import React from "react";
import {
  Box,
  FlatList,
  Flex,
  Heading,
  Progress,
  Spinner,
  Text,
  View,
  HStack,
} from "native-base";
import CategoryItem from "../../../components/CategoryItem";
import type { CategoryType } from "../../../@types/categoryType";
import type { CategoryProps } from "../../navigation";
import type { Book } from "../../../@types/bookType";

interface CategoryItemListHeaderProps {
  book: Book;
  learningFinishedCount: number;
  learningTotalCount: number;
}

function CategoryItemListHeader({
  book,
  learningFinishedCount,
  learningTotalCount,
}: CategoryItemListHeaderProps): React.JSX.Element {
  return (
    <View
      p="5"
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "white",
      }}
    >
      <Text
        color="primary.900"
        fontWeight="bold"
        fontSize="lg"
        _dark={{
          color: "white",
        }}
      >
        {book.title}
      </Text>
      <Text
        color="coolGray.900"
        fontSize="md"
        mb="1"
        _dark={{
          color: "coolGray.100",
        }}
      >
        학습 진척도:{" "}
        {((learningFinishedCount / learningTotalCount) * 100).toFixed(1)}%
      </Text>
      <Flex direction="row">
        <Box w="60%" mt="2">
          <Progress
            colorScheme="info"
            value={(learningFinishedCount / learningTotalCount) * 100}
            size="sm"
          />
        </Box>
        <Box w="26%" ml="3">
          <Text
            color="coolGray.900"
            _dark={{
              color: "coolGray.100",
            }}
          >
            {learningFinishedCount} / {learningTotalCount}자
          </Text>
        </Box>
      </Flex>
    </View>
  );
}

export default function Category({
  navigation,
  route,
}: CategoryProps): React.JSX.Element {
  const { book } = route.params;

  const [categories, setCategories] = React.useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [learningFinishedCount, setLearningFinishedCount] =
    React.useState<number>(0);

  const [learningTotalCount, setLearningTotalCount] = React.useState<number>(0);

  const fetchCategories = (): CategoryType[] => {
    return require("./categories");
  };

  React.useEffect((): void => {
    setCategories(fetchCategories());
    setLearningFinishedCount(207);
    setLearningTotalCount(1026);
    setIsLoading(false);
  }, []);

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
          <CategoryItemListHeader
            book={book}
            learningFinishedCount={learningFinishedCount}
            learningTotalCount={learningTotalCount}
          />
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => {}}
            refreshing={false}
            data={categories}
            renderItem={({ item }) => <CategoryItem category={item} />}
          />
        </>
      )}
    </View>
  );
}
