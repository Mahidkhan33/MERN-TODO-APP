import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <h3>Your Todos</h3>
        <p>No todos yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <h3>Your Todos ({todos.length})</h3>
      <div className="todos">
        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;