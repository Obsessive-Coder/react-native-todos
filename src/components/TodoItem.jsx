import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({ todo: { id, title }, updateTodo, removeTodo }) => {
  const { colors } = useTheme();
  const [editTitle, setEditTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
    setEditTitle(title);
  };

  const handleOnChange = value => {
    setEditTitle(value);
  };

  const handleUpdateOnPress = () => {
    if (title !== editTitle) {
      updateTodo({ id, title: editTitle });
    }

    setIsEditing(false);
  };

  return (
    <View key={`todo-${id}`} style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
      <SafeAreaView style={{ flex: 1 }}>
        {isEditing ? (
          <TextInput
            value={editTitle}
            placeholder="Enter Todo Title"
            onChangeText={handleOnChange}
            clearButtonMode="always"
            placeholderTextColor={colors.text}
            style={{
              color: colors.text,
              padding: 10,
              backgroundColor: colors.card,
              marginRight: 20
            }}
          />
        ) : (
          <Text style={{ color: colors.text, padding: 10, marginRight: 20 }}>
            {title}
          </Text>
        )}
      </SafeAreaView>

      <View style={{ flexDirection: 'row' }}>
        {isEditing && (
          <TouchableOpacity onPress={handleUpdateOnPress}>
            <Icon name="check" size={20} color="green" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={toggleIsEditing} style={{ marginHorizontal: 15 }}>
          {isEditing ? (
            <Icon name="ban" size={20} color="lightblue" />
          ) : (
            <Icon name="pencil" size={20} color="lightblue" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => removeTodo(id)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;