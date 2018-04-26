const express = require('express');
const morgan = require('morgan');

// initialise app
const app = express();

// load middleware
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('pi-api');
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
