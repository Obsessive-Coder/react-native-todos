import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsButton = ({ navigation }) => {
  const handleSettingsOnPress = () => navigation.navigate('Settings');

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}
      onPress={handleSettingsOnPress}
    >
      <Icon name="gear" size={25} color="grey" />
    </TouchableOpacity>
  );
};

export default SettingsButton;