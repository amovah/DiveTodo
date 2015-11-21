import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainTodo from './components/maintodo';
import AddTodo from './components/addtodo';
import store from './stores';

render(
  <Provider store={store}>
    <MainTodo />
  </Provider>,
  document.getElementById('todo-section')
);

render(
  <Provider store={store}>
    <AddTodo />
  </Provider>,
  document.getElementById('modal')
);
