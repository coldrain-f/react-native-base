import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Category from '../screens/category';

type StackParamList = {
  Home: undefined;
  Category: {
    bookTitle: string;
  };
};

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type CategoryProps = NativeStackScreenProps<StackParamList, 'Category'>;

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
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
