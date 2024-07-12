const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3999;

app.use(cors());

app.get('/test', (req, res) => {
  res.send('hi joyfactory!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

