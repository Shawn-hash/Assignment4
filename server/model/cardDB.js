const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const cardSchema = new mongoose.Schema({
   name: String,
   description: String,
   price: String,
   image: String
});

const CardDB = mongoose.model('cards', cardSchema);

module.exports = CardDB;