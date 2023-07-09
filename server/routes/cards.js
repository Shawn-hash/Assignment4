const express = require('express');
const router = express.Router();

const { getAllCards, addCard, deleteCard, updateCard } = require('../controller/card.js');


router.get('/', getAllCards);

// router.get('/:cardId', getOneCard);

router.post('/', addCard);

router.delete('/:name', deleteCard);

router.patch('/:name', updateCard);


module.exports = router;
