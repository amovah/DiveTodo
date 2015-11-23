import React, { Component } from 'react';
import { removeTodo, completeTodo, uncompleteTodo } from '../actions';

class Todo extends Component {
  toggleComplete(dispatch) {
    this.props.completed ?
    dispatch(uncompleteTodo(this.props.index)) :
    dispatch(completeTodo(this.props.index));
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
          <span className='icon light icon-pencil'></span>
        </div>
      </li>
    );
  }
}

export default class TodoList extends Component {
  render() {
    return (
      <ul className='subitem' id='todos'>
        {
          this.props.todos.map((item, index) =>
            <Todo key={index} index={index} dispatch={this.props.dispatch}
            completed={item.completed}>
              {item.text}
            </Todo>
          )
        }
      </ul>
    );
  }
}
