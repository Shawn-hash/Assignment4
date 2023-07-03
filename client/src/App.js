import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <CardContainer items={items} />
    </div>
  );
};

export default App;
