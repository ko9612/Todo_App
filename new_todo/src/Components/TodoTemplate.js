import { useRef, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todo.css';
// import axios from "axios";

const TodoTemplate = () => {
  const inum = useRef(1);

  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: inum.current++,
        text: text,
        checked: false,
      },
    ]);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  };

  return (
    <div className="TodoTemplate">
      <h1>To Do List</h1>
      <TodoInput onAdd={onAdd} />{' '}
      <TodoList todos={todos} onDelete={onDelete} onCheck={onCheck} />
    </div>
  );
};

export default TodoTemplate;
