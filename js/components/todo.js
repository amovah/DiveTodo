import React, { Component } from 'react';
import modal from './modal';
import { removeTodo, completeTodo, uncompleteTodo, editTodo } from '../actions';

export default class Todo extends Component {
  toggleComplete(dispatch) {
    this.props.completed ?
    dispatch(uncompleteTodo(this.props.index)) :
    dispatch(completeTodo(this.props.index));
  }

  editTodo(dispatch) {
    modal({
      title: 'Edit todo',
      value: this.props.children,
      buttons: [{
        title: 'EDIT',
        onClick: ((text, closeModal) => {
          dispatch(editTodo(text, this.props.index));
          closeModal();
        }).bind(this)
      }]
    });
  }

  render() {
    return (
      <li className='item-with-icon hover-icon'>
        <p onClick={() => this.toggleComplete(this.props.dispatch)}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}>
        {this.props.children}</p>
        <div>
          <span className='icon light icon-x'
          onClick={() => this.props.dispatch(removeTodo(this.props.index))}>
          </span>
          <span className='icon light icon-pencil'
          onClick={() => this.editTodo(this.props.dispatch)}></span>
        </div>
      </li>
    );
  }
}
