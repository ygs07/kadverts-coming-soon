const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
  });

  app.post('/subscribe', (req, res) => {
    res.send('Hello');
  });

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));