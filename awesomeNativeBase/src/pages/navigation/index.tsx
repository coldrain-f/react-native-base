import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import BottomTabNavigation from '../bottomNavigation';
import Category from '../screens/category';

type StackParamList = {
  Home: undefined;
  Category: {
    bookTitle: string;
  };
  Information: undefined;
  Configuration: undefined;
  Root: undefined;
};

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type CategoryProps = NativeStackScreenProps<StackParamList, 'Category'>;

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigation}
          options={{headerShown: false}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
