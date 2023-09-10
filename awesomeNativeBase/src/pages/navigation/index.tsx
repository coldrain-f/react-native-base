import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import BottomTabNavigation, { BottomTabParamList } from "../bottomNavigation";
import Category from "../screens/category";
import Kanji from "../screens/kanji";
import Word from "../screens/word";
import Learning from "../screens/learning";
import type { Book } from "../../@types/bookType";
import type { StyleProp } from "react-native";
import { Button, Flex, useColorMode } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

type StackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Category: {
    book: Book;
  };
  Kanji: undefined;
  Word: undefined;
  Learning: undefined;
};

// ScreenProps
export type CategoryProps = NativeStackScreenProps<StackParamList, "Category">;
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
          name="Category"
          component={Category}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "카테고리",
            headerStyle: basicHeaderStyle,
          }}
        />
        <Stack.Screen
          name="Kanji"
          component={Kanji}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "한자",
            headerStyle: basicHeaderStyle,
          }}
        />
        <Stack.Screen
          name="Word"
          component={Word}
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
            headerBackVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
