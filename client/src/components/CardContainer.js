import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddForm from './AddForm';

const CardContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the initial list of cards from the server when the component mounts
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleAddItem = (newItem) => {
    // Make an API request to add a new card to the server
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

  const handleDeleteItem = (itemName) => {
    // Find the card with the given name
    const cardToDelete = items.find(item => item.name === itemName);
    if (!cardToDelete) return;

    // Make an API request to delete the card from the server
    fetch(`http://localhost:3001/cards/${cardToDelete.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the local state to remove the deleted card
        setItems(prevItems => prevItems.filter(item => item.name !== itemName));
      });
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
