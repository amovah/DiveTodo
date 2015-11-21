import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todo';
import RememberList from './remember';

export class MainTodo extends Component {
  showModal() {
    document.getElementById('addTodo-modal').classList.add('active');
  }

  render() {
    const { todos, remembers } = this.props;
    return (
      <div>
        <div className='item-with-icon'>
          <h4>Today</h4>
          <span className='icon icon-calendar'></span>
        </div>
        <div className='subitem'>
          <div className='item-with-icon just-hover-icon'>
            <h4>Do</h4>
            <span className='icon icon-plus light' onClick={
              () => this.showModal()
            }></span>
          </div>
          <TodoList todos={todos}/>
          <div className='item-with-icon just-hover-icon'>
            <h4>Remember</h4>
            <span className='icon icon-plus light'></span>
          </div>
          <ul className='subitem'>
            <RememberList remembers={remembers}/>
          </ul>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    todos: state.todos,
    remembers: state.remembers
  };
}

export default connect(select)(MainTodo);
