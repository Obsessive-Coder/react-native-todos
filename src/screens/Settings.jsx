import React, { useContext } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StateContext } from '../components/StateContext';

const Settings = () => {
  const [theme, setTheme] = useContext(StateContext);
  const { colors } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleThemeToggled = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <View padding={25} style={{ padding: 25 }}>
      <View flexDirection="row" justifyContent="center" alignItems="center" style={{ flexDirection: 'row' }}>
        <Text
          marginHorizontal={15}
          style={{ color: colors.text, marginHorizontal: 15, fontWeight: 'bold' }}
        >Dark Mode
        </Text>

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={handleThemeToggled}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({});