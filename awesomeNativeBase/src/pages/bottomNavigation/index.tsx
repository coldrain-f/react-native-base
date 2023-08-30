import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Configuration from "../screens/configuration";
import type {
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import Information from "../screens/information";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Flex, useColorMode } from "native-base";
import type { Book } from "../../@types/bookType";
import type { CategoryType } from "../../@types/categoryType";

export type BottomTabParamList = {
  Home: undefined;
  Configuration: undefined;
  Information: undefined;
  Category: {
    book: Book;
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
  headerTintColor: "white",
  headerRight: () => <BasicHeaderRight />,
};

const BasicHeaderRight = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex direction="row">
      <Button
        size="sm"
        mr="3"
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
    </Flex>
  );
};

// Icon Link: https://ionic.io/ionicons/

export default function BottomTabNavigation(): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colorMode === "light" ? "#4F46E5" : "#0F172A",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ focused, color, size }) => {
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
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "단어장",
          headerStyle: {
            backgroundColor: colorMode === "light" ? "#4F46E5" : "#0F172A",
          },
        }}
      />
      <BottomTab.Screen
        name="Configuration"
        component={Configuration}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "설정",
          headerStyle: {
            backgroundColor: colorMode === "light" ? "#4F46E5" : "#0F172A",
          },
        }}
      />
      <BottomTab.Screen
        name="Information"
        component={Information}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "안내",
          headerStyle: {
            backgroundColor: colorMode === "light" ? "#4F46E5" : "#0F172A",
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
