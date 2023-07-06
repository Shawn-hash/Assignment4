import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCardAsync } from '../redux/thunks';
import {createCard, updateCard} from '../actions/actionTypes';

const AddForm = ({addItem}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [company, setCompany] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, description, price, company, image };
    dispatch(createCard(newItem));

    // Clear the form inputs
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setCompany('');
  };

  const handleClearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setCompany('');
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
              <label htmlFor="company">Company Name:</label>
              <input
                type="text"
                id="company"
                value={image}
                placeholder="Enter the company name"
                onChange={(e) => setCompany(e.target.value)}
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