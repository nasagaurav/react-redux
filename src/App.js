import React from 'react';
import ViewNumbers from './ViewNumbers';
import ViewTopics from './ViewTopics';
import ViewTodos from './ViewTodos';
import AddNumbers from './AddNumbers';
import AddTopics from './AddTopics';
import AddTodos from './AddTodos';
import AddCounter from './AddCounter';
import ViewCounter from './ViewCounter';

export default function App() {
  return (
    <div>
      <AddNumbers />
      <AddTopics />
      <AddTodos />
      <ViewNumbers />
      <ViewTopics />
      <ViewTodos />
    </div>
  );
}
