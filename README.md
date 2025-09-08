# 💰 Expense Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

A modern, full-stack expense tracking application built with the MERN stack. Features secure authentication, real-time data visualization, and responsive design.

## 🚀 Features

- 🔐 **Secure Authentication** - JWT-based user registration and login
- 💳 **Expense Management** - Create, read, update, and delete expenses
- 📊 **Data Visualization** - Interactive charts and analytics
- 🎨 **Modern UI/UX** - Responsive design with dark/light theme toggle
- 📱 **Mobile Friendly** - Optimized for all device sizes
- ⚡ **Real-time Updates** - Instant expense tracking and updates

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI library with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **React Router** - Declarative routing
- **Axios** - Promise-based HTTP client

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Secure token-based authentication
- **bcrypt** - Password hashing and security

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB Atlas** account - [Sign up](https://www.mongodb.com/atlas)
- **Git** - [Download](https://git-scm.com/)

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/<yourusername>/expense-tracker-mern.git
cd expense-tracker-mern
```

### 2. Environment Setup
```bash
# Backend configuration
cd server
cp .env.example .env
# Edit .env with your MongoDB Atlas connection string

# Frontend configuration
cd ../client
cp .env.example .env
```

### 3. Install Dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 4. Start Development Servers
```bash
# Terminal 1 - Backend (from server directory)
npm run dev

# Terminal 2 - Frontend (from client directory)
npm run dev
```

🎉 **Application will be available at `http://localhost:5173`**

## 🔧 Configuration

### Environment Variables

#### Server (.env)
```env
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/expenseTracker
JWT_SECRET=<your-super-secure-jwt-secret-key-min-32-chars>
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### Client (.env)
```env
VITE_API_URL=http://localhost:3000/api
```

## 📦 Production Deployment

### Single App Deployment
This application is configured for single-app deployment where the backend serves the built frontend.

```bash
# Build frontend and copy to server
cd server
npm run build

# Start production server
npm start
```

### Deployment Platforms

#### Railway / Render / Heroku
1. **Root Directory**: `server`
2. **Build Command**: `npm run build`
3. **Start Command**: `npm start`
4. **Environment Variables**:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Strong random secret (32+ characters)
   - `NODE_ENV`: `production`

## 📚 API Documentation

### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | User login | ❌ |
| POST | `/api/auth/logout` | User logout | ✅ |

### Expense Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/expenses` | Get user expenses | ✅ |
| POST | `/api/expenses` | Create new expense | ✅ |
| PUT | `/api/expenses/:id` | Update expense | ✅ |
| DELETE | `/api/expenses/:id` | Delete expense | ✅ |

## 🧪 Available Scripts

### Backend (server/)
```bash
npm start          # Production server
npm run dev        # Development with nodemon
npm run build      # Build frontend and copy to server
```

### Frontend (client/)
```bash
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint code analysis
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Tailwind CSS](https://tailwindcss.com/) for styling framework
- [Recharts](https://recharts.org/) for data visualization
- [React](https://reactjs.org/) team for the amazing framework

---

**Built with ❤️ using the MERN Stack**

*For support or questions, please open an issue on GitHub.*