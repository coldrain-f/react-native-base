import React from "react";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  View,
  useColorMode,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import type { StackNavigationProp } from "../../navigation";

export default function WhaleKanjiHeader() {
  const navigation = useNavigation<StackNavigationProp>();
  const [showDetail, setShowDetail] = React.useState(true);
  const { colorMode } = useColorMode();

  return (
    <View
      p="5"
      // 디자인 피드백 반영
      // 여기선 한자가 가려지므로 쉐도우대신 border 반영
      borderBottomWidth={0.5}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "coolGray.700",
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
            thickness={1}
            mt={2}
            mb={2}
            _dark={{
              // 디자인 피드백 반영
              bg: "coolGray.800",
            }}
          />
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 3,
                width: "18%",
                backgroundColor: colorMode === "light" ? "#e5e7eb" : "#0f172a",
              }}
            >
              <View alignItems="center">
                <Text
                  // 디자인 피드백 반영
                  bold
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  一 회독
                </Text>

                <Text
                  color="primary.700"
                  _dark={{
                    color: "primary.500",
                  }}
                  bold
                  fontSize="xl"
                >
                  0<Text fontSize="sm">개</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 3,
                width: "18%",
                backgroundColor: colorMode === "light" ? "#e5e7eb" : "#0f172a",
              }}
            >
              <View alignItems="center">
                <Text
                  // 디자인 피드백 반영
                  bold
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  二 회독
                </Text>

                <Text
                  color="primary.700"
                  _dark={{
                    color: "primary.500",
                  }}
                  bold
                  fontSize="xl"
                >
                  0<Text fontSize="sm">개</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 3,
                width: "18%",
                backgroundColor: colorMode === "light" ? "#e5e7eb" : "#0f172a",
              }}
            >
              <View alignItems="center">
                <Text
                  // 디자인 피드백 반영
                  bold
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  三 회독
                </Text>

                <Text
                  color="primary.700"
                  _dark={{
                    color: "primary.500",
                  }}
                  bold
                  fontSize="xl"
                >
                  0<Text fontSize="sm">개</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 3,
                width: "18%",
                backgroundColor: colorMode === "light" ? "#e5e7eb" : "#0f172a",
              }}
            >
              <View alignItems="center">
                <Text
                  // 디자인 피드백 반영
                  bold
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  四 회독
                </Text>

                <Text
                  color="primary.700"
                  _dark={{
                    color: "primary.500",
                  }}
                  bold
                  fontSize="xl"
                >
                  79<Text fontSize="sm">개</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 3,
                width: "24%",
                backgroundColor: colorMode === "light" ? "#e5e7eb" : "#0f172a",
              }}
            >
              <View alignItems="center">
                <Text
                  // 디자인 피드백 반영
                  bold
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  五 회독 上
                </Text>

                <Text
                  color="primary.700"
                  _dark={{
                    color: "primary.500",
                  }}
                  bold
                  fontSize="xl"
                >
                  0<Text fontSize="sm">개</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Flex direction="row" mt={4}>
              <Button
                w="100%"
                size="md"
                colorScheme="info"
                leftIcon={<Ionicon name="school" color="white" size={20} />}
                onPress={() => {
                  navigation.navigate("WhaleLearning");
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
