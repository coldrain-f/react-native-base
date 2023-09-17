import React from "react";
import {
  Box,
  Pressable,
  Text,
  Flex,
  useColorMode,
  View,
  Modal,
  Button,
  ScrollView,
} from "native-base";
import type { StackNavigationProp } from "../../navigation";
import type { CategoryType } from "../../../@types/categoryType";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";

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
              </View>

              {/* Begin:: 이동 아이콘 */}
              <View w="30%" flexDirection="row" justifyContent="flex-end">
                <Ionicon
                  name="caret-forward-circle-outline"
                  // #374151: coolGray.700, #f3f4f6: coolGray.100
                  color={colorMode === "light" ? "#374151" : "#f3f4f6"}
                  size={24}
                />
              </View>
              {/* End:: 이동 아이콘 */}
            </Flex>

            <View
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="flex-start"
              mt={4}
            >
              {/* Begin:: 한자 미리보기 링크 */}
              <Button
                w="48%"
                size="sm"
                colorScheme={colorMode === "light" ? "blue" : "darkBlue"}
                variant="solid"
                mr={3}
                onPress={() => {
                  setShowPreviewModal(true);
                }}
              >
                漢字 미리보기
              </Button>
              {/* End:: 한자 미리보기 링크 */}

              {/* Begin:: 학습 상태 */}
              <Button
                w="48%"
                size="sm"
                colorScheme={colorMode === "light" ? "blue" : "darkBlue"}
                variant="solid"
                leftIcon={
                  <Ionicon
                    name="list-outline"
                    color={colorMode === "light" ? "#bae6fd" : "#bae6fd"}
                    size={20}
                  />
                }
                onPress={() => {
                  setShowLearningHistoryModal(true);
                }}
              >
                학습 이력
              </Button>
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
                      <Text
                        w="80%"
                        color={
                          colorMode === "light"
                            ? "coolGray.700"
                            : "coolGray.100"
                        }
                        bold
                      >
                        초등학교 1학년 한자
                      </Text>
                      <Text
                        w="20%"
                        color={
                          colorMode === "light"
                            ? "coolGray.700"
                            : "coolGray.100"
                        }
                        textAlign="right"
                      >
                        80자
                      </Text>
                    </View>
                    <ScrollView>
                      <View flexDirection="row" flexWrap="wrap">
                        {/* kunYomi: 훈독, onYomi: 음독 */}
                        {[
                          { kanji: "一", kunYomi: "한", onYomi: "일" },
                          { kanji: "二", kunYomi: "두", onYomi: "이" },
                          { kanji: "三", kunYomi: "석", onYomi: "삼" },
                          { kanji: "四", kunYomi: "넉", onYomi: "사" },
                          { kanji: "五", kunYomi: "다섯", onYomi: "오" },
                          { kanji: "六", kunYomi: "여섯", onYomi: "육" },
                          { kanji: "七", kunYomi: "일곱", onYomi: "칠" },
                          { kanji: "八", kunYomi: "여덟", onYomi: "팔" },
                          { kanji: "九", kunYomi: "아홉", onYomi: "구" },
                        ].map((data, index) => (
                          <View
                            key={index}
                            borderWidth={1}
                            borderLeftWidth={index % 4 === 0 ? 1 : 0}
                            borderTopWidth={index >= 4 ? 0 : 1}
                            borderColor={
                              colorMode === "light"
                                ? "coolGray.300"
                                : "coolGray.100"
                            }
                            alignItems="center"
                            w="25%"
                          >
                            <View>
                              <Text
                                fontSize="2xl"
                                color={
                                  colorMode === "light"
                                    ? "coolGray.700"
                                    : "coolGray.100"
                                }
                              >
                                {data.kanji}
                              </Text>
                            </View>
                            <View
                              borderTopWidth={1}
                              borderColor="coolGray.300"
                              alignItems="center"
                              w="100%"
                            >
                              <Text
                                color={
                                  colorMode === "light"
                                    ? "coolGray.700"
                                    : "coolGray.100"
                                }
                              >
                                {data.kunYomi}{" "}
                                <Text
                                  color={
                                    colorMode === "light"
                                      ? "info.700"
                                      : "info.200"
                                  }
                                >
                                  {data.onYomi}
                                </Text>
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
          </Box>
        );
      }}
    </Pressable>
  );
}
