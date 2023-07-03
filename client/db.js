const mongoose = require('mongoose');

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
