import React from 'react';
import {Button, Center, NativeBaseProvider, Text} from 'native-base';
import type {Props} from '../../navigation';

export default function Screen1({navigation}: Props): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Screen 1</Text>
        <Button onPress={() => navigation.navigate('Screen2')}>
          Move to screen 2
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
