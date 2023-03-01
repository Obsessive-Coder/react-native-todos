import React from 'react';
import { StyleSheet, View } from 'react-native';
import SettingsButton from '../components/SettingsButton';

const Home = ({ navigation }) => {
  return (
    <View>
      <SettingsButton navigation={navigation} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});