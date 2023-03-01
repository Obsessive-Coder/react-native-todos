import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

// Screens.
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';

// Custom Components.
import { StateContext } from './StateContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [theme] = useContext(StateContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Todos' }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;