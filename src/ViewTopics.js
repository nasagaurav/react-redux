import { useSelector } from 'react-redux';
import React from 'react';
const ViewTopics = () => {
  const state = useSelector((s) => s);
  return (
    <div>
      <h3>ViewTopics {state.b.length}</h3>
      <ul>
        {state.b.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};
export default ViewTopics;
