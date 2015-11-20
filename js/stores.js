import { createStore } from 'redux';
import todoApp from './reducers';
import * as actions from './actions';
import fs from 'fs';
import database from '../database.json';

let store = createStore(todoApp);

for (let item of database.todos)
  store.dispatch(actions.loadTodo(item));

store.subscribe(() => {
  let data = JSON.stringify(store.getState(), null, 2);
  fs.writeFileSync('./database.json', data);
});

export default store;
