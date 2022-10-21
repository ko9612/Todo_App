/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
import './Todo.css';

const TodoList = ({ todos, onDelete, onCheck }) => {
  return (
    <ul className="TodoList">
      {todos.map((todos) => (
        <TodoItem
          key={todos.id}
          todos={todos}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      ))}
    </ul>
  );
};

export default TodoList;
