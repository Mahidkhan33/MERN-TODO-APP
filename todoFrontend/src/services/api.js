import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

export const todosAPI = {
  getAll: () => api.get('/todos'),
  create: (todoData) => api.post('/todos', todoData),
  update: (id, todoData) => api.put(`/todos/${id}`, todoData),
  delete: (id) => api.delete(`/todos/${id}`),
};

export default api;