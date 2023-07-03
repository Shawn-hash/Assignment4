import { DECREMENT_QUANTITY, INCREMENT_QUANTITY } from '../actions/changeQuantity';

const initialState = {
  quantities: {},
};

const quantityCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_QUANTITY:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.payload]: Math.max(0, (state.quantities[action.payload] || 0) - 1),
        },
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.payload]: (state.quantities[action.payload] || 0) + 1,
        },
      };

    default:
      return state;
  }
};

export default quantityCountReducer;
