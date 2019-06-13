require('dotenv').config(); // for env variables
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const router = express.Router();

// Set routes
router.use('/', apiRoutes);

const PORT = process.env.PORT; // eslint-disable-line prefer-destructuring

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const sendFileOptions = {
  root: path.join(__dirname, '../build'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

// Define routes
app.get('/', (req, res) => {
  console.log('returning root matcher');
  res.sendFile('index.html', sendFileOptions);
});

// catch 404's
app.use((req, res) => {
  // if we're asking for a URL, always return index.html
  if (req.originalUrl.indexOf('.') < 0) {
    console.log(`404 in ${req.originalUrl}, returning index.html`);
    res.sendFile(path.join(__dirname, '../build/index.html'));
  } else { // For anything with an extension, just 404
    console.log(`404 in ${req.originalUrl}, returning error`);
    res.status(404).send('Not found');
  }
});

// Error-handling middleware must provide four arguments to
// identify it as an error-handling middleware function
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log('caught error', err);
  res.status(err.code).json({ msg: err.msg });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!  from ${__dirname}`);
});
