import React, { Component } from 'react';
import { removeRemember } from '../actions';

export default class Remember extends Component {
  render() {
    return (
      <li className='item-with-icon hover-icon'>
        <p>{this.props.children}</p>
        <div>
          <span className='icon light icon-x'
          onClick={() => this.props.dispatch(removeRemember(this.props.index))}>
          </span>
          <span className='icon light icon-pencil'></span>
        </div>
      </li>
    );
  }
}
