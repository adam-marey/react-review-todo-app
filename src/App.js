import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import styles from './App.module.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };

    let newTodo = [todo, ...todos];
    console.log(newTodo);
    setTodos([todo, ...todos]);
  };
  const completeTodo = id => {
    // console.log('helllo', id);
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = id => {
    let updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.todoApp}>
      <h1>Hello World</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => {
        return (
          <TodoItem
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
