import React from 'react';
import { useDispatch } from 'react-redux';
const AddTodos = () => {
  const dispatch = useDispatch();
  const ref = React.useRef();
  const insert = () => {
    const value = ref.current.value;
    dispatch({ type: 'add-todo', payload: value });
  };
  return (
    <div>
      <h3>AddTodos</h3>
      <input ref={ref} />
      <button onClick={insert}>insert todo</button>
    </div>
  );
};
export default AddTodos;
