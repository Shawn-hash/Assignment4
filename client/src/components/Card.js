import React, { useState } from 'react';
import Popup from './Popup';
import { useDispatch, useSelector } from 'react-redux';
import WebDisplayReducer from '../reducers/WebDisplayReducer.js';
import { decrementQuantity, incrementQuantity} from '../actions/changeQuantity';
import { deleteCardAsync } from '../redux/thunks';
import {updateCard} from '../actions/actionTypes';


const Card = ({ item, onDelete }) => {
  let [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  // const quantity = useSelector((state) => state.quantityCount && state.quantityCount.quantities[item.name] || 0);
  const [updateDescription, setUpdateDescription] = useState('');

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDelete = () => {
    onDelete(item.name);
  };

  if (!item || !item.name || !item.description || !item.price || !item.image) {
     return null;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedCard = { ...item, description: updateDescription };
    dispatch(updateCard(item.name, updatedCard));
  }

  return (
    <div className="card">
      <span className="close-btn" onClick={handleDelete}>×</span>
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <h3>{item.name}</h3>
      </div>
      {!showPopup && <button onClick={handleCardClick}>Expand</button>}
      {showPopup && <Popup item={item} onClose={handleClosePopup} />}
      <form className="header" onSubmit={handleUpdate}>
        <div className="field">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={updateDescription}
          placeholder="Enter the description"
          onChange={(e) => setUpdateDescription(e.target.value)}
        />
        </div>
        <button className="addBtn" type="submit">Update Description</button>
      </form>
    </div>
  );
};

export default Card;