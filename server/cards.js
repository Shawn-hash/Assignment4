const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
   id: uuid(),
   name: String,
   description: String,
   price: String,
   image: String
});

// Create a Mongoose model based on the schema
const Card = mongoose.model('Card', cardSchema);