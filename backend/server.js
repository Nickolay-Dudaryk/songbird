const express = require('express');
const birds = require('./data/birds-data')

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/birds', (req, res) => {
  res.json(birds)
})

app.listen(5000, console.log('port 5000 is working'));