import React from 'react';

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