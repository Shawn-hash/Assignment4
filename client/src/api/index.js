import axios from 'axios';

const url = 'http://localhost:3001/cards/';

export const fetchCards = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (id, updatedCard) => axios.patch(`${url}/${id}`, updatedCard);
export const deleteCard = (name) => axios.delete(`${url}/${name}`)
