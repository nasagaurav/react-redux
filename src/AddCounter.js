import React from 'react';
import { useDispatch } from 'react-redux';
const AddCounter = () => {
  const dispatch = useDispatch();

  const p1 = () => dispatch({ type: '+' });
  const p2 = () => dispatch({ type: '-' });
  const p3 = () => dispatch({ type: '0' });
  return (
    <div>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </div>
  );
};

export default AddCounter;
