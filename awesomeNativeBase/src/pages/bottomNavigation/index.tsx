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

/**
 * Icon Link: https://ionic.io/ionicons/
 */

export type BottomTabParamList = {
  Home: undefined;
  Configuration: undefined;
  Information: undefined;
};

export type HomeProps = BottomTabScreenProps<BottomTabParamList, "Home">;
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

/**
 *
 * 파랑: #4F46E5
 * info.700: #0369a1
 * indigo.700: #4338ca
 */

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

export default function BottomTabNavigation(): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colorMode === "light" ? "#4338ca" : "#0F172A",
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
