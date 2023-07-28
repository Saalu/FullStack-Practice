
import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes.js'
const app = express();
// const port = 3000; // Change this to the desired port number
import dotenv from 'dotenv'
dotenv.config()

app.use(express.json())
app.use('/users',userRoutes)

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.post('/', (req, res) => {
  res.send('Hello, Express!');
});
app.put('/', (req, res) => {
  res.send('Hello, Express!');
});

const PORT = process.env.PORT || 5000
// const mongoURI = 'mongodb://localhost:27017/your-database-name';
const mongoURI = 'mongodb+srv://saalu:saalu123@cluster0.norkz.mongodb.net/Work_Side';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});