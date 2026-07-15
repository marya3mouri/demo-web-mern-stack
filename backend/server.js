const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();


app.get('/', (req, res) => { 
  res.status(200).send('API is running...')
 })


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
