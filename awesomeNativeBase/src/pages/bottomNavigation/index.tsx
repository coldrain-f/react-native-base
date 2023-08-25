import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Configuration from "../screens/configuration";
import type {
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import Information from "../screens/information";
import Icon from "react-native-vector-icons/Ionicons";

export type BottomTabParamList = {
  Home: undefined;
  Configuration: undefined;
  Information: undefined;
  Category: {
    bookTitle: string;
  };
};

// React-Native navigation Typescript 참고 문서
// https://joonfluence.tistory.com/568
// https://youngslog.medium.com/%EB%B2%88%EC%97%AD-type-checking-with-typescript-react-navigation-bacbcf901be4

export type HomeProps = BottomTabScreenProps<BottomTabParamList, "Home">;
export type CategoryProps = BottomTabScreenProps<
  BottomTabParamList,
  "Category"
>;
export type InformationProps = BottomTabScreenProps<
  BottomTabParamList,
  "Information"
>;
export type ConfigurationProps = BottomTabScreenProps<
  BottomTabParamList,
  "Configuration"
>;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BasicBottomTabNavigationOprions: BottomTabNavigationOptions = {
  headerTitleStyle: {
    fontWeight: "bold",
    color: "white",
  },
  headerStyle: {
    backgroundColor: "#4F46E5",
  },
  headerTintColor: "white",
};

export default function BottomTabNavigation(): React.JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#4F46E5",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ focused, color, size }) => {
          // Icon Link: https://ionic.io/ionicons/
          let iconName: string = "book-sharp";
          if (route.name === "Home") {
            iconName = focused ? "book-sharp" : "book-outline";
          } else if (route.name === "Information") {
            iconName = focused
              ? "information-circle-sharp"
              : "information-circle-outline";
          } else if (route.name === "Configuration") {
            iconName = focused ? "settings-sharp" : "settings-sharp";
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "단어장",
        }}
      />
      <BottomTab.Screen
        name="Configuration"
        component={Configuration}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "설정",
        }}
      />
      <BottomTab.Screen
        name="Information"
        component={Information}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "안내",
        }}
      />
    </BottomTab.Navigator>
  );
}
