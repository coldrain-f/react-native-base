import { Box, Button, Divider, Flex, Progress, Text, View } from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function KanjiCardItemListHeader(): React.JSX.Element {
  return (
    <View
      p="5"
      mb="4"
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{ bg: "#171E2E", borderColor: "white" }}
    >
      <Text
        color="primary.900"
        fontWeight="bold"
        fontSize="lg"
        _dark={{ color: "white" }}
      >
        {"초등학교 1학년 한자"}
      </Text>
      <Text
        color="coolGray.900"
        fontSize="md"
        mb="1"
        _dark={{ color: "coolGray.100" }}
      >
        학습 진척도: {((77 / 200) * 100).toFixed(1)}%
      </Text>
      <Flex direction="row">
        <Box w="60%" mt={2}>
          <Progress colorScheme="info" value={(77 / 200) * 100} size="sm" />
        </Box>
        <Box w="40%" ml={3}>
          <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
            {77} / {200}자
          </Text>
        </Box>
      </Flex>
      <Flex direction="row" mt={3}>
        <Box w="50%">
          <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
            {"학습완료 단어: "}
            <Text
              fontWeight="bold"
              color="info.700"
              _dark={{ color: "info.200" }}
            >
              {"300"}
            </Text>
            개
          </Text>
        </Box>
        <Box w="50%">
          <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
            {"선택한 한자: "}
            <Text
              fontWeight="bold"
              color="info.700"
              _dark={{ color: "info.200" }}
            >
              {"3"}
            </Text>
            {"개"}
          </Text>
        </Box>
      </Flex>

      <Flex direction="row" mt={4}>
        <Box w="100%">
          <Button
            size="md"
            colorScheme="info"
            leftIcon={<Ionicon name="school" color="white" size={20} />}
          >
            학습 시작
          </Button>
        </Box>
      </Flex>
    </View>
  );
}
