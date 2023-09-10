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
import Furi from "../common/Furi";

const words = [
  { name: "人口", furi: "じんこう", meaning: "인구" },
  { name: "人生", furi: "じんせい", meaning: "인생" },
  { name: "人物", furi: "じんぶつ", meaning: "인물" },
  { name: "人類", furi: "じんるい", meaning: "인류" },
  { name: "偉人", furi: "いじん", meaning: "위인" },
];

export default function LearningFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  const flipAnimation = React.useRef(new Animated.Value(0)).current;
  const { colorMode } = useColorMode();

  const flipCard = () => {
    setIsFlipped(!isFlipped);

    // Animated.timing(flipAnimation, {
    //   toValue: isFlipped ? 0 : 1,
    //   duration: 200,
    //   useNativeDriver: true,
    // }).start();

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

  return (
    <TouchableOpacity
      onPress={flipCard}
      style={styles.touchableOpacity}
      activeOpacity={1}
    >
      <View flex={1} alignItems="center" bg="coolGray.100">
        <Animated.View
          style={[styles.card, frontStyle, { zIndex: isFlipped ? 0 : 1 }]}
        >
          <View h="100%">
            <View
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <View w="50%" pt={2}>
                <Text color="info.700" bold>
                  문제
                </Text>
              </View>
              <View w="50%" flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="outline"
                  leftIcon={
                    <Ionicon
                      name="volume-medium-outline"
                      color={colorMode === "light" ? "#0369a1" : "white"}
                      size={20}
                    />
                  }
                />
                <Button
                  ml={2}
                  variant="outline"
                  leftIcon={
                    <Ionicon name="heart-outline" color="#0369a1" size={20} />
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
              <VStack>
                <Button
                  colorScheme="info"
                  _dark={{
                    _text: {
                      color: "info.300",
                    },
                  }}
                  leftIcon={
                    <Ionicon
                      name="chevron-down-circle-outline"
                      color={colorMode === "light" ? "white" : "#7dd3fc"}
                      size={20}
                    />
                  }
                >
                  외웠어요
                </Button>
              </VStack>
              <VStack mt={5}>
                <Button
                  colorScheme="danger"
                  _dark={{
                    _text: {
                      color: "danger.300",
                    },
                  }}
                  leftIcon={
                    <Ionicon
                      name="close-circle-outline"
                      color={colorMode === "light" ? "white" : "#fda4af"}
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
        <Animated.View
          style={[styles.card, backStyle, { zIndex: isFlipped ? 1 : 0 }]}
        >
          <View h="100%">
            <View
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <View w="50%" pt={2}>
                <Text color="info.700" bold>
                  정답
                </Text>
              </View>
              <View w="50%" flexDirection="row" justifyContent="flex-end">
                <Button
                  variant="outline"
                  leftIcon={
                    <Ionicon
                      name="volume-medium-outline"
                      color={colorMode === "light" ? "#0369a1" : "white"}
                      size={20}
                    />
                  }
                />
                <Button
                  ml={2}
                  variant="outline"
                  leftIcon={
                    <Ionicon name="heart-outline" color="#0369a1" size={20} />
                  }
                />
              </View>
            </View>
            <Divider mb={2} mt={2} />
            <Center flex={1}>
              <Furi
                furiData={[{ word: "難解", furi: "なんかい" }]}
                showFuri={true}
                fontSize={38}
                color="coolGray.700"
              />
              <Heading color="coolGray.700" fontWeight="normal">
                난해
              </Heading>
            </Center>
            <View flex={1} justifyContent="flex-end" mb={10}>
              <VStack>
                <Button
                  colorScheme="info"
                  _dark={{
                    _text: {
                      color: "info.300",
                    },
                  }}
                  leftIcon={
                    <Ionicon
                      name="chevron-down-circle-outline"
                      color={colorMode === "light" ? "white" : "#7dd3fc"}
                      size={20}
                    />
                  }
                >
                  외웠어요
                </Button>
              </VStack>
              <VStack mt={5}>
                <Button
                  colorScheme="danger"
                  _dark={{
                    _text: {
                      color: "danger.300",
                    },
                  }}
                  leftIcon={
                    <Ionicon
                      name="close-circle-outline"
                      color={colorMode === "light" ? "white" : "#fda4af"}
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
