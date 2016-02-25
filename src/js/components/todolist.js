import React, { Component } from 'react';
import Todo from './todo';

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
