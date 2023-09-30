import React from "react";
import {
  AlertDialog,
  Box,
  Button,
  Flex,
  Progress,
  Text,
  View,
  useColorMode,
} from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "../../navigation";

export default function WhaleLearningHeader() {
  const navigation = useNavigation<StackNavigationProp>();
  const { colorMode } = useColorMode();

  // AlertDialog
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

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
      <Flex direction="row">
        <View w="85%">
          <Text
            color="primary.800"
            fontWeight="bold"
            fontSize="lg"
            _dark={{
              color: "white",
            }}
          >
            {"초등학교 1학년 한자"}
          </Text>
          <Text
            color="coolGray.900"
            fontSize="md"
            mb="1"
            _dark={{
              color: "coolGray.100",
            }}
          >
            학습 진척도: {((3 / 10) * 100).toFixed(1)}%
          </Text>
          <Flex direction="row">
            <Box w="60%" mt={2}>
              <Progress colorScheme="info" value={(3 / 10) * 100} size="sm" />
            </Box>
            <Box w="40%" ml={3}>
              <Text
                color="coolGray.900"
                _dark={{
                  color: "coolGray.100",
                }}
              >
                {3} / {10}개
              </Text>
            </Box>
          </Flex>
          <View
            flexDirection="row"
            justifyContent="space-between"
            mt={3}
            flexWrap="wrap"
          >
            {/* 시도, 외웠어요, 모르겠어요 카운팅 */}
            <View>
              <Text
                color="coolGray.700"
                _dark={{
                  color: "coolGray.100",
                }}
              >
                시도:{" "}
                <Text
                  color="primary.700"
                  bold
                  _dark={{
                    color: "primary.200",
                  }}
                >
                  0
                </Text>
                회
              </Text>
            </View>
            <View>
              <Text
                color="coolGray.700"
                _dark={{
                  color: "coolGray.100",
                }}
              >
                외웠어요:{" "}
                <Text
                  color="info.900"
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
              <Text
                color="coolGray.700"
                _dark={{
                  color: "coolGray.100",
                }}
              >
                모르겠어요:{" "}
                <Text
                  color="rose.900"
                  bold
                  _dark={{
                    color: "rose.200",
                  }}
                >
                  0
                </Text>
                개
              </Text>
            </View>
          </View>
        </View>
        {/* 학습 종료 아이콘*/}
        <View w="15%">
          <Button
            size="sm"
            variant="ghost"
            colorScheme="coolGray"
            rightIcon={
              <Ionicon
                // #111827: coolGray.900
                // #f5f5f4: warmGray.100
                // #f3f4f6: coolGray.100
                name="exit-outline"
                color={colorMode === "light" ? "#111827" : "#f3f4f6"}
                size={20}
              />
            }
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          />
          {/* 학습 종료 AlertDialog */}
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>학습 종료</AlertDialog.Header>
              <AlertDialog.Body>
                <Text
                  color="coolGray.900"
                  _dark={{
                    color: "coolGray.100",
                  }}
                >
                  학습이 진행 중입니다. 지금 종료하면 학습 완료가 되지 않습니다.
                  정말 종료하시겠습니까?
                </Text>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    colorScheme="primary"
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    확인
                  </Button>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    취소
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </View>
      </Flex>
    </View>
  );
}
