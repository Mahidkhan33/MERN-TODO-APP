import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import TodoForm from './components/TodoForm';
import TodoList from './components/Todolist';
import { todosAPI } from './services/api';
import './App.css';

function App() {
  const { user, logout, loading } = useAuth();
  const [currentView, setCurrentView] = useState('login');
  const [todos, setTodos] = useState([]);
  const [loadingTodos, setLoadingTodos] = useState(false);

  useEffect(() => {
    if (user) {
      fetchTodos();
    }
  }, [user]);

  const fetchTodos = async () => {
    setLoadingTodos(true);
    try {
      const response = await todosAPI.getAll();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoadingTodos(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      const response = await todosAPI.create(todoData);
      setTodos([response.data, ...todos]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleUpdateTodo = async (id, updates) => {
    try {
      const response = await todosAPI.update(id, updates);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todosAPI.delete(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="app">
        <div className="auth-container">
          {currentView === 'login' ? (
            <Login switchToRegister={() => setCurrentView('register')} />
          ) : (
            <Register switchToLogin={() => setCurrentView('login')} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Todo App</h1>
        <div className="user-info">
          <span>Welcome, {user.username}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      
      <main className="app-main">
        <TodoForm onAddTodo={handleAddTodo} />
        
        {loadingTodos ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
      </main>
    </div>
  );
}

export default App;