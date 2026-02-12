require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('./routes/todos');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====== DB CONNECTION CACHING FOR LAMBDA ======

let isConnected;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI);
  isConnected = db.connections[0].readyState;
  console.log("MongoDB Connected");
};

// Connect on first invocation
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
app.use('/api/todos', todosRouter);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Todo API',
  });
});

module.exports = app;
