const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/spikeball');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
routes(app);

// var players = [
//   { name: 'Jordan Deck', image: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png' },
//   { name: 'Josh Deck', image: 'https://vignette1.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/350?cb=20170701082424' },
//   { name: 'Richard Simpson', image: 'https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg' }
// ];

// app.use((err, req, res, next) => {
//   res.status(422).send({ error: err._message });
// });

module.exports = app;
