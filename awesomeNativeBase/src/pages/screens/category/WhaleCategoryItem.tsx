import React from "react";
import {
  Box,
  Pressable,
  Text,
  Flex,
  useColorMode,
  View,
  Link,
  Modal,
  Button,
  ScrollView,
} from "native-base";
import type { StackNavigationProp } from "../../navigation";
import type { CategoryType } from "../../../@types/categoryType";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  category: CategoryType;
}

export default function WhaleCategoryItem(props: Props) {
  const navigation = useNavigation<StackNavigationProp>();
  const { colorMode } = useColorMode();
  const { category } = props;

  const [showPreviewModal, setShowPreviewModal] = React.useState(false);
  const [showLearningHistoryModal, setShowLearningHistoryModal] =
    React.useState(false);

  return (
    <Pressable
      my="2"
      onPress={() => {
        navigation.navigate("Kanji");
      }}
    >
      {({ isPressed }) => {
        return (
          <Box
            bg={isPressed ? "coolGray.200" : "coolGray.100"}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            p="5"
            borderWidth={1}
            borderColor="coolGray.300"
            shadow={3}
            _dark={{
              bg: "#171E2E",
              borderColor: "coolGray.700",
              borderWidth: 1,
            }}
          >
            <Flex direction="row" flexWrap="wrap">
              <View w="70%">
                {/* Begin:: 카테고리 제목 */}
                <Text
                  color="coolGray.700"
                  fontWeight="bold"
                  fontSize="md"
                  _dark={{
                    color: "coolGray.100",
                  }}
                >
                  {category.subject}
                </Text>
                {/* End:: 카테고리 제목 */}

                {/* Begin:: 카테고리 서브 제목 */}
                <Text
                  color="coolGray.700"
                  _dark={{
                    color: "coolGray.200",
                  }}
                >
                  일본 필수 상용한자 {category.totalCount}자 수록
                </Text>
                {/* End:: 카테고리 서브 제목 */}

                <View
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  {/* Begin:: 한자 미리보기 링크 */}
                  <Link
                    _text={{
                      color: "info.700",
                      _dark: {
                        color: "info.200",
                      },
                    }}
                    onPress={() => {
                      setShowPreviewModal(true);
                    }}
                  >
                    漢字 미리보기
                  </Link>
                  {/* End:: 한자 미리보기 링크 */}

                  {/* Begin:: 학습 상태 */}
                  <Link
                    _text={{
                      color: "info.700",
                      _dark: {
                        color: "info.200",
                      },
                    }}
                    onPress={() => {
                      setShowLearningHistoryModal(true);
                    }}
                  >
                    학습 진행중
                  </Link>
                  {/* End:: 학습 상태 */}

                  {/* Begin:: 한자 미리보기 모달 */}
                  <Modal
                    isOpen={showPreviewModal}
                    onClose={() => setShowPreviewModal(false)}
                  >
                    <Modal.Content maxH={320}>
                      <Modal.CloseButton />
                      <Modal.Header>漢字 미리보기</Modal.Header>
                      <Modal.Body>
                        <View flexDirection="row" mb={3}>
                          <Text w="80%" color="coolGray.700" bold>
                            초등학교 1학년 한자
                          </Text>
                          <Text w="20%" color="coolGray.700" textAlign="right">
                            80자
                          </Text>
                        </View>
                        <ScrollView>
                          <View flexDirection="row" flexWrap="wrap">
                            {[
                              { kanji: "一", meaning: "한 일" },
                              { kanji: "二", meaning: "두 이" },
                              { kanji: "三", meaning: "석 삼" },
                              { kanji: "四", meaning: "넉 사" },
                              { kanji: "五", meaning: "다섯 오" },
                              { kanji: "六", meaning: "여섯 육" },
                              { kanji: "七", meaning: "일곱 칠" },
                              { kanji: "八", meaning: "여덟 팔" },
                              { kanji: "九", meaning: "아홉 구" },
                            ].map((data, index) => (
                              <View
                                key={index}
                                borderWidth={1}
                                borderLeftWidth={index % 4 === 0 ? 1 : 0}
                                borderTopWidth={index >= 4 ? 0 : 1}
                                borderColor="coolGray.300"
                                alignItems="center"
                                w="25%"
                              >
                                <View>
                                  <Text fontSize="2xl" color="coolGray.700">
                                    {data.kanji}
                                  </Text>
                                </View>
                                <View
                                  borderTopWidth={1}
                                  borderColor="coolGray.300"
                                  alignItems="center"
                                  w="100%"
                                >
                                  <Text color="coolGray.700">
                                    {data.meaning}
                                  </Text>
                                </View>
                              </View>
                            ))}
                          </View>
                        </ScrollView>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button.Group space={2}>
                          <Button
                            w="100%"
                            colorScheme="info"
                            onPress={() => {
                              setShowPreviewModal(false);
                            }}
                          >
                            확인
                          </Button>
                        </Button.Group>
                      </Modal.Footer>
                    </Modal.Content>
                  </Modal>
                  {/* End:: 한자 미리보기 모달 */}

                  {/* Begin:: 학습 이력 모달 - 학습 진행중인 경우만 표시 */}
                  <Modal
                    isOpen={showLearningHistoryModal}
                    onClose={() => setShowLearningHistoryModal(false)}
                  >
                    <Modal.Content maxH={320}>
                      <Modal.CloseButton />
                      <Modal.Header>학습 이력</Modal.Header>
                      <Modal.Body>
                        <ScrollView></ScrollView>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button.Group space={2}>
                          <Button
                            w="100%"
                            colorScheme="info"
                            onPress={() => {
                              setShowLearningHistoryModal(false);
                            }}
                          >
                            확인
                          </Button>
                        </Button.Group>
                      </Modal.Footer>
                    </Modal.Content>
                  </Modal>
                  {/* End:: 학습 이력 모달 - 학습 진행중인 경우만 표시 */}
                </View>
              </View>

              {/* Begin:: 이동 아이콘 */}
              <View w="30%" flexDirection="row" justifyContent="flex-end">
                <Icon
                  name="arrow-forward-circle-outline"
                  // #374151: coolGray.700, #f3f4f6: coolGray.100
                  color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                  size={24}
                />
              </View>
              {/* End:: 이동 아이콘 */}
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
}
