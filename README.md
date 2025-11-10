# Authenticated To-Do Application

## 📋 Project Overview
A full-stack web application that allows users to securely register, login, and manage their personal to-do lists. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and JWT authentication.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes and API endpoints

### ✅ Todo Management
- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Add descriptions and due dates
- User-specific todo isolation

### 🛡️ Security
- Each user only sees their own todos
- Password encryption
- Token-based session management
- Secure API endpoints

---

## 🏗️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **Context API** - State management
- **CSS3** - Styling

---

## 📁 Project Structure

```
authenticated-todo-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Todo.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── todos.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── TodoForm.js
    │   │   ├── TodoList.js
    │   │   └── TodoItem.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create `.env` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

---

## 🌐 API Endpoints

### Authentication Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |

### Todo Routes (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get user's todos |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |

---

## 📝 Usage

1. **Registration**: Create a new user account
2. **Login**: Sign in with credentials
3. **Create Todos**: Add new tasks with optional descriptions and due dates
4. **Manage Todos**: Edit, delete, or mark tasks as complete
5. **Security**: All data is user-specific and protected

---

## 🔧 Key Features Implementation

### Backend Security
```javascript
// JWT Authentication Middleware
const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  // Verify token and attach user to request
};
```

### Frontend State Management
```javascript
// Auth Context for global state
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
```

### User-specific Data
```javascript
// Only return todos for authenticated user
const todos = await Todo.find({ user: req.user._id });
```

---

## 🎯 Learning Objectives

- ✅ MongoDB integration with Mongoose ODM
- ✅ JWT authentication implementation
- ✅ Protected route middleware
- ✅ User-based data isolation
- ✅ React context for state management
- ✅ Full CRUD operations
- ✅ Secure password handling

---

## 🔒 Security Measures

- Passwords hashed with bcrypt
- JWT tokens for stateless authentication
- User data isolation at database level
- Protected API endpoints
- CORS configuration
- Environment variables for sensitive data

---

## 🚀 Deployment Notes

### Backend Deployment
- Set environment variables in production
- Use MongoDB Atlas for cloud database
- Configure CORS for production domain

### Frontend Deployment
- Update API base URL for production
- Build optimized production version
- Deploy to services like Netlify, Vercel, or AWS

---

## 📞 Support

For issues or questions regarding this project, please refer to the API documentation or check the server logs for error details.


**Built with ❤️ using the MERN Stack**