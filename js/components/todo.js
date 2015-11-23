import React, { Component } from 'react';
import { removeTodo } from '../actions';

class Todo extends Component {
  render() {
    return (
      <li className='item-with-icon hover-icon'>
        <p>{this.props.children}</p>
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
      <ul className='subitem'>
        {
          this.props.todos.map((item, index) =>
            <Todo key={index} index={index} dispatch={this.props.dispatch}>
              {item.text}
            </Todo>
          )
        }
      </ul>
    );
  }
}
