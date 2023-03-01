import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './src/components/Navigator';
import { StateProvider } from './src/components/StateContext';

export default function App() {
  return (
    <StateProvider>
      <Navigator />
    </StateProvider>
  );
}
