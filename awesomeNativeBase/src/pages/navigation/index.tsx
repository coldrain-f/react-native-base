import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Category from '../screens/category';
import Information from '../screens/information';
import Configuration from '../screens/configuration';

type StackParamList = {
  Home: undefined;
  Category: {
    bookTitle: string;
  };
  Information: undefined;
  Configuration: undefined;
};

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type CategoryProps = NativeStackScreenProps<StackParamList, 'Category'>;
export type InformationProps = NativeStackScreenProps<
  StackParamList,
  'Information'
>;
export type ConfigurationProps = NativeStackScreenProps<
  StackParamList,
  'Configuration'
>;

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '단어장',

            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F46E5',
            },
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            title: '카테고리',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F46E5',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Information"
          component={Information}
          options={{
            title: '이용안내',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F46E5',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Configuration"
          component={Configuration}
          options={{
            title: '설정',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F46E5',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
