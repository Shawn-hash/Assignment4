import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import mongoose from 'mongoose';
import {getCards, createCard, deleteCard, updateCard} from '../actions/actionTypes';

const CardContainer = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const fetchCards = () => {
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(data => setItems(data));
  };

  useEffect(() => {
    fetchCards();
  }, [items]);


  const handleAddItem = (newItem) => {
    dispatch(createCard(newItem))
  };


  const handleDeleteItem = (itemName) => {
    const cardToDelete = items.find(item => item.name === itemName);
    if (!cardToDelete) return;

    // Dispatch the deleteCard action with the id of the card to delete
    dispatch(deleteCard(cardToDelete.name));

    // Update the items state to remove the deleted card
    setItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };



  return (
    <div>
      <AddForm addItem={handleAddItem} />
      <div className="card-container">
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            onDelete={handleDeleteItem}
            />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
