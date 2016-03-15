import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import moment from 'moment';
import reducers from './reducers';
import { updateDatabase, readDatabase, getPureDate } from './utils';
import { loadTodo, loadRemember } from './actions';

const store = createStore(reducers);

hashHistory.push(`/app/${getPureDate(moment()).valueOf()}`);

readDatabase().then(database => {
  for (let item of database.todos) {
    store.dispatch(loadTodo(item));
  }

  for (let item of database.remembers) {
    store.dispatch(loadRemember(item));
  }

  store.subscribe(() => {
    updateDatabase(store.getState());
  });
});

export default store;
