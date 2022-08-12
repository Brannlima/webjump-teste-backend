const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');
const cors = require('cors')

const routes = require('./routes');
dotenv.config()

require('./database/connection');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

let corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200, 
  methods: "GET, PUT, PATCH, DELETE, POST"
}
app.use(cors(corsOptions));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.API_PORT);

module.exports = app;
