import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { StateProvider } from './reducer/store';

const app = (
  <StateProvider>
    <App />
  </StateProvider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
