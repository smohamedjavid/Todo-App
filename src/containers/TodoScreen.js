import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, FlatList } from "react-native";
import { connect } from 'react-redux';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import NewTodo from '../components/NewTodo';
import { addTodo, deleteTodo, updateTodo } from '../../store/actions/todoActions';

filterTodosByScreen = (screen, todos) => {
  if (screen == "Active") {
    return todos.filter(function (todo) {
      return !todo.completed;
    })
  } else if (screen == "Completed") {
    return todos.filter(function (todo) {
      return todo.completed;
    })
  } else {
    return todos;
  }
}

export const TodoScreen = (props) => {

  const [addTodoModalVisible, setAddTodoModalVisiblility] = useState(false)

  const { updateTodo, deleteTodo, addTodo, screen, todos, showNewTodo } = props

  const todoList = filterTodosByScreen(screen, todos)

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#01B4DE" />
      <Header
        style={{ height: '8%', backgroundColor: '#01B4DD', justifyContent: 'center' }}
        screenName={screen}
        showAddTodo={showNewTodo}
        openModal={setAddTodoModalVisiblility}
      />
      <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 16, paddingTop: '5%', paddingLeft: '5%' }}>Todo List</Text>
      {todoList.length > 0 ?
        <FlatList
          style={{ paddingTop: '1%' }}
          data={todoList}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={({ item }) =>
            <TodoItem todo={item} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          }
        /> :
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 16, }}>No {screen} todos</Text>
        </View>}
      <NewTodo
        visible={addTodoModalVisible}
        closeModal={setAddTodoModalVisiblility}
        addTodo={addTodo}
      />
    </View>
  )
}

const mapStateToProps = state => ({
  todos: state.todo.todos
})

export default connect(mapStateToProps, { addTodo, deleteTodo, updateTodo })(TodoScreen)