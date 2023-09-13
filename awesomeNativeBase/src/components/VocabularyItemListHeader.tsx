import React from "react";
import { Box, Flex, Progress, Text, View, useColorMode } from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface Props {
  learningFinishedCount: number;
  learningTotalCount: number;
}

export default function VocabularyItemListHeader(props: Props) {
  const { learningFinishedCount, learningTotalCount } = props;
  const { colorMode } = useColorMode();
  const [showDetail, setShowDetail] = React.useState<boolean>(true);

  return (
    <View
      p={5}
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "white",
      }}
    >
      {/* Title */}
      <View flexDirection="row">
        <Text
          color="primary.900"
          fontWeight="bold"
          fontSize="lg"
          _dark={{
            color: "white",
          }}
        >
          {"일본어 상용한자 2136"}
        </Text>
        <View flex={1} alignItems="flex-end">
          {/* Toggle(show, hide) Detail Icon */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShowDetail(!showDetail);
            }}
          >
            <Ionicon
              name="caret-down-outline"
              // #374151: coolGray.700, #f3f4f6: coolGray.100
              color={colorMode === "light" ? "#374151" : "#f3f4f6"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Detail - 진척도 */}
      {showDetail && (
        <View>
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
      )}
    </View>
  );
}
