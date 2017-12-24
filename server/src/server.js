// @flow
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var Raven = require('raven');

axios.defaults.baseURL = 'http://www.colourlovers.com/api/palettes';
axios.defaults.params = { format: 'json' };

Raven.config(process.env.SENTRY_DSN).install();

// Create Express App
const app = express();

// Initialize Middleware
app.use(Raven.requestHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Controllers
const randomController = require('./controllers/randomController');
const changeController = require('./controllers/changeController');
const imageController = require('./controllers/imageController');

// Assign Routes and Controllers
app.get('/api/image/:palette', imageController.drawImage);
app.get('/api/random', randomController.getRandom);
app.post(
  '/api/change',
  changeController.hasExactMatch,
  changeController.hasClosestHexMatch,
  randomController.getRandom
);

// Initialize error handling
app.use(Raven.errorHandler());

// Initialize Express server
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function() {
  console.log(
    'Express server listening on port %d in %s mode',
    app.get('port'),
    app.get('env')
  );
});
