import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WhaleVocabulary from "../screens/vocabulary/WhaleVocabulary";
import Configuration from "../screens/configuration";
import type {
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import Information from "../screens/information";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Flex, useColorMode } from "native-base";
import Progress from "../screens/progress";
import BookMark from "../screens/bookmark";

/**
 * Icon Link: https://ionic.io/ionicons/
 */

export type BottomTabParamList = {
  WhaleVocabulary: undefined;
  Bookmark: undefined;
  Progress: undefined;
  Configuration: undefined;
  Information: undefined;
};

export type WhaleVocabularyProps = BottomTabScreenProps<
  BottomTabParamList,
  "WhaleVocabulary"
>;
export type BookmarkProps = BottomTabScreenProps<
  BottomTabParamList,
  "Bookmark"
>;
export type ProgressProps = BottomTabScreenProps<
  BottomTabParamList,
  "Progress"
>;
export type ConfigurationProps = BottomTabScreenProps<
  BottomTabParamList,
  "Configuration"
>;
export type InformationProps = BottomTabScreenProps<
  BottomTabParamList,
  "Information"
>;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BasicBottomTabNavigationOprions: BottomTabNavigationOptions = {
  headerTitleStyle: {
    fontWeight: "bold",
    color: "white",
  },
  headerTintColor: "white",
  headerRight: () => <BasicHeaderRight />,
  // 기기 폰트 사이즈 의존 제거
  tabBarAllowFontScaling: false,
  headerTitleAllowFontScaling: false,
};

const BasicHeaderRight = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex direction="row">
      <Button
        size="sm"
        mr="3"
        backgroundColor={colorMode === "light" ? "#4338ca" : "#0F172A"}
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

export default function BottomTabNavigation() {
  const { colorMode } = useColorMode();

  return (
    <BottomTab.Navigator
      initialRouteName="WhaleVocabulary"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
        },
        // BottomTab 색상
        tabBarActiveTintColor: "#f3f4f6", // coolGray.100
        tabBarInactiveTintColor: "#9ca3af", // coolGray.400

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "book-sharp";
          if (route.name === "WhaleVocabulary") {
            iconName = focused ? "book-sharp" : "book-outline";
          } else if (route.name === "Bookmark") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Progress") {
            iconName = focused ? "footsteps" : "footsteps-outline";
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
        name="WhaleVocabulary"
        component={WhaleVocabulary}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "단어장",
          headerStyle: {
            backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
          },
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "북마크",
          headerStyle: {
            backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
          },
        }}
      />
      <BottomTab.Screen
        name="Progress"
        component={Progress}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: "진척도",
          headerStyle: {
            backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
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
            backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
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
            backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
