
import express from "express";
const app = express();
const port = 3000; // Change this to the desired port number


app.use(express())

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});