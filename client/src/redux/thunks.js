import { createAsyncThunk } from '@reduxjs/toolkit';
// import { actionTypes } from '../actions/actionTypes';
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
//export const addCardAsync = createAsyncThunk('cards/addCard', async (item) => {
//  console.log("reach thunks");
//  try {
//    const cardData = JSON.stringify(item);
//    console.log(cardData);
//    const card = new CardDB(item);
//    console.log("card");
//    await card.save();
//    console.log("reached");
//    return card;
//  } catch (error) {
//    console.log("thunk error reached" + error);
//    throw new Error(error.message);
//  }
//});
//
//
//
//
