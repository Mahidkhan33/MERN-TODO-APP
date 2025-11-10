import React, { useState } from 'react';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: todo.title,
    description: todo.description,
    completed: todo.completed
  });

  const handleSave = () => {
    onUpdateTodo(todo._id, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: todo.title,
      description: todo.description,
      completed: todo.completed
    });
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
          <textarea
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            rows="2"
          />
          <div className="todo-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <h4>{todo.title}</h4>
            {todo.description && <p>{todo.description}</p>}
            {todo.dueDate && (
              <small>Due: {formatDate(todo.dueDate)}</small>
            )}
            <small>Created: {formatDate(todo.createdAt)}</small>
          </div>
          <div className="todo-actions">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onUpdateTodo(todo._id, { completed: e.target.checked })}
            />
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDeleteTodo(todo._id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;