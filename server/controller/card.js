const express = require('express');
const { v4: uuid } = require('uuid');
const mongoose =  require('mongoose');
const CardDB = require("../model/cardDB.js");
const router = express.Router();

const getAllCards = async (req, res, next) => {
    try {
        const cards = await CardDB.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const addCard = async (req, res, next) => {
    const newCard = new CardDB(req.body);
    try {
        console.log("1");
        await newCard.save();
        console.log("2");
        console.log(newCard);
        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

const deleteCard = async (req, res, next) => {
    try{
        const { name } = req.params;
        const cardAfterDelete = await CardDB.findOneAndDelete({ name: name });
        res.status(200).json(cardAfterDelete);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const updateCard = async (req,res,next) => {
  try{
    const { name: _name } = req.body;
    const card = req.body;
    console.log("1");
    const updatedCard = await CardDB.findOneAndUpdate({ name: _name }, card, {new: true});
    console.log(updatedCard);
    res.json(updatedCard);
    console.log("3");
  } catch (error) {
    console.log("4");
    res.status(404).json({ message: error });
  }
};

module.exports = { getAllCards, addCard, deleteCard, updateCard };
