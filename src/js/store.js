import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import moment from 'moment';
import { remote } from 'electron';
import reducers from './reducers';
import { updateDatabase, readDatabase, getPureDate, loadAll } from './utils';

const store = createStore(reducers);

hashHistory.push(`/app/${getPureDate(moment()).valueOf()}`);

readDatabase().then(database => {
  loadAll(store.dispatch, database).then(() => {
    store.subscribe(() => {
      updateDatabase(store.getState()).catch(err => {
        remote.dialog.showErrorBox(
          'Faild, Can not save database',
          err.toString()
        );
      });
    }); 
  });
}).catch(err => {
  remote.dialog.showErrorBox(
    'Faild, Can not read database',
    err.toString()
  );
});

export default store;
