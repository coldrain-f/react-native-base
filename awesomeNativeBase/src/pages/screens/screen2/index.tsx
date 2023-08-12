import React from 'react';
import {Button, NativeBaseProvider, Text} from 'native-base';
import type {Props} from '../../navigation';

export default function Screen2({navigation}: Props) {
  return (
    <NativeBaseProvider>
      <Text>Screen 2</Text>
      <Button onPress={() => navigation.navigate('Screen1')}>
        Move to screen 1
      </Button>
    </NativeBaseProvider>
  );
}
