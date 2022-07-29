import React from 'react';
import { useSelector } from 'react-redux';
const ViewTodos = () => {
  const state = useSelector((s) => s);
  return (
    <div>
      <h3>ViewTodos {state.c.length}</h3>
      <ul>
        {state.c.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};
export default ViewTodos;
