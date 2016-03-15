import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import DiveTodo from './DiveTodo';
import DoRemember from './DoRemember';
import Body from './Body';

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Body}>
          <Route path="/app" component={DiveTodo}>
            <Route path="/app/:date" component={DoRemember}/>
          </Route>
        </Route>
      </Router>
    );
  }
}
