import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import BottomTabNavigation, { BottomTabParamList } from "../bottomNavigation";
import WhaleCategory from "../screens/category/WhaleCategory";
import WhaleKanji from "../screens/kanji/WhaleKanji";
import Learning from "../screens/learning";
import type { Book } from "../../@types/bookType";
import type { StyleProp } from "react-native";
import { useColorMode } from "native-base";
import WhaleWord from "../screens/word/WhaleWord";

type StackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  WhaleCategory: {
    book: Book;
  };
  WhaleKanji: undefined;
  WhaleWord: undefined;
  Learning: undefined;
};

// ScreenProps
export type WhaleCategoryProps = NativeStackScreenProps<
  StackParamList,
  "WhaleCategory"
>;
export type RootProps = NativeStackScreenProps<StackParamList, "Root">;
export type LearningProps = NativeStackScreenProps<StackParamList, "Learning">;

// RouteProp
export type LearningRouteProp = RouteProp<StackParamList, "Learning">;

// Navigation Prop
export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;
export type LearningkNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Learning"
>;

const Stack = createNativeStackNavigator<StackParamList>();

const BasicNativeStackNavigationOptions: NativeStackNavigationOptions = {
  headerTitleStyle: {
    fontWeight: "bold",
    color: "white",
  },
  headerTintColor: "white",
};

export default function Navigation() {
  const { colorMode } = useColorMode();
  const basicHeaderStyle: StyleProp<{
    backgroundColor?: string | undefined;
  }> = {
    backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WhaleCategory"
          component={WhaleCategory}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "카테고리",
            headerStyle: basicHeaderStyle,
          }}
        />
        <Stack.Screen
          name="WhaleKanji"
          component={WhaleKanji}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "한자",
            headerStyle: basicHeaderStyle,
          }}
        />
        <Stack.Screen
          name="WhaleWord"
          component={WhaleWord}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "단어",
            headerStyle: basicHeaderStyle,
          }}
        />
        <Stack.Screen
          name="Learning"
          component={Learning}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "단어 학습",
            headerStyle: basicHeaderStyle,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
