import React from "react";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  View,
  useColorMode,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../../pages/navigation";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function KanjiCardItemListHeader() {
  const navigation = useNavigation<StackNavigationProp>();
  const [showDetail, setShowDetail] = React.useState(true);
  const { colorMode } = useColorMode();

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
          초등학교 1학년 한자
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
              일본 필수 상용한자 80자 수록
            </Text>
            <Text
              color="coolGray.700"
              _dark={{
                color: "coolGray.200",
              }}
            >
              {"선택한 한자: "}
              <Text
                fontWeight="bold"
                color="info.700"
                _dark={{ color: "info.200" }}
              >
                {"0"}
              </Text>
              {"개"}
            </Text>
          </Flex>

          <Divider
            thickness={2}
            mt={2}
            mb={2}
            _dark={{
              bg: "coolGray.200",
            }}
          />
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Text
              w="50%"
              color="coolGray.700"
              _dark={{
                color: "coolGray.200",
              }}
            >
              1 회독 완료:{" "}
              <Text
                bold
                color="info.700"
                _dark={{
                  color: "info.200",
                }}
              >
                0
              </Text>
              개
            </Text>
            <Text
              w="50%"
              color="coolGray.700"
              _dark={{
                color: "coolGray.200",
              }}
            >
              2 회독 완료:{" "}
              <Text
                color="info.700"
                bold
                _dark={{
                  color: "info.200",
                }}
              >
                0
              </Text>
              개
            </Text>
            <Text
              w="50%"
              color="coolGray.700"
              _dark={{
                color: "coolGray.200",
              }}
            >
              3 회독 완료:{" "}
              <Text
                color="info.700"
                bold
                _dark={{
                  color: "info.200",
                }}
              >
                0
              </Text>
              개
            </Text>
            <Text
              w="50%"
              color="coolGray.700"
              _dark={{
                color: "coolGray.200",
              }}
            >
              4 회독 이상:{" "}
              <Text
                color="info.700"
                bold
                _dark={{
                  color: "info.200",
                }}
              >
                0
              </Text>
              개
            </Text>
          </View>

          <View>
            <Flex direction="row" mt={4}>
              <Button
                w="100%"
                size="md"
                colorScheme="info"
                leftIcon={<Ionicon name="school" color="white" size={20} />}
                onPress={() => {
                  navigation.navigate("Learning");
                }}
              >
                학습 시작
              </Button>
            </Flex>
          </View>
        </View>
      )}
    </View>
  );
}
