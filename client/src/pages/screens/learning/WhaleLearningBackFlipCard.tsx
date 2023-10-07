import React from "react";
import {
  Button,
  Center,
  Divider,
  Heading,
  Text,
  VStack,
  View,
  useColorMode,
} from "native-base";
import { Animated, StyleSheet } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Furi from "../../../components/common/Furi";

interface Props {
  isFlipped: boolean;
  flipAnimation: Animated.Value;
}

export default function WhaleLearningBackFlipCard(props: Props) {
  const { isFlipped, flipAnimation } = props;
  const { colorMode } = useColorMode();

  const interpolateRotationBack = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const backStyle = {
    transform: [{ rotateY: interpolateRotationBack }],
  };

  const styles = StyleSheet.create({
    card: {
      flex: 1,
      padding: 19,
      backfaceVisibility: "hidden",
      position: "absolute",
      height: "100%",
    },
  });

  return (
    <>
      {/* 정답 표시 - Back */}
      <Animated.View
        style={[styles.card, backStyle, { zIndex: isFlipped ? 1 : 0 }]}
      >
        <View h="100%">
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {/* 정답 Label */}
            <View w="50%" pt={2}>
              <Text
                color="info.700"
                bold
                _dark={{
                  color: "info.200",
                }}
              >
                정답
              </Text>
            </View>
            <View w="50%" flexDirection="row" justifyContent="flex-end">
              {/* 듣기 아이콘 */}
              <Button
                variant="outline"
                leftIcon={
                  <Ionicon
                    name="volume-medium-outline"
                    // #e7e5e4: warmGray.200
                    // #f3f4f6: coolGray.100
                    // 디자인 피드백 반영
                    color={colorMode === "light" ? "#0369a1" : "#bae6fd"}
                    size={20}
                  />
                }
              />
              {/* 북마크 아이콘 */}
              <Button
                ml={2}
                variant="outline"
                leftIcon={
                  <Ionicon
                    name="heart-outline"
                    // 디자인 피드백 반영
                    color={colorMode === "light" ? "#0369a1" : "#bae6fd"}
                    size={20}
                  />
                }
              />
            </View>
          </View>
          <Divider
            thickness={0.5}
            mb={2}
            mt={2} // 디자인 피드백 반영
            bg="coolGray.400"
          />
          <Center flex={1}>
            {/* 단어 표시 */}
            <Furi
              furiData={[{ word: "難解", furi: "なんかい" }]}
              showFuri={true}
              fontSize={38}
              color="coolGray.700"
            />
            {/* 뜻 표시 */}
            <Heading
              color="coolGray.700"
              fontWeight="normal"
              _dark={{
                color: "coolGray.100",
              }}
            >
              난해
            </Heading>
          </Center>
          <View flex={1} justifyContent="flex-end" mb={10}>
            {/* 외웠어요 버튼 */}
            <VStack>
              <Button
                // 디자인 피드백 반영
                colorScheme="indigo"
                _dark={{
                  _text: {
                    color: "coolGray.100",
                  },
                }}
                leftIcon={
                  <Ionicon
                    // #f3f4f6: coolGray.100
                    name="chevron-down-circle-outline"
                    color={colorMode === "light" ? "white" : "#f3f4f6"}
                    size={20}
                  />
                }
              >
                외웠어요
              </Button>
            </VStack>
            {/* 모르겠어요 버튼 */}
            <VStack mt={5}>
              <Button
                // 디자인 피드백 반영
                colorScheme="pink"
                _dark={{
                  _text: {
                    color: "#f3f4f6",
                  },
                }}
                leftIcon={
                  <Ionicon
                    name="close-circle-outline"
                    color={colorMode === "light" ? "white" : "#f3f4f6"}
                    size={20}
                  />
                }
              >
                모르겠어요
              </Button>
            </VStack>
          </View>
        </View>
      </Animated.View>
    </>
  );
}
