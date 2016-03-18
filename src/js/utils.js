import { readFile, writeFile } from 'fs';
import { loadTodo, loadRemember } from './actions';

const DATABASE = `${__dirname.split('/').slice(0, -1).join('/')}/database.json`;

export function updateDatabase(database) {
  return write(
    DATABASE,
    JSON.stringify({
      todos: database.todos,
      remembers: database.remembers
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

export function getPureDate(date) {
  date.millisecond(0);
  date.second(0);
  date.minute(0);
  date.hour(0);

  return date;
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
    for (let todo of state.todos) {
      dispatch(loadTodo(todo));
    }

    for (let remember of state.remembers) {
      dispatch(loadRemember(remember));
    }

    resolve();
  });
}
