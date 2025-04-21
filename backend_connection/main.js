const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

const app = express();
const PORT = 3000;

// Middleware setup
app.use(cors());           // enable CORS for cross-origin requests
app.use(express.json());   // parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fullstackdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => {
  console.error('MongoDB connection failed:', err);
  process.exit(1);
});

// Api
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
