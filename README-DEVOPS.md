# DevOps Implementation - MERN Todo App

## 🐳 Docker & CI/CD Setup

This project demonstrates a complete DevOps pipeline for a MERN stack Todo application with authentication.

### 🔄 CI/CD Pipeline Features

The GitHub Actions pipeline automatically runs on every push to main/master:

1. **✅ Validate Docker Configuration**
   - Checks all required Docker files exist
   - Validates docker-compose.yml syntax

2. **🧪 Test Backend**
   - Starts MongoDB service
   - Tests API endpoints (health, auth)
   - Verifies database connectivity

3. **🎨 Test Frontend**
   - Installs dependencies
   - Builds React application
   - Runs frontend tests

4. **🐳 Build Docker Images**
   - Builds backend Docker image
   - Builds frontend Docker image
   - Verifies images are created successfully

5. **🔄 Integration Test**
   - Starts full stack with Docker Compose
   - Tests inter-service communication
   - Verifies health endpoints

### 🚀 How to Use

#### Without Docker (Development):
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm start

# Start all services
docker-compose up --build

# Access the application:
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000