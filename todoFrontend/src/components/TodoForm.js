import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      onAddTodo({
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate || undefined
      });
      setFormData({
        title: '',
        description: '',
        dueDate: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h3>Add New Todo</h3>
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          placeholder="Description (optional)"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
      </div>
      <div className="form-group">
        <label>Due Date (optional):</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;