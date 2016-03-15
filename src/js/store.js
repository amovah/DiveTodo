import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import { hashHistory } from 'react-router';
import reducers from './reducers';
import { pureDate, updateDatabase, readDatabase } from './utils';
import { loadTodo, loadRemember } from './actions';

const store = createStore(
  reducers,
  applyMiddleware(routerMiddleware(hashHistory))
);

store.dispatch(push(`/app/${pureDate(new Date())}`));

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
