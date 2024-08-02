const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Add middleware to parse JSON requests

// Example route
app.post('/api/upload', (req, res) => {
  // Your file upload handling logic here
  res.send('File uploaded!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
