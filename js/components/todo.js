import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li className='item-with-icon hover-icon'>
        <p>{this.props.children}</p>
        <div>
          <span className='icon light icon-x'></span>
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
            <Todo key={index}>
              {item.text}
            </Todo>
          )
        }
      </ul>
    );
  }
}
