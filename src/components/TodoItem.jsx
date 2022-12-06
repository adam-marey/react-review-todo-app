import React from 'react';
import styles from './TodoItem.module.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
const TodoItem = props => {
  const { todo, completeTodo, removeTodo } = props;
  return (
    <div className={todo.completed ? 'todo-row completed' : 'todo-row'}>
      {todo.text}
      <div className={styles.iconeContainer}>
        <AiOutlineCheckCircle
          className={styles.icone}
          style={{ marginRight: 7 }}
          onClick={() => completeTodo(todo.id)}
        />

        <RiDeleteBin5Line
          className={styles.icone}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
