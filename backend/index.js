const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');
const feedbackRoutes = require('./routes/feedback_submission');
const governmentInitiativesRoutes = require('./routes/government_initiatives');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Parse incoming requests with JSON payloads
app.use(express.json());

// Set the view engine and views directory for rendering
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define your routes here:
app.use('/api/users', userRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/government-initiatives', governmentInitiativesRoutes);

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start listening for incoming requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});