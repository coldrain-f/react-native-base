import React from "react";
import { useNavigation } from "@react-navigation/native";
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
  HStack,
  VStack,
} from "native-base";
import { StackNavigationProp } from "../../pages/navigation";
import { KanjiType } from "../../@types/kanjiType";
import Ionicon from "react-native-vector-icons/Ionicons";

interface Props {
  kanji: KanjiType;
}

export default function KanjiCardItem({ kanji }: Props): React.JSX.Element {
  const { colorMode } = useColorMode();
  const navigation = useNavigation<StackNavigationProp>();
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <Box
      w="100%"
      bg={"coolGray.100"}
      style={{
        transform: [
          {
            scale: 1,
          },
        ],
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
          <Flex direction="row" pb={1}>
            <Text
              fontWeight="bold"
              color="coolGray.700"
              fontSize="md"
              w="100%"
              _dark={{ color: "warmGray.200" }}
            >
              음독: <Text fontWeight="medium">{kanji.onYomi.join(", ")}</Text>
            </Text>
          </Flex>
          <Flex direction="row">
            <Text
              fontWeight="bold"
              color="coolGray.700"
              fontSize="md"
              w="100%"
              _dark={{
                color: "warmGray.200",
              }}
            >
              훈독: <Text fontWeight="medium">{kanji.kunYomi.join(", ")}</Text>
            </Text>
          </Flex>
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
      <Flex direction="row" justifyContent="space-around" mt={2}>
        <Button
          w="92.5%"
          size="md"
          variant="outline"
          colorScheme="info"
          onPress={() => {
            navigation.navigate("Word");
          }}
          rightIcon={
            <Ionicon
              name="file-tray-full-outline"
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
            포함 된 단어 상세보기
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}
