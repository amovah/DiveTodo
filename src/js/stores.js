import { createStore } from 'redux';
import todoApp from './reducers';
import * as actions from './actions';
import fs from 'fs';
import database from '../database.json';

function save(database, state) {
  let tempState = Object.assign({}, state);
  delete tempState.date;
  database[state.date] = tempState;
  let data = JSON.stringify(database, null, 2);
  let dir = __dirname.split('/').slice(0, -1).join('/');
  fs.writeFileSync(dir + '/database.json', data);
}

function init(database, date) {
  database[date] = {};
  database[date].todos = [];
  database[date].remembers = [];
}

function loadData(store, actions, database) {
  let now = store.getState().date,
      data = {
        todos: {
          database: database[now].todos,
          action: actions.loadTodo
        },
        remembers: {
          database: database[now].remembers,
          action: actions.addRemember
        }
      };

  for (let section in data)
    for (let item of data[section].database)
      store.dispatch(data[section].action(item));
}

let store = createStore(todoApp),
    tempDate = store.getState().date,
    clearState;

if (!database[tempDate]) {
  init(database, tempDate);
  save(database, store.getState());
} else {
  loadData(store, actions, database);
}

store.subscribe(() => {
  const state = store.getState();
  if (state.date !== tempDate) {
    tempDate = state.date;
    clearState = true;
    store.dispatch(actions.clear());

    if (database[state.date]) {
      loadData(store, actions, database);
    } else {
      init(database, state.date);
    }

  } else if (!clearState) {
    save(database, state);
  } else {
    clearState = false;
  }
});

export default store;
