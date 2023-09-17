import React from "react";
import {
  View,
  Box,
  Pressable,
  useColorModeValue,
  FlatList,
  Text,
  Heading,
} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Animated, useWindowDimensions, TouchableOpacity } from "react-native";
import WhaleVocabularyItem from "./WhaleVocabularyItem";
import type { Book } from "../../../@types/bookType";
import Ionicon from "react-native-vector-icons/Ionicons";

const KanjiVocabularyRoute = () => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [showIntroduction, setShowIntroduction] = React.useState(true);

  React.useEffect((): void => {
    setBooks(require("./books"));
  }, []);

  return (
    <>
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
        <View flexDirection="row">
          <Heading size="sm" color="primary.900" w="80%">
            漢字별 단어장 소개
          </Heading>
          <View w="20%" alignItems="flex-end">
            <TouchableOpacity
              onPress={() => {
                setShowIntroduction(!showIntroduction);
              }}
            >
              {/* #111825: coolGray.900 */}
              <Ionicon name="caret-down-outline" color="#111827" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {showIntroduction && (
          <Text mt={1} color="coolGray.700">
            한자가 포함된 단어를 각각의 한자로 묶어 학습할 수 있는 단어장입니다.
            일본어 한자를 숙달하는 데 도움이 됩니다.
          </Text>
        )}
      </View>
      <FlatList
        flex={1}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={() => {}}
        refreshing={false}
        data={books}
        renderItem={({ item }) => {
          return <WhaleVocabularyItem book={item} />;
        }}
      />
    </>
  );
};

const JlptVocabularyRoute = () => <View style={{ flex: 1 }} />;

const renderScene = SceneMap({
  kanjiVocabulary: KanjiVocabularyRoute,
  jlptVocabulary: JlptVocabularyRoute,
});

export default function WhaleVocabularyTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "kanjiVocabulary", title: "漢字별 단어장" },
    { key: "jlptVocabulary", title: "JLPT 단어장" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => {
        const inputRange = props.navigationState.routes.map((route, i) => i);
        return (
          <Box flexDirection="row">
            {props.navigationState.routes.map((route, i) => {
              const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                  inputIndex === i ? 1 : 0.5
                ),
              });
              const color =
                index === i
                  ? useColorModeValue("#0369a1", "#bae6fd")
                  : useColorModeValue("#374151", "#e5e7eb");
              const borderColor =
                index === i
                  ? "info.500"
                  : useColorModeValue("coolGray.200", "gray.400");
              return (
                <Pressable
                  key={i}
                  flex={1}
                  p={3}
                  borderBottomWidth={3}
                  borderColor={borderColor}
                  alignItems="center"
                  onPress={() => {
                    setIndex(i);
                  }}
                >
                  <Animated.Text
                    style={{
                      color,
                      opacity,
                      fontWeight: "bold",
                    }}
                  >
                    {route.title}
                  </Animated.Text>
                </Pressable>
              );
            })}
          </Box>
        );
      }}
    />
  );
}
