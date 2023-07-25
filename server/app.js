const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const cardRouter = require('./routes/cards');

const app = express();
// 1
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cards', cardRouter);

const mongoAtlasUri = 'mongodb+srv://m001-student:m001-mongodb-basics@cluster0.lvxam3o.mongodb.net'

mongoose.connect(
  mongoAtlasUri,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to the MongoDB server');
  })
  .catch((err) => {
    console.error('Error connecting to the MongoDB server', err);
  });

module.exports = app;
