import React from 'react';
import { useSelector } from 'react-redux';
const ViewCounter = () => {
  const state = useSelector((s) => s);
  console.log(state);
  return (
    <div>
      <h1>Counter : {state.counter}</h1>
    </div>
  );
};
export default ViewCounter;
