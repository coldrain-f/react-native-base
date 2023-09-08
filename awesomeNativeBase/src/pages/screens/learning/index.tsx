import React from "react";
import { Animated, TouchableOpacity } from "react-native";
import { Box, Button, Flex, Text, View, useColorMode } from "native-base";
import { LearningProps } from "../../navigation";
import LearningHeader from "../../../components/learning/LearningHeader";
import Furi from "../../../components/common/Furi";
import Ionicon from "react-native-vector-icons/Ionicons";

const words = [
  { word: "人口", furi: "じんこう", meaning: "인구" },
  { word: "人生", furi: "じんせい", meaning: "인생" },
  { word: "人物", furi: "じんぶつ", meaning: "인물" },
  { word: "人類", furi: "じんるい", meaning: "인류" },
  { word: "偉人", furi: "いじん", meaning: "위인" },
];

export default function Learning({
  navigation,
  route,
}: LearningProps): React.JSX.Element {
  const { colorMode } = useColorMode();
  const [index, setIndex] = React.useState<number>(0);
  const [flipCardStatus, setFlipCardStatus] = React.useState<string>("front");

  // Animation
  const rotateValue = React.useRef<number>(0);
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  animatedValue.addListener(({ value }) => {
    rotateValue.current = value;
  });

  const flipCard = () => {
    if (rotateValue.current >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  const resetCard = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Box
      safeAreaTop
      bg="coolGray.200"
      _dark={{
        bg: "#0F172A",
      }}
    >
      <LearningHeader />
      <View h="100%" position="relative">
        {/* FrontFlipCard */}
        <TouchableOpacity
          onPress={() => flipCard()}
          style={{
            height: "100%",
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
          }}
        >
          <Animated.View
            style={[
              {
                backfaceVisibility: "hidden",
                height: "100%",
              },
              frontAnimatedStyle,
            ]}
          >
            <View
              bg="coolGray.100"
              p={5}
              _dark={{
                bg: "#171E2E",
              }}
            >
              <View h="80%" justifyContent="center" alignItems="center">
                <Flex direction="row" w="100%" mb={3}>
                  <View w="50%">
                    <Text
                      color="info.700"
                      bold
                      ml={7}
                      mt={2}
                      _dark={{
                        color: "info.300",
                      }}
                    >
                      문제
                    </Text>
                  </View>
                  <View w="50%" alignItems="flex-end">
                    <Button
                      w="30%"
                      variant="ghost"
                      leftIcon={
                        <Ionicon name="bookmark" color="#0369a1" size={20} />
                      }
                    />
                  </View>
                </Flex>
                <Furi
                  furiData={[words[index]]}
                  showFuri={false}
                  fontSize={42}
                />
                <Text
                  fontSize="2xl"
                  color="coolGray.700"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {" "}
                </Text>
                <Flex
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="space-around"
                  bg="coolGray.100"
                  borderColor="warmGray.200"
                  mt={10}
                  w="100%"
                  _dark={{
                    bg: "#171E2E",
                  }}
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Button
                    w="37.5%"
                    colorScheme="danger"
                    variant="outline"
                    _dark={{
                      _text: {
                        color: "danger.300",
                      },
                    }}
                    leftIcon={
                      <Ionicon
                        name="close-circle-outline"
                        color={colorMode === "light" ? "#be123c" : "#fda4af"}
                        size={20}
                      />
                    }
                    onPress={() => {
                      setIndex((index + 1) % 5);
                      rotateValue.current = 180;
                      resetCard();
                    }}
                  >
                    모르겠어요
                  </Button>
                  <Button
                    w="15%"
                    colorScheme="info"
                    variant="outline"
                    leftIcon={
                      <Ionicon
                        name="volume-medium-outline"
                        color={colorMode === "light" ? "gray" : "white"}
                        size={20}
                      />
                    }
                    onPress={() => {}}
                  />
                  <Button
                    w="37.5%"
                    colorScheme="info"
                    variant="outline"
                    _dark={{
                      _text: {
                        color: "info.300",
                      },
                    }}
                    leftIcon={
                      <Ionicon
                        name="chevron-down-circle-outline"
                        color={colorMode === "light" ? "#0369a1" : "#7dd3fc"}
                        size={20}
                      />
                    }
                    onPress={() => {
                      setIndex((index + 1) % 5);
                      rotateValue.current = 180;
                      resetCard();
                    }}
                  >
                    외웠어요
                  </Button>
                </Flex>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* BackFlipCard */}
        <TouchableOpacity
          onPress={() => flipCard()}
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            height: "100%",
            top: 0,
          }}
        >
          <Animated.View
            style={[
              {
                backfaceVisibility: "hidden",
                height: "100%",
              },
              backAnimatedStyle,
            ]}
          >
            <View
              bg="coolGray.100"
              p={5}
              _dark={{
                bg: "#171E2E",
              }}
            >
              <View h="80%" justifyContent="center" alignItems="center">
                <Flex direction="row" w="100%" mb={3}>
                  <View w="50%">
                    <Text
                      color="info.700"
                      bold
                      ml={7}
                      mt={2}
                      _dark={{
                        color: "info.300",
                      }}
                    >
                      문제
                    </Text>
                  </View>
                  <View w="50%" alignItems="flex-end">
                    <Button
                      w="30%"
                      variant="ghost"
                      leftIcon={
                        <Ionicon name="bookmark" color="#0369a1" size={20} />
                      }
                    />
                  </View>
                </Flex>
                <Furi furiData={[words[index]]} showFuri={true} fontSize={42} />
                <Text
                  fontSize="2xl"
                  color="coolGray.700"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {words[index].meaning}
                </Text>

                <Flex
                  direction="row"
                  justifyContent="space-around"
                  flexWrap="wrap"
                  bg="coolGray.100"
                  borderColor="warmGray.200"
                  mt={10}
                  w="100%"
                  _dark={{
                    bg: "#171E2E",
                  }}
                >
                  <Button
                    w="37.5%"
                    colorScheme="danger"
                    variant="outline"
                    _dark={{
                      _text: {
                        color: "danger.300",
                      },
                    }}
                    leftIcon={
                      <Ionicon
                        name="close-circle-outline"
                        color={colorMode === "light" ? "#be123c" : "#fda4af"}
                        size={20}
                      />
                    }
                    onPress={() => {
                      setIndex((index + 1) % 5);
                      rotateValue.current = 180;
                      resetCard();
                    }}
                  >
                    모르겠어요
                  </Button>
                  <Button
                    w="15%"
                    colorScheme="info"
                    variant="outline"
                    leftIcon={
                      <Ionicon
                        name="volume-medium-outline"
                        color={colorMode === "light" ? "gray" : "white"}
                        size={20}
                      />
                    }
                    onPress={() => {}}
                  />
                  <Button
                    w="37.5%"
                    colorScheme="info"
                    variant="outline"
                    _dark={{
                      _text: {
                        color: "info.300",
                      },
                    }}
                    leftIcon={
                      <Ionicon
                        name="chevron-down-circle-outline"
                        color={colorMode === "light" ? "#0369a1" : "#7dd3fc"}
                        size={20}
                      />
                    }
                    onPress={() => {
                      setIndex((index + 1) % 5);
                      rotateValue.current = 180;
                      resetCard();
                    }}
                  >
                    외웠어요
                  </Button>
                </Flex>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </Box>
  );
}
