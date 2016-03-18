import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import DiveTodo from './DiveTodo';
import DoRemember from './DoRemember';
import Header from './Header';
import Settings from './Settings';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Header}>
        <Route path="/app" component={DiveTodo}>
          <Route path="/app/:date" component={DoRemember}/>
        </Route>
        <Route path="/settings" component={Settings}/>
      </Route>
    </Router>
  );
};
