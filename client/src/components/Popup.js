import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WebDisplayReducer from '../reducers/WebDisplayReducer.js';
import { decrementQuantity, incrementQuantity} from '../actions/changeQuantity';
import { deleteCardAsync } from '../redux/thunks';
import {getCard} from '../actions/actionTypes';

const Popup = ({ item, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <p>{item.description}</p>
        <p>Price: {item.price}</p>
        <p>Company Name: {item.company}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;