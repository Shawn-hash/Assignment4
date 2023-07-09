import axios from 'axios';

const url = 'http://localhost:3001/cards';

export const fetchCards = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (name, updatedCard) => axios.patch(`${url}/${name}`, updatedCard);
export const deleteCard = (name) => axios.delete(`${url}/${name}`)
