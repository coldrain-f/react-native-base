import React from 'react';
import Navigation from './src/pages/navigation';
import {NativeBaseProvider, StatusBar} from 'native-base';

export default function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
