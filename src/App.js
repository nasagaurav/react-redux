import React from 'react';
import ViewNumbers from './ViewNumbers';
import ViewTopics from './ViewTopics';
import ViewTodos from './ViewTodos';
import AddNumbers from './AddNumbers';
import AddTopics from './AddTopics';
import AddTodos from './AddTodos';

export default function App() {
  return (
    <div>
      <ViewNumbers />
      <ViewTopics />
      <ViewTodos />
      <AddNumbers />
      <AddTopics />
      <AddTodos />
    </div>
  );
}
