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
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Furi from "../../../components/common/Furi";

export default function WhaleLearningFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  const flipAnimation = React.useRef(new Animated.Value(0)).current;
  const { colorMode } = useColorMode();

  const flipCard = () => {
    setIsFlipped(!isFlipped);

    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const interpolateRotationFront = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const interpolateRotationBack = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const frontStyle = {
    transform: [{ rotateY: interpolateRotationFront }],
  };

  const backStyle = {
    transform: [{ rotateY: interpolateRotationBack }],
  };

  const styles = StyleSheet.create({
    touchableOpacity: {
      flex: 1,
    },
    card: {
      flex: 1,
      padding: 19,
      backfaceVisibility: "hidden",
      position: "absolute",
      height: "100%",
    },
  });

  return (
    <TouchableOpacity
      onPress={flipCard}
      style={styles.touchableOpacity}
      activeOpacity={1}
    >
      <View
        flex={1}
        alignItems="center"
        bg="coolGray.100"
        _dark={{
          bg: "#171E2E",
        }}
      >
        {/* 문제 표시 - Face */}
        <Animated.View
          style={[styles.card, frontStyle, { zIndex: isFlipped ? 0 : 1 }]}
        >
          <View h="100%">
            <View
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              {/* 문제 Label */}
              <View w="50%" pt={2}>
                <Text
                  color="info.700"
                  bold
                  _dark={{
                    color: "info.200",
                  }}
                >
                  문제
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
                      color={colorMode === "light" ? "#0369a1" : "#f3f4f6"}
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
                      color={colorMode === "light" ? "#0369a1" : "#f3f4f6"}
                      size={20}
                    />
                  }
                />
              </View>
            </View>
            <Divider mb={2} mt={2} />
            <Center flex={1}>
              <Furi
                furiData={[{ word: "難解", furi: "なんかい" }]}
                showFuri={false}
                fontSize={38}
                color="coolGray.700"
              />
              <Heading color="coolGray.700" fontWeight="normal">
                {" "}
              </Heading>
            </Center>
            <View flex={1} justifyContent="flex-end" mb={10}>
              {/* 외웠어요 버튼 */}
              <VStack>
                <Button
                  colorScheme="info"
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
                  colorScheme="danger"
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
                      color={colorMode === "light" ? "#0369a1" : "#f3f4f6"}
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
                      color={colorMode === "light" ? "#0369a1" : "#f3f4f6"}
                      size={20}
                    />
                  }
                />
              </View>
            </View>
            <Divider mb={2} mt={2} />
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
                  colorScheme="info"
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
                  colorScheme="danger"
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
      </View>
    </TouchableOpacity>
  );
}
