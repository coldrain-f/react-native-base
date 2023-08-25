import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import BottomTabNavigation, { BottomTabParamList } from "../bottomNavigation";
import Category from "../screens/category";

type StackParamList = {
  // BottomTabNavigation은 이런식으로 설정한다.
  // BottomTabParamList은 BottomTabNavigation 컴포넌트에서 정의하고 불러왔음.
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Category: {
    bookTitle: string;
  };
};

export type CategoryProps = NativeStackScreenProps<StackParamList, "Category">;
export type RootProps = NativeStackScreenProps<StackParamList, "Root">;

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation() {
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
            title: "카테고리",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F46E5",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
