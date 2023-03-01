import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

// Custom Components.
import TodoItem from './TodoItem';

const Todos = ({ todos = [], isCompleteShown, updateTodo, removeTodo }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            isCompleteShown={isCompleteShown}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        )}
        keyExtractor={item => item.id}
        style={{ paddingVertical: 40 }}
      />
    </SafeAreaView>
  );
};

export default Todos;