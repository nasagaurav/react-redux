import React from 'react';
import { useDispatch } from 'react-redux';
const AddTopics = () => {
  const dispatch = useDispatch();
  const ref = React.useRef();
  const insert = () => {
    const value = ref.current.value;
    dispatch({ type: 'add-topic', payload: value });
  };
  return (
    <div>
      <h3>AddTopics</h3>
      <input ref={ref} />
      <button onClick={insert}>insert topic</button>
    </div>
  );
};
export default AddTopics;
