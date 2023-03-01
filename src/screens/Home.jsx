import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});