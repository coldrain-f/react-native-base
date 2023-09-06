import React from "react";
import {
  Box,
  Button,
  Flex,
  Progress,
  Text,
  View,
  useColorMode,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../../pages/navigation";

export default function LearningHeader(): React.JSX.Element {
  const { colorMode } = useColorMode();
  const navigation = useNavigation<StackNavigationProp>();

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
        <View w="80%">
          <Text
            color="primary.900"
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
            _dark={{ color: "coolGray.100" }}
          >
            학습 진척도: {((3 / 10) * 100).toFixed(1)}%
          </Text>
          <Flex direction="row">
            <Box w="60%" mt={2}>
              <Progress colorScheme="info" value={(3 / 10) * 100} size="sm" />
            </Box>
            <Box w="40%" ml={3}>
              <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
                {3} / {10}개
              </Text>
            </Box>
          </Flex>
        </View>
        <View w="20%">
          <Button
            size="sm"
            variant="ghost"
            colorScheme="coolGray"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="exit-outline"
              color={colorMode === "light" ? "black" : "white"}
              size={26}
            />
          </Button>
        </View>
      </Flex>
    </View>
  );
}
