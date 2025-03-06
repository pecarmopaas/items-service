const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/users', (req, res) => {
  res.send('All items');
});

app.post('/users', (req, res) => {
  res.send('Item was added');
});

app.delete('/users', (req, res) => {
  res.send('Item was deleted');
});

app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
