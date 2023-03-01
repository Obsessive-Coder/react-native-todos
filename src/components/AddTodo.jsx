import React, { useState } from 'react';
import { Button, SafeAreaView, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AddTodo = ({ addTodo }) => {
  const { colors } = useTheme();
  const [title, setTitle] = useState('');

  const handleOnChange = value => {
    setTitle(value)
  };

  const handleAddOnPress = () => {
    if (!title) return;

    addTodo(title);
    setTitle('');
  }

  return (
    <SafeAreaView style={{ flexDirection: 'row' }}>
      <TextInput
        value={title}
        placeholder="Enter Todo Title"
        onChangeText={handleOnChange}
        clearButtonMode="always"
        placeholderTextColor={colors.text}
        style={{
          flex: 1,
          color: colors.text,
          padding: 10,
          backgroundColor: colors.card,
          marginRight: 10
        }}
      />

      <Button
        title="Add"
        disabled={!title}
        onPress={handleAddOnPress}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </SafeAreaView>
  );
};

export default AddTodo;