require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Connect to database with error handling
connectDB().catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

// Middleware - Enable CORS for development
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Error handler
app.use(errorHandler);

// Catch all handler for SPA (must be last)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
