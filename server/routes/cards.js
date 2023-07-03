const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const cards = [
  { id: uuid(), name: "Kitchen Towel", description: 'Scott Kitchen Towel Rolls', price: 5, image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13146286_XL1_20220802.jpg' },
  { id: uuid(), name: "Airpods Gen 3", description: "Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you're in your very own concert hall or theater", price: 169, image: 'https://www.rollingstone.com/wp-content/uploads/2021/10/DSC_0212.jpg?w=1600&h=900&crop=1' }
];

router.get('/', function (req, res, next) {
  return res.send(cards);
});

router.get('/:cardId', function (req, res, next) {
  const foundCard = cards.find(card => card.id === req.params.cardId);
  
  if (!foundCard) return res.status(404).send({ message: 'Card not found' });

  return res.send(foundCard);
});

router.post('/', function (req, res, next) {
  if (!req.body.name || !req.body.description || !req.body.price || !req.body.image) {
    return res.status(400).send({ message: 'Please fill in all the categories.' })
  }
  const card = {
    id: uuid(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };
  cards.push(card);
  return res.send(card);
});

router.delete('/:cardId', function (req, res, next) {
  const cardIndex = cards.findIndex(card => card.id === req.params.cardId);

  if (cardIndex === -1) return res.status(404).send({ message: 'Card not found' });

  const deletedCard = cards.splice(cardIndex, 1);
  return res.send(deletedCard);
});

router.put('/:cardId', function (req, res, next) {
  const cardIndex = cards.findIndex(card => card.id === req.params.cardId);

  if (cardIndex === -1) return res.status(404).send({ message: 'Card not found' });

  const updatedCard = {
    ...cards[cardIndex],
    ...req.body,
  };
  cards[cardIndex] = updatedCard;
  return res.send(updatedCard);
});


module.exports = router;
