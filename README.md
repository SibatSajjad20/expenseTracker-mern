# Expense Tracker - MERN Stack

A full-stack expense tracking application built with MongoDB, Express.js, React, and Node.js.

## Features

- User authentication (register/login)
- Add, edit, and delete expenses
- Expense categorization
- Visual charts and analytics
- Responsive design with dark/light theme
- Real-time expense tracking

## Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- Recharts for data visualization
- React Router for navigation
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- bcrypt for password hashing

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd expenseTracker-mern
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
cp .env.example .env

npm run dev
```

## Environment Variables

### Server (.env)
```
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/expenseTracker
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Client (.env)
```
VITE_API_URL=http://localhost:3000/api
```

## Scripts

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

### Single App Deployment (Railway/Render/Heroku)
1. The app is configured as a single deployment with frontend built into the server
2. Set environment variables in your hosting platform:
   - `MONGO_URL`: Your MongoDB connection string
   - `JWT_SECRET`: Strong random secret key
   - `NODE_ENV`: production
3. Use `npm start` as the start command
4. The server will serve both API and frontend from the same domain

### Local Development
```bash
# Terminal 1 - Start backend
cd server
npm run dev

# Terminal 2 - Start frontend (for development)
cd client
npm run dev
```

### Production Build
```bash
# Build and copy frontend to server
cd server
npm run build

# Or use the build script
.\build.bat
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Expenses
- `GET /api/expenses` - Get user expenses
- `POST /api/expenses` - Create expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
