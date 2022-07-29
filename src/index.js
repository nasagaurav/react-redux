import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function reducer(state = { a: [], b: [], c: [], counter: 0 }, action) {
  console.log('this is coming from reducer() in index.js', action);
  switch (action.type) {
    case '+':
      return { ...state, counter: state.counter + 1 };
    case '-':
      return { ...state, counter: state.counter - 1 };
    case '0':
      return { ...state, counter: 0 };
    case 'add-number':
      return { ...state, a: [...state.a, action.payload] };
    default:
      return state;
  }
}

root.render(
  <StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </StrictMode>
);
