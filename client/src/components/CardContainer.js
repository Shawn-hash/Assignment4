import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import mongoose from 'mongoose';

// const CardDB = require('./cardDB');

const cardSchema = mongoose.Schema({
   name: String,
   description: String,
   price: String,
   image: String
});

const CardDB = mongoose.model('cards', cardSchema);

const CardContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  console.log(CardDB);
  const fetchData = async () => {
    try {
      const cards = await CardDB.find({});
      setItems(cards);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  // Call the fetchData function when the component mounts
  fetchData();
}, []);

  const handleAddItem = (newItem) => {
    // Make an API request to add a new card to the server
    console.log("reach to CardContainer");
    fetch('http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        // Update the local state with the new card
        setItems(prevItems => [...prevItems, data]);
      });
  };

  const handleDeleteItem = async (itemName) => {
    const cardToDelete = items.find(item => item.name === itemName);
    if (!cardToDelete) return;

    try {
      await CardDB.findOneAndRemove({ name: itemName });
      setItems(prevItems => prevItems.filter(item => item.name !== itemName));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
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
