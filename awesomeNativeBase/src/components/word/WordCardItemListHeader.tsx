import React from "react";
import {
  View,
  Flex,
  Text,
  Divider,
  Button,
  Link,
  Modal,
  ScrollView,
  useColorMode,
} from "native-base";

export default function WordCardItemListHeader(): React.JSX.Element {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <View
      p={2}
      mb={4}
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{
        bg: "#171E2E",
        borderColor: "white",
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
            人
          </Text>
          <Text
            color="coolGray.700"
            fontWeight="bold"
            _dark={{
              color: "warmGray.200",
            }}
          >
            사람{" "}
            <Text
              color="primary.700"
              fontWeight="bold"
              _dark={{
                color: "primary.200",
              }}
            >
              인
            </Text>
          </Text>
          <Text>획수: 2획</Text>
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
              음독: <Text fontWeight="medium">じん, にん</Text>
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
              훈독: <Text fontWeight="medium">ひと</Text>
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
                0
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
                10
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
      </Flex>
    </View>
  );
}
