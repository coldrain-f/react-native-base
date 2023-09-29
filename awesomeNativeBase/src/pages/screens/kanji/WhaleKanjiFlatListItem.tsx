import React from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Box,
  Flex,
  Text,
  Divider,
  Checkbox,
  Button,
  useColorMode,
  Link,
  Modal,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import type { StackNavigationProp } from "../../navigation";
import type { KanjiType } from "../../../@types/kanjiType";

interface Props {
  kanji: KanjiType;
}

export default function WhaleKanjiFlatListItem({ kanji }: Props) {
  const { colorMode } = useColorMode();
  const navigation = useNavigation<StackNavigationProp>();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showOn, setShowOn] = React.useState<boolean>(false);
  const [showKun, setShowKun] = React.useState<boolean>(false);

  React.useEffect(() => {}, [kanji.id]);

  return (
    <Box
      bg={"coolGray.100"}
      style={{
        transform: [{ scale: 1 }],
      }}
      my="2"
      pt="2"
      pb="2"
      borderWidth={1}
      borderColor="coolGray.300"
      shadow={3}
      _dark={{
        bg: "#171E2E",
        borderColor: "coolGray.700",
        borderWidth: 1,
      }}
    >
      <Flex direction="row">
        {/* 한자 표시 Grid */}
        <View pl={5} w="25%">
          <Text
            color="coolGray.700"
            fontWeight="bold"
            fontSize="4xl"
            _dark={{
              color: "warmGray.100",
            }}
          >
            {kanji.kanji}
          </Text>
          <Text
            color="coolGray.700"
            fontWeight="bold"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {kanji.meaning.split(" ")[0] + " "}
            <Text
              color="primary.700"
              fontWeight="bold"
              _dark={{
                color: "primary.200",
              }}
            >
              {kanji.meaning.split(" ")[1]}
            </Text>
          </Text>
          <Text>획수: {kanji.strokeCount}획</Text>
        </View>
        <Divider
          thickness={1}
          mx={2}
          orientation="vertical"
          _dark={{
            backgroundColor: "warmGray.200",
          }}
        />
        {/* 음독, 훈독 Grid */}
        <View p={2} ml={1} w="60%">
          {/* 음독 */}
          {showOn ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setShowOn(false)}
            >
              <Flex direction="row" pb={1} w="100%">
                <Text
                  fontWeight="bold"
                  color="coolGray.700"
                  fontSize="md"
                  w="100%"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  음독:{" "}
                  <Text fontWeight="medium">{kanji.onYomi.join(", ")}</Text>
                </Text>
              </Flex>
            </TouchableOpacity>
          ) : (
            <Flex direction="row" pb={1} w="100%">
              <View>
                <Text
                  fontWeight="bold"
                  color="coolGray.700"
                  fontSize="md"
                  w="100%"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  음독:{" "}
                </Text>
              </View>
              {/* 음독 숨기기 아이콘 */}
              <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={0.8}
                onPress={() => setShowOn(true)}
              >
                <View
                  flex={1}
                  bg="coolGray.200"
                  alignItems="center"
                  _dark={{
                    bg: "#0369a1",
                  }}
                >
                  <Ionicon
                    name="eye"
                    color={colorMode === "light" ? "gray" : "white"}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            </Flex>
          )}

          {/* 훈독 */}
          {showKun ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setShowKun(false)}
            >
              <Flex direction="row" pb={1} w="100%">
                <Text
                  fontWeight="bold"
                  color="coolGray.700"
                  fontSize="md"
                  w="100%"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  훈독:{" "}
                  <Text fontWeight="medium">{kanji.kunYomi.join(", ")}</Text>
                </Text>
              </Flex>
            </TouchableOpacity>
          ) : (
            <Flex direction="row" pb={1} w="100%">
              <View>
                <Text
                  fontWeight="bold"
                  color="coolGray.700"
                  fontSize="md"
                  w="100%"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  훈독:{" "}
                </Text>
              </View>
              {/* 훈독 숨기기 아이콘 */}
              <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={0.8}
                onPress={() => setShowKun(true)}
              >
                <View
                  flex={1}
                  bg="coolGray.200"
                  alignItems="center"
                  _dark={{
                    bg: "#0369a1",
                  }}
                >
                  <Ionicon
                    name="eye"
                    color={colorMode === "light" ? "gray" : "white"}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            </Flex>
          )}
          {/* 회독 수, 포함 단어 Grid */}
          <Flex direction="row" mt={3.5} flexWrap="wrap" w="100%">
            <View flexDirection="row" flexWrap="wrap" w="45%">
              <Text
                fontWeight="bold"
                color="info.700"
                pr={1}
                _dark={{
                  color: "info.200",
                }}
              >
                {kanji.readCount}
              </Text>
              <Link
                _text={{
                  color: "info.700",
                  _dark: {
                    color: "info.200",
                  },
                }}
                onPress={() => {
                  setShowModal(true);
                }}
              >
                회독 완료
              </Link>
              {/* History Modal */}
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content>
                  <Modal.CloseButton />
                  <Modal.Header>회독 히스토리</Modal.Header>
                  <Modal.Body>
                    <ScrollView h="120px">
                      <Flex direction="column">
                        {[
                          { readCount: 1, time: "01시간 56분 16초" },
                          { readCount: 2, time: "00시간 45분 04초" },
                          { readCount: 3, time: "00시간 07분 27초" },
                          { readCount: 4, time: "00시간 05분 12초" },
                        ].map((data) => (
                          <Flex
                            direction="row"
                            flexWrap="wrap"
                            key={data.readCount}
                            justifyContent="space-around"
                            m={1}
                          >
                            <Text
                              fontWeight="bold"
                              color="coolGray.700"
                              marginRight={2}
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {data.readCount}회독:
                            </Text>
                            <Text
                              color="coolGray.700"
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {data.time}
                            </Text>
                          </Flex>
                        ))}
                      </Flex>
                    </ScrollView>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      w="100%"
                      colorScheme="info"
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      확인
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </View>
            <View flexDirection="row" flexWrap="wrap" w="55%">
              <Text
                pr={1}
                color="coolGray.700"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                포함 단어:
              </Text>
              <Text
                fontWeight="bold"
                color="info.700"
                _dark={{
                  color: "info.200",
                }}
              >
                {kanji.wordCount}
              </Text>
              <Text
                color="coolGray.700"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                개
              </Text>
            </View>
          </Flex>
        </View>

        {/* 한자 체크박스 Grid */}
        <Flex pt={2} direction="column" alignItems="center">
          <Checkbox
            size="md"
            value="0"
            accessibilityLabel="This is a checkbox"
            mt={0.5}
          />
        </Flex>
      </Flex>

      <Flex
        direction="row"
        justifyContent="space-around"
        mt={2}
        flexWrap="wrap"
      >
        <Button
          w="92.5%"
          mb={2}
          size="md"
          variant="outline"
          colorScheme="info"
          onPress={() => {
            navigation.navigate("Word");
          }}
          rightIcon={
            <Ionicon
              name="caret-forward-circle-outline"
              color={colorMode === "light" ? "#0369a1" : "white"}
              size={20}
            />
          }
        >
          <Text
            color="info.700"
            fontWeight="bold"
            _dark={{
              color: "warmGray.200",
            }}
          >
            단어 목록 보러가기
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}
