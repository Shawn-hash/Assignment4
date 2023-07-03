import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCardAsync } from '../redux/thunks';

const AddForm = ({addItem}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new item object
    const newItem = {
      name,
      description,
      price,
      image,
    };
    dispatch(addCardAsync(newItem));
    // Clear the form inputs
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  const handleClearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <form className="header" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter the item fullname"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Enter the description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          placeholder="Enter the price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          placeholder="Enter the url for the image"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="addBtn" onClick={handleClearForm}>Clear Form</button>
      <button className="addBtn" type="submit">Add Item</button>
    </form>
  );
};

export default AddForm;