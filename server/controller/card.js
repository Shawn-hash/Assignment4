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
        const {id: _id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No card with that id');
        const cardAfterDelete = await CardDB.findByIdAndDelete(_id);
        res.status(200).json(cardAfterDelete);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


module.exports = { getAllCards, addCard, deleteCard };
