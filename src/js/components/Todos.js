import React, { Component } from 'react';
import {
  removeTodo,
  completeTodo,
  uncompleteTodo,
  editTodo,
  showModal,
  moveTodo
 } from '../actions';

export default class extends Component {
  constructor() {
    super();
    this.toggleComplete = this.toggleComplete.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  toggleComplete(completed, id) {
    completed ?
    this.props.dispatch(uncompleteTodo(id)) :
    this.props.dispatch(completeTodo(id));
  }

  editTodo(text, id) {
    this.props.dispatch(showModal({
      title: 'Edit Todo',
      defaultValue: text,
      buttons: [{
        title: 'Edit',
        onClick: (input => {
          this.props.dispatch(editTodo(input.value, id));
        }).bind(this)
      }]
    }));
  }

  render() {
    const todos = this.props.todos.map((item, index) => {
      return (
        <li className="item-with-icon hover-icon" key={index}>
          <p onClick={() => { this.toggleComplete(item.completed, item.id); }}
            style={{
              textDecoration: item.completed ? 'line-through' : 'none'
            }}>{item.text}</p>
          <div>
            <span className="icon light icon-x"
              title="Remove"
              onClick={() => {
                this.props.dispatch(removeTodo(item.id));
              }}>
            </span>
            <span className="icon light icon-pencil"
              title="Edit"
              onClick={() => { this.editTodo(item.text, item.id); }}>
            </span>
            <span className="icon light icon-arrow-left"
              title="Move to previous day"
              onClick={() => {
                this.props.dispatch(moveTodo(item.id, -1));
              }}></span>
            <span className="icon light icon-arrow-right"
              title="Move to next day"
              onClick={() => {
                this.props.dispatch(moveTodo(item.id, 1));
              }}></span>
          </div>
        </li>
      );
    });

    return (
      <ul className="subitem" id="todos">
        {todos}
      </ul>
    );
  }
}
