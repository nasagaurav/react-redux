import { useDispatch } from 'react-redux';
import React from 'react';
const AddNumbers = () => {
  const dispatch = useDispatch();
  const ref = React.useRef();

  const insert = () => {
    const value = ref.current.value;
    dispatch({ type: 'add-number', payload: value });
  };
  return (
    <div>
      <h3>AddNumbers</h3>
      <input ref={ref} />
      <button onClick={insert}>Add Number</button>
    </div>
  );
};
export default AddNumbers;
