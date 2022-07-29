import React from 'react';
import { useSelector } from 'react-redux';
const ViewNumbers = () => {
  const state = useSelector((s) => s);
  return (
    <div>
      <h3>ViewNumbers {state.a.length}</h3>
      <ul>
        {state.a.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};
export default ViewNumbers;
