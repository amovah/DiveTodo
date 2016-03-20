import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import moment from 'moment';
import Daypicker from './Daypicker';
import Modal from './Modal';

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
    hashHistory.push(`/app/${moment(date).startOf('day').valueOf()}`);
    this.refs.daypicker.classList.remove('active');
  }

  render() {
    return (
      <div className="container">
        <div className="item-with-icon">
          <h4>{moment(+this.props.params.date).format('Do MMMM YYYY')}</h4>
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
