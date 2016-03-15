import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store';
import DiveTodo from './DiveTodo';
import DoRemember from './DoRemember';
import Body from './Body';

const history = syncHistoryWithStore(hashHistory, store);

export default class extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Body}>
          <Route path="/app" component={DiveTodo}>
            <Route path="/app/:date" component={DoRemember}/>
          </Route>
        </Route>
      </Router>
    );
  }
}
