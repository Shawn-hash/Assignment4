export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const incrementQuantity = (itemName) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: itemName,
  };
};

export const decrementQuantity = (itemName) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: itemName,
  };
};