const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

db.sync();

app.use(express.json());

app.use('/api/user', require('./routes/userRoutes'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});