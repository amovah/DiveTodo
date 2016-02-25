import React, { Component } from 'react';
import { removeRemember, editRemember } from '../actions';
import modal from './modal';

export default class Remember extends Component {
  editRemember(dispatch) {
    modal({
      title: 'Edit remember',
      value: this.props.children,
      buttons: [{
        title: 'EDIT',
        onClick: ((text, closeModal) => {
          dispatch(editRemember(text, this.props.index));
          closeModal();
        }).bind(this)
      }]
    });
  }

  render() {
    return (
      <li className='item-with-icon hover-icon'>
        <p>{this.props.children}</p>
        <div>
          <span className='icon light icon-x'
          onClick={() => this.props.dispatch(removeRemember(this.props.index))}>
          </span>
          <span className='icon light icon-pencil'
          onClick={() => this.editRemember(this.props.dispatch)}></span>
        </div>
      </li>
    );
  }
}
