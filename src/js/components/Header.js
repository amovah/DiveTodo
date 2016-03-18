import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import moment from 'moment';
import { getPureDate } from '../utils';

export default class extends Component {
  constructor() {
    super();
    this.toggleApp = this.toggleApp.bind(this);
  }

  toggleApp() {
    this.props.location.pathname === '/settings' ?
    hashHistory.push('/app/' + getPureDate(moment()).valueOf()) :
    hashHistory.push('/settings');
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <h3>DiveTodo</h3>
            <p>Your day is yours</p>
          </div>
          <div>
            <span className="icon icon-bars" onClick={this.toggleApp}></span>
          </div>
        </header>

        {this.props.children}
      </div>
    );
  }
}
