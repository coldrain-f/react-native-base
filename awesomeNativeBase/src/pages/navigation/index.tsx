import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
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
import { useColorMode } from "native-base";
import type { Book } from "../../@types/bookType";
import { StyleProp } from "react-native";

type StackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Category: {
    book: Book;
  };
  Kanji: undefined;
  Word: undefined;
};

// ScreenProps
export type CategoryProps = NativeStackScreenProps<StackParamList, "Category">;
export type RootProps = NativeStackScreenProps<StackParamList, "Root">;

// Navigation Prop
export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;

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
          options={{ headerShown: false }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
