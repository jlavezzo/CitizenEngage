const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // Suppress the strictQuery deprecation warning

const connectDB = async () => {
  try {
    const connectionString = 'mongodb://localhost:27017/citizen_engage';
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;