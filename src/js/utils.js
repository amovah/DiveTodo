import { readFile, writeFile } from 'fs';
import moment from 'moment';
import {
  loadTodo,
  loadRemember,
  saveConfig,
  CONFIG_KEEP,
  CONFIG_MOVE,
  CONFIG_REMOVE
} from './actions';

const DATABASE = `${__dirname.split('/').slice(0, -1).join('/')}/database.json`;

export function updateDatabase(database) {
  return write(
    DATABASE,
    JSON.stringify({
      todos: database.todos,
      remembers: database.remembers,
      config: database.config
    }, null, 2)
  );
}

export function readDatabase() {
  return read(DATABASE, 'utf8').then(file => {
    return JSON.parse(file);
  });
}

export function find(state, id) {
  for (let [index, item] of state.entries()) {
    if (item.id === id) {
      return index;
    }
  }
}

export function write(...args) {
  return new Promise((resolve, reject) => {
    writeFile(...args, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

export function read(...args) {
  return new Promise((resolve, reject) => {
    readFile(...args, (err, file) => {
      if (err) {
        reject(err);
      }
      resolve(file);
    });
  });
}

export function loadAll(dispatch, state) {
  return new Promise(resolve => {
    let now = moment().startOf('day').valueOf();
    dispatch(saveConfig(state.config));

    for (let todo of state.todos) {
      switch(state.config.todos) {
        case CONFIG_KEEP:
          dispatch(loadTodo(todo));
          break;
        case CONFIG_MOVE:
          if (todo.date < now && !todo.completed) {
            todo.date = now;
            dispatch(loadTodo(todo));
          } else if (todo.date >= now) {
            dispatch(loadTodo(todo));
          }
          break;
        case CONFIG_REMOVE:
          if (todo.date >= now) {
            dispatch(loadTodo(todo));
          }
          break;
      }
    }

    for (let remember of state.remembers) {
      switch(state.config.remembers) {
        case CONFIG_KEEP:
          dispatch(loadRemember(remember));
          break;
        case CONFIG_REMOVE:
          if (remember.date >= now) {
            dispatch(loadRemember(remember));
          }
          break;
      }
    }

    resolve();
  });
}
