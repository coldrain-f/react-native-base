import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

type StackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

export type Props = NativeStackScreenProps<
  StackParamList,
  'Screen1',
  'Screen2'
>;

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
