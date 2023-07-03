import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import { Card } from './cards'


export const fetchCardsAsync = createAsyncThunk(
  'cards/getCards',
  async () => {
    const cards = await Card.find();
    return cards;
  }
);

export const addCardAsync = createAsyncThunk('cards/addCard', async (item) => {
  try {
    // Parse the item JSON into a JavaScript object
    const cardData = JSON.parse(item);

    // Create a new Card instance using the parsed data
    const card = new Card(cardData);

    // Save the card to the MongoDB database
    await card.save();

    return card;
  } catch (error) {
    throw new Error(error.message);
  }
});


export const deleteCardAsync = createAsyncThunk(
  'cards/deleteCard',
  async (id) => {
    // Make the API request to delete the card with the given id
    const response = await fetch('http://localhost:3001/:id', {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }

    // Return the id as the fulfilled action payload
    return id;
  }
);


