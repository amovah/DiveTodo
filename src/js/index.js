import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/components/App';
import store from './js/store';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

// TODO: add notification for uncompletetd todos
