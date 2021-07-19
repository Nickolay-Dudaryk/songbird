import express from 'express';
import dotenv from 'dotenv';
import birds from './data/birds-data.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/birds', (req, res) => {
  res.json(birds)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));