import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Configuration from '../screens/configuration';
import type {
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Information from '../screens/information';

type BottomTabParamList = {
  Home: undefined;
  Configuration: undefined;
  Information: undefined;
};

export type HomeProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;
export type InformationProps = BottomTabScreenProps<
  BottomTabParamList,
  'Information'
>;
export type ConfigurationProps = BottomTabScreenProps<
  BottomTabParamList,
  'Configuration'
>;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BasicBottomTabNavigationOprions: BottomTabNavigationOptions = {
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#4F46E5',
  },
  headerTintColor: 'white',
};

export default function BottomTabNavigation(): React.JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#4F46E5',
        },
        tabBarActiveTintColor: 'white',
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: '단어장',
        }}
      />
      <BottomTab.Screen
        name="Configuration"
        component={Configuration}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: '설정',
        }}
      />
      <BottomTab.Screen
        name="Information"
        component={Information}
        options={{
          ...BasicBottomTabNavigationOprions,
          title: '이용 안내',
        }}
      />
    </BottomTab.Navigator>
  );
}
