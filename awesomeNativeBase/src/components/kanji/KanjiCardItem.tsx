import { useNavigation } from "@react-navigation/native";
import {
  View,
  Box,
  Flex,
  Text,
  Divider,
  Checkbox,
  Button,
  useColorMode,
} from "native-base";
import { StackNavigationProp } from "../../pages/navigation";
import { KanjiType } from "../../@types/kanjiType";
import Ionicon from "react-native-vector-icons/Ionicons";

interface Props {
  kanji: KanjiType;
}

export default function KanjiCardItem({ kanji }: Props): React.JSX.Element {
  const { colorMode } = useColorMode();
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <Box
      w="100%"
      bg={"coolGray.100"}
      style={{
        transform: [
          {
            scale: 1,
          },
        ],
      }}
      my="2"
      pt="2"
      pb="2"
      borderWidth={1}
      borderColor="coolGray.300"
      shadow={3}
      _dark={{ bg: "#171E2E" }}
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
            {kanji.kanji}
          </Text>
          <Text
            color="coolGray.700"
            fontWeight="bold"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {kanji.meaning.split(" ")[0] + " "}
            <Text
              color="primary.700"
              fontWeight="bold"
              _dark={{
                color: "primary.200",
              }}
            >
              {kanji.meaning.split(" ")[1]}
            </Text>
          </Text>
          <Text>획수: {kanji.strokeCount}획</Text>
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
              음독: <Text fontWeight="medium">{kanji.onYomi.join(", ")}</Text>
            </Text>
          </Flex>
          <Flex direction="row">
            <Text
              fontWeight="bold"
              color="coolGray.700"
              fontSize="md"
              w="100%"
              _dark={{ color: "warmGray.200" }}
            >
              훈독: <Text fontWeight="medium">{kanji.kunYomi.join(", ")}</Text>
            </Text>
          </Flex>
          {/* 회독 수, 포함 단어 Grid */}
          <Flex direction="row" mt={3.5} flexWrap="wrap" w="100%">
            <View flexDirection="row" flexWrap="wrap" w="45%">
              <Text
                fontWeight="bold"
                color="info.700"
                pr={1}
                _dark={{ color: "info.200" }}
              >
                {kanji.readCount}
              </Text>
              <Text color="coolGray.700" _dark={{ color: "warmGray.200" }}>
                회독 완료
              </Text>
            </View>
            <View flexDirection="row" flexWrap="wrap" w="55%">
              <Text
                pr={1}
                color="coolGray.700"
                _dark={{ color: "warmGray.200" }}
              >
                포함 단어:
              </Text>
              <Text
                fontWeight="bold"
                color="info.700"
                _dark={{ color: "info.200" }}
              >
                {kanji.wordCount}
              </Text>
              <Text color="coolGray.700" _dark={{ color: "warmGray.200" }}>
                개
              </Text>
            </View>
          </Flex>
        </View>
        {/* 한자 체크박스 Grid */}
        <Flex pt={2} direction="column" alignItems="center">
          <Checkbox
            size="md"
            value="0"
            accessibilityLabel="This is a checkbox"
            mt={0.5}
          />
        </Flex>
      </Flex>
      <Flex direction="row" justifyContent="space-around" mt={2}>
        <Button
          w="92.5%"
          size="md"
          variant="outline"
          colorScheme="info"
          onPress={() => {
            navigation.navigate("Word");
          }}
          rightIcon={
            <Ionicon
              name="file-tray-full-outline"
              color={colorMode === "light" ? "#0369a1" : "white"}
              size={20}
            />
          }
        >
          <Text
            color="info.700"
            fontWeight="bold"
            _dark={{
              color: "warmGray.200",
            }}
          >
            포함 된 단어 상세보기
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}
