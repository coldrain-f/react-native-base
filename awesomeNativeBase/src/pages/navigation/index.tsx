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
import Word from "../screens/word";
import { useColorMode } from "native-base";
import type { Book } from "../../@types/bookType";

type StackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Category: {
    book: Book;
  };
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
            headerStyle: {
              backgroundColor: colorMode === "light" ? "#4F46E5" : "#0F172A",
            },
          }}
        />
        <Stack.Screen
          name="Word"
          component={Word}
          options={{
            ...BasicNativeStackNavigationOptions,
            title: "단어",
            headerStyle: {
              backgroundColor: colorMode === "light" ? "#4F46E5" : "#0F172A",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
