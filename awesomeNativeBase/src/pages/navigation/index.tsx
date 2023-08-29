import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import BottomTabNavigation, { BottomTabParamList } from "../bottomNavigation";
import Category from "../screens/category";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Flex, useColorMode } from "native-base";
import type { Book } from "../../@types/bookType";
import type { CategoryType } from "../../@types/categoryType";

type StackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Category: {
    book: Book;
    categories: CategoryType[];
  };
};

export type CategoryProps = NativeStackScreenProps<StackParamList, "Category">;
export type RootProps = NativeStackScreenProps<StackParamList, "Root">;

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
