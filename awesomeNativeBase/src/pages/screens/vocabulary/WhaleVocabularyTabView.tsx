import React from "react";
import { Box, Pressable, useColorModeValue } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Animated, useWindowDimensions } from "react-native";
import WhaleVocabularyKanjiVocaFlatList from "./tabs/kanji/WhaleVocabularyKanjiVocaFlatList";
import WhaleVocabularyJlptVocaFlatListHeader from "./tabs/jlpt/WhaleVocabularyJlptVocaFlatListHeader";

// 탭 선택 시 렌더링 될 컴포넌트 등록
const renderScene = SceneMap({
  firstTab: WhaleVocabularyKanjiVocaFlatList,
  secondTab: WhaleVocabularyJlptVocaFlatListHeader,
});

// renderScene의 key와 routesInit의 key가 일치해야 한다.
const routesInit = [
  { key: "firstTab", title: "漢字별 단어장" },
  { key: "secondTab", title: "JLPT 단어장" },
];

export default function WhaleVocabularyTabView() {
  const [routes] = React.useState(routesInit);
  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();

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
                  ? // 탭을 선택한 경우의 폰트 색상 설정(Light, Dark)
                    useColorModeValue("#0369a1", "#bae6fd")
                  : // 탭을 선택하지 않은 경우의 폰트 색상 설정(Light, Dark)
                    useColorModeValue("#374151", "#e5e7eb");
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
                  {/* 탭 텍스트 */}
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
