import React, { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = props => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className={styles.todoInput}
        placeholder="Add a todo"
      />
      <button className={styles.todoButton}>Add todo</button>
    </form>
  );
};

export default TodoForm;
