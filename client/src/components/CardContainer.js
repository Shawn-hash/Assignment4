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
  }, []);


  const handleAddItem = (newItem) => {
    dispatch(createCard(newItem)).then(() => {
      console.log("added to database");
      setItems(prevItems => [...prevItems, newItem]);
      console.log("has set");
    });
  };


  const handleDeleteItem = (itemName) => {
    const cardToDelete = items.find(item => item.name === itemName);
    if (!cardToDelete) return;

    // Dispatch the deleteCard action with the id of the card to delete
    dispatch(deleteCard(cardToDelete.name));

    // Update the items state to remove the deleted card
    setItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };

  const handleEditItem = (id, updatedItem) => {
    // Make an API request to update the card on the server
    fetch(`http://localhost:3001/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then(response => response.json())
      .then(data => {
        // Update the local state with the updated card
        setItems(prevItems => prevItems.map(item => item.id === id ? data : item));
      });
  };


  return (
    <div>
      <AddForm addItem={handleAddItem} />
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} item={item} onDelete={handleDeleteItem}/>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
