import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';

// Custom Components.
import SettingsButton from '../components/SettingsButton';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

const Home = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = title => {
    setTodos([...todos, { id: todos.length, title }]);
  };

  const handleUpdateTodo = ({ id, title }) => {
    const updatedTodos = todos.map((todo) => {
      const updatedTodo = { ...todo };

      if (todo.id === id) {
        updatedTodo.title = title;
      }

      return updatedTodo;
    });

    setTodos(updatedTodos);
  };

  const handleRemoveTodo = id => {
    if (id === null || id === undefined) return;

    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const showDeleteAlert = id => {
    const bodyText = 'Are you sure you want to delete this todo item?';

    if (Platform.OS === 'web') {
      const isConfirmed = confirm(bodyText);
      if (isConfirmed) {
        handleRemoveTodo(id);
      }
    } else {
      Alert.alert('Confirm Deletion', bodyText, [{
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => handleRemoveTodo(id)
      }]);
    }
  };


  return (
    <View>
      <SettingsButton navigation={navigation} />

      <View style={{ padding: 10 }}>
        <AddTodo addTodo={handleAddTodo} />
        <Todos todos={todos} updateTodo={handleUpdateTodo} removeTodo={showDeleteAlert} />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});