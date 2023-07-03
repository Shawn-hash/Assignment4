// import { REQUEST_STATE } from '../redux/utils';
// import { createSlice } from '@reduxjs/toolkit';
// import { getCardsAsync, addCardAsync } from '../redux/thunks';
//
// const INITIAL_STATE = {
//   getCards: REQUEST_STATE.IDLE,
//   addCard: REQUEST_STATE.IDLE,
//   list: [],
//   error: null,
// };
//
// const cardsSlice = createSlice({
//   name: 'cards',
//   initialState: INITIAL_STATE,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCardsAsync.pending, (state) => {
//         state.getCards = REQUEST_STATE.PENDING;
//         state.error = null;
//       })
//       .addCase(getCardsAsync.fulfilled, (state, action) => {
//         state.getCards = REQUEST_STATE.FULFILLED;
//         state.list = action.payload;
//       })
//       .addCase(getCardsAsync.rejected, (state, action) => {
//         state.getCards = REQUEST_STATE.REJECTED;
//         state.error = action.error;
//       })
//       .addCase(addCardAsync.pending, (state) => {
//         state.addCard = REQUEST_STATE.PENDING;
//         state.error = null;
//       })
//       .addCase(addCardAsync.fulfilled, (state, action) => {
//         state.addCard = REQUEST_STATE.FULFILLED;
//         state.list.push(action.payload);
//       })
//       .addCase(addCardAsync.rejected, (state, action) => {
//         state.addCard = REQUEST_STATE.REJECTED;
//         state.error = action.error;
//       });
//   },
// });
//
// export default cardsSlice.reducer;
