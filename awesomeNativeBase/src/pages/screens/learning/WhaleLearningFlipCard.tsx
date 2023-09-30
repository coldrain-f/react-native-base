import React from "react";
import { View } from "native-base";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import WhaleLearningFaceFlipCard from "./WhaleLearningFaceFlipCard";
import WhaleLearningBackFlipCard from "./WhaleLearningBackFlipCard";

export default function WhaleLearningFlipCard() {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  const flipAnimation = React.useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    setIsFlipped(!isFlipped);

    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
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
        {/* FaceFlipCard */}
        <WhaleLearningFaceFlipCard
          isFlipped={isFlipped}
          flipAnimation={flipAnimation}
        />
        {/* BackFLipCard */}
        <WhaleLearningBackFlipCard
          isFlipped={isFlipped}
          flipAnimation={flipAnimation}
        />
      </View>
    </TouchableOpacity>
  );
}
