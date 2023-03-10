import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom Components.
import SettingsButton from '../components/SettingsButton';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const [todos, setTodos] = useState([]);
  const [isCompleteShown, setIsCompleteShown] = useState(false);

  const handleToggleIsCompleteShown = () => setIsCompleteShown(!isCompleteShown);

  const handleAddTodo = async title => {
    storeData([...todos, { id: todos.length, title, isComplete: false }]);
  };

  const handleUpdateTodo = ({ id, title, isComplete }) => {
    const updatedTodos = todos.map((todo) => {
      let updatedTodo = { ...todo };

      if (todo.id === id) {
        updatedTodo = { ...updatedTodo, id, title, isComplete };
      }

      return updatedTodo;
    });

    storeData(updatedTodos);
  };

  const handleRemoveTodo = id => {
    if (id === null || id === undefined) return;

    const updatedTodos = todos.filter(todo => todo.id !== id);
    storeData(updatedTodos);
  };

  const showDeleteAlert = id => {
    if (id === null || id === undefined) return;
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

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('todos', jsonValue)
      getData();
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todos');
      setTodos(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log(e);
    }
  }

  todos.sort(({ isComplete: a }, { isComplete: b }) => a - b);

  useEffect(() => { getData() }, [])


  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox value={isCompleteShown} onValueChange={handleToggleIsCompleteShown} />
          <Text style={{ color: colors.text, marginHorizontal: 10 }}>Show Completed</Text>
        </View>

        <SettingsButton navigation={navigation} />
      </View>

      <View style={{ padding: 10 }}>
        <AddTodo addTodo={handleAddTodo} />
        <Todos
          todos={todos}
          isCompleteShown={isCompleteShown}
          updateTodo={handleUpdateTodo}
          removeTodo={showDeleteAlert}
        />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});