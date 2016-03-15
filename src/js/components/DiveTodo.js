import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Daypicker from './Daypicker';
import Modal from './Modal';
import { pureDate } from '../utils';

class DiveTodo extends Component {
  constructor() {
    super();
    this.showDaypicker = this.showDaypicker.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  showDaypicker() {
    this.refs.daypicker.classList.add('active');
  }

  onSelect(e, date) {
    this.props.dispatch(push('/app/' + pureDate(date)));
    this.refs.daypicker.classList.remove('active');
  }

  render() {
    const date = new Date(parseInt(this.props.params.date)).toString()
    .split(' ').slice(1, 4).join(' ');
    return (
      <div className="container">
        <div className="item-with-icon">
          <h4>{date}</h4>
          <span className="icon icon-calendar" onClick={this.showDaypicker}>
          </span>
        </div>

        {this.props.children}

        <div id="daypicker" ref="daypicker">
          <Daypicker onSelect={this.onSelect}/>
        </div>

        <Modal/>
      </div>
    );
  }
}

export default connect(state => ({date: state.date }))(DiveTodo);
