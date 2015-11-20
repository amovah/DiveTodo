import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from './todo';
import { RememberList } from './remember';
import { addTodo } from '../actions';

class AddTodo extends Component {
  handleClick() {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }
}

export class MainTodo extends Component {
  render() {
    const { dispatch, todos, remembers } = this.props;
    return (
      <div>
        <div className='item-with-icon'>
          <h4>Today</h4>
          <span className='icon icon-calendar'></span>
        </div>
        <div className='subitem'>
          <div className='item-with-icon just-hover-icon'>
            <h4>Do</h4>
            <span className='icon icon-plus light'></span>
          </div>
          <AddTodo onAddClick={text =>
            dispatch(addTodo(text))
          }/>
          <TodoList todos={todos}/>
        </div>
        <div className='item-with-icon just-hover-icon'>
          <h4>Remember</h4>
          <span className='icon icon-plus light'></span>
        </div>
        <ul className='subitem'>
          <RememberList remembers={remembers}/>
        </ul>
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
