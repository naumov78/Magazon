import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
