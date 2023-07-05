import {getCards, createCard, updateCard, deleteCard} from '../actions/actionTypes';

 export default (cards = [], action) => {
     switch (action.type){
         //return value is the array of cards
         case 'UPDATE':{
             return cards.map((card) => card._id===action.payload._id ? action.payload : card)
             // return cards.map((card) => card===action.payload._id ? action.payload : card)
         }
         case 'FETCH_ALL':
             return action.payload;
         case 'CREATE':
             return [...cards, action.payload];
         case 'DELETE':
             //id of the deleted card is passed down from action
             return cards.filter((p)=>p._id !== action.payload);
 // action.payload is the id of the card we want to delete, NOT action._id !!!!!
         default:
             return cards;
     }
 }