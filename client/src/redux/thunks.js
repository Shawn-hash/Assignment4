import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import { CardDB } from '../components/cardDB.js'
//
//
//export const fetchCardsAsync = createAsyncThunk(
//  'cards/getCards',
//  async () => {
//    const cards = await Card.find();
//    return cards;
//  }
//);
//
export const addCardAsync = createAsyncThunk('cards/addCard', async (item) => {
  try {
    const cardData = JSON.parse(item);
    const card = new CardDB(cardData);
    await card.save();
    return card;
  } catch (error) {
    throw new Error(error.message);
  }
});
//
//
//
//
