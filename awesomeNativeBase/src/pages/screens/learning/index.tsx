import React from "react";
import {
  Button,
  Center,
  Divider,
  Flex,
  Progress,
  Text,
  View,
  useColorMode,
} from "native-base";
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

  return (
    <View
      bg="warmGray.100"
      _dark={{
        bg: "#0F172A",
      }}
    >
      <LearningHeader />
      <Center mt={10}>
        <Furi furiData={[words[index]]} showFuri={showFuri} fontSize={42} />
        <View>
          <Text
            fontSize="2xl"
            color="coolGray.700"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {showMeaning ? "인구" : " "}
          </Text>
        </View>
      </Center>
      <Flex
        direction="row"
        justifyContent="space-around"
        mt={45}
        p={4}
        flexWrap="wrap"
      >
        <Button
          w="45%"
          size="sm"
          variant="outline"
          leftIcon={
            <Ionicon
              name={showFuri ? "eye" : "eye-outline"}
              color={colorMode === "light" ? "gray" : "white"}
              size={20}
            />
          }
          onPress={() => {
            setShowFuri(!showFuri);
          }}
        >
          <Text
            color={"coolGray.900"}
            _dark={{
              color: "coolGray.200",
            }}
          >
            후리가나
          </Text>
        </Button>
        <Button
          w="45%"
          size="sm"
          variant="outline"
          leftIcon={
            <Ionicon
              name={showMeaning ? "eye" : "eye-outline"}
              color={colorMode === "light" ? "gray" : "white"}
              size={20}
            />
          }
          onPress={() => {
            setShowMeaning(!showMeaning);
          }}
        >
          <Text
            color={"coolGray.900"}
            _dark={{
              color: "coolGray.200",
            }}
          >
            단어 뜻
          </Text>
        </Button>
        {/* warning-outline */}
        <Button
          w="45%"
          colorScheme="danger"
          variant="outline"
          mt={5}
          leftIcon={
            <Ionicon
              name={"warning-outline"}
              color={colorMode === "light" ? "#be123c" : "white"}
              size={20}
            />
          }
          onPress={() => {
            setIndex((index + 1) % 5);
            setShowFuri(false);
            setShowMeaning(false);
          }}
        >
          모르겠어요
        </Button>
        <Button
          w="45%"
          colorScheme="info"
          variant="outline"
          mt={5}
          leftIcon={
            <Ionicon
              name={"shield-checkmark-outline"}
              color={colorMode === "light" ? "#0369a1" : "white"}
              size={20}
            />
          }
          onPress={() => {
            setIndex((index + 1) % 5);
            setShowFuri(false);
            setShowMeaning(false);
          }}
        >
          외웠어요
        </Button>
      </Flex>
    </View>
  );
}
