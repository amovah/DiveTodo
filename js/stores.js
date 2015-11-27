import { createStore } from 'redux';
import todoApp from './reducers';
import * as actions from './actions';
import fs from 'fs';
import database from '../database.json';

function save(database, state) {
  database[state.date] = state;
  let data = JSON.stringify(database, null, 2);
  let dir = __dirname.split('/').slice(0, -1).join('/');
  fs.writeFileSync(dir + '/database.json', data);
}

function init(database, date) {
  database[date] = {};
  database[date].todos = [];
  database[date].remembers = [];
}

function runTask(store, data) {
  for (let section in data)
    for (let item of data[section].database)
      store.dispatch(data[section].action(item));
}

let store = createStore(todoApp),
    now = store.getState().date;

if (!database[now]) {
  init(database, now);
  save(database, store.getState());
} else {
  runTask(store, {
    todos: {
      database: database[now].todos,
      action: actions.loadTodo
    },
    remembers: {
      database: database[now].remembers,
      action: actions.addRemember
    }
  });
}

let tempDate = now,
    clearState;

store.subscribe(() => {
  const state = store.getState();
  if (state.date !== tempDate) {
    tempDate = state.date;
    clearState = true;
    store.dispatch(actions.clear());

    if (database[state.date]) {
      runTask(store, {
        todos: {
          database: database[state.date].todos,
          action: actions.loadTodo
        },
        remembers: {
          database: database[state.date].remembers,
          action: actions.addRemember
        }
      });
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
