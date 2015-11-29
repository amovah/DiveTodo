import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './stores';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

let date = new Date();

function notify() {
  let now = date.toString().split(' ').slice(1, 4).join(' '),
      todos = require(__dirname.split('/').slice(0, -1).join('/') +
  '/database.json')[now].todos;

  if (!todos.every(item => item.completed)) {
    let uncompletedTodos = todos.filter(item => !item.completed).length;
    new Notification('DiveTodo', {
      body: `Hurry up, You have ${uncompletedTodos} uncompleted todo(s) :(`
    });
  }
}

setTimeout(notify, 20 - date.getHours());
