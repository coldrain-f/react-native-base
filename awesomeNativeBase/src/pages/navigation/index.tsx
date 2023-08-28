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
import { Button, useColorMode } from "native-base";

type StackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Category: {
    bookTitle: string;
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
  headerRight: () => <BasicHeaderRight />,
};

const BasicHeaderRight = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      size="sm"
      mr="2"
      backgroundColor={colorMode === "light" ? "#4F46E5" : "#0F172A"}
      onPress={() => {
        toggleColorMode();
      }}
    >
      <Ionicons
        name={colorMode === "light" ? "moon" : "sunny"}
        color="white"
        size={20}
      />
    </Button>
  );
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
