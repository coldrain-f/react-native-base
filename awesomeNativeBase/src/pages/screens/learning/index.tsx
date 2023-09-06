import React from "react";
import { Animated, TouchableOpacity } from "react-native";
import { Button, Center, Flex, Text, View, useColorMode } from "native-base";
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
  const [showFuri, setShowFuri] = React.useState<boolean>(false);
  const [showMeaning, setShowMeaning] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

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
    <View
      h="100%"
      bg="coolGray.100"
      _dark={{
        bg: "#0F172A",
      }}
    >
      <LearningHeader />

      <View h="100%">
        <TouchableOpacity
          onPress={() => flipCard()}
          style={{
            backfaceVisibility: "hidden",
            width: "100%",
          }}
        >
          <Animated.View
            style={[{ backfaceVisibility: "hidden" }, frontAnimatedStyle]}
          >
            <Center
              borderWidth={0}
              borderColor="coolGray.300"
              bg="coolGray.100"
              shadow={0}
              p={5}
            >
              <Text w="100%" color="info.700" bold>
                문제
              </Text>
              <Furi furiData={[words[index]]} showFuri={false} fontSize={42} />
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
                justifyContent="space-around"
                flexWrap="wrap"
                bg="coolGray.100"
                borderColor="warmGray.200"
                mt={10}
                w="100%"
              >
                <Button
                  w="37.5%"
                  colorScheme="danger"
                  variant="outline"
                  leftIcon={
                    <Ionicon
                      name="close-circle-outline"
                      color={colorMode === "light" ? "#be123c" : "white"}
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
                  leftIcon={
                    <Ionicon
                      name="chevron-down-circle-outline"
                      color={colorMode === "light" ? "#0369a1" : "white"}
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
            </Center>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => flipCard()}
          style={{
            width: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            top: 0,
          }}
        >
          <Animated.View
            style={[{ backfaceVisibility: "hidden" }, backAnimatedStyle]}
          >
            <Center borderWidth={0} borderColor="coolGray.300" shadow={0} p={5}>
              <Text w="100%" color="info.700" bold>
                정답
              </Text>
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
              >
                <Button
                  w="37.5%"
                  colorScheme="danger"
                  variant="outline"
                  leftIcon={
                    <Ionicon
                      name="close-circle-outline"
                      color={colorMode === "light" ? "#be123c" : "white"}
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
                  leftIcon={
                    <Ionicon
                      name="chevron-down-circle-outline"
                      color={colorMode === "light" ? "#0369a1" : "white"}
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
            </Center>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
