const express = require('express');
const morgan = require('morgan');
const cmd = require('node-cmd');

// initialise app
const app = express();

// load middleware
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('pi-api');
});

app.get('/tv', (req, res, next) => {
  console.log(req.path);
  res.send('tv controller');
});
// turn TV on
app.get('/tv/on', (req, res, next) => {
  cmd.get('echo "on 0" | cec-client RPI -s -d 1', (err, data, stderr) => {
    if(err) res.status(401).send(err);
    else res.send('OK');
  });
});
// turn TV off
app.get('/tv/off', (req, res, next) => {
  cmd.get('echo "standby 0" | cec-client RPI -s -d 1', (err, data, stderr) => {
    if(err) res.status(401).send(err);
    else res.send('OK');
  });
});
// change source to Intel NUC
app.get('/tv/nuc', (req, res, next) => {
  cmd.get('echo "is" | cec-client RPI -s -d 1', (err, data, stderr) => {
    if(err) res.status(401).send(err);
    else res.send('OK');
  });
});
//change source to Raspberry Pi
app.get('/tv/pi', (req, res, next) => {
  cmd.get('echo "as" | cec-client RPI -s -d 1', (err, data, stderr) => {
    if(err) res.status(401).send(err);
    else res.send('OK');
  });
});

app.listen(3001, () => {
  console.log(`Server is listening on port 3001`);
});
