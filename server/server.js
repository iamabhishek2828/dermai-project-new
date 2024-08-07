const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;

// Set up multer for file uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(express.json());

// Define routes
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle file processing and prediction logic here
  // For example, you can run the uploaded file through your model
  res.json({ prediction: [/*...*/] });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
