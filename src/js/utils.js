import { writeFileSync, readFile } from 'fs';

const DATABASE = `${__dirname.split('/').slice(0, -1).join('/')}/database.json`;

export function updateDatabase(database) {
  writeFileSync(
    DATABASE,
    JSON.stringify({
      todos: database.todos,
      remembers: database.remembers
    }, null, 2)
  );
}

export function readDatabase() {
  return new Promise(resolve => {
    readFile(DATABASE, (err, file) => {
      resolve(JSON.parse(file));
    });
  });
}

export function pureDate(date) {
  return new Date(
    date.getFullYear(), date.getMonth(), date.getDate()
  ).getTime();
}

export function find(state, id) {
  for (let [index, item] of state.entries()) {
    if (item.id === id) {
      return index;
    }
  }
}
