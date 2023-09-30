import React from "react";
import { Flex, Heading, Text, View, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";
import type { Book } from "../../../@types/bookType";
import Ionicon from "react-native-vector-icons/Ionicons";

interface Props {
  book: Book;
}

export default function WhaleCategoryHeader(props: Props) {
  const [showDetail, setShowDetail] = React.useState(true);
  const { colorMode } = useColorMode();
  const { book } = props;

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
      <View flexDirection="row">
        <Heading
          size="sm"
          color="primary.900"
          _dark={{
            color: "info.200",
          }}
          w="80%"
        >
          {book.title}
        </Heading>
        <View w="20%" alignItems="flex-end">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShowDetail(!showDetail);
            }}
          >
            {/* #111825: coolGray.900 */}
            <Ionicon
              name={showDetail ? "caret-down-outline" : "caret-up-outline"}
              color={colorMode === "light" ? "#374151" : "#f3f4f6"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      {showDetail && (
        <View>
          <Flex direction="row" justifyContent="space-between" mt={1}>
            <Text
              color="coolGray.700"
              _dark={{
                color: "coolGray.200",
              }}
            >
              일본 초등학교 필수 상용한자 1026자 수록
            </Text>
          </Flex>
        </View>
      )}
    </View>
  );
}
