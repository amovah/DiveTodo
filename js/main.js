import MainTodo from './components/maintodo.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';

let root = document.getElementById('todoSection');
render(
  <Provider store={store}>
    <MainTodo />
  </Provider>,
  root
);
