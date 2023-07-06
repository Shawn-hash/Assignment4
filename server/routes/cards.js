const express = require('express');
const router = express.Router();

const { getAllCards, addCard, deleteCard } = require('../controller/card.js');


router.get('/', getAllCards);

// router.get('/:cardId', getOneCard);

router.post('/', addCard);

router.delete('/:name', deleteCard);

// router.put('/:cardId', updateCard); // Extra feature


module.exports = router;
