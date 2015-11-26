import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todolist';
import RememberList from './rememberlist';
import modal from './modal';
import { addTodo, addRemember } from '../actions';

export class App extends Component {
  componentWillMount() {
    this.todoModal = this.todoModal.bind(this);
    this.rememberModal = this.rememberModal.bind(this);
  }

  todoModal() {
    const { dispatch } = this.props;
    modal({
      title: 'Add todo',
      placeholder: 'What is your todo?',
      buttons: [{
        title: 'ADD',
        onClick(text) {
          dispatch(addTodo(text));
        }
      }]
    });
  }

  rememberModal() {
    const { dispatch } = this.props;
    modal({
      title: 'Add remember',
      placeholder: 'What do you want to remember?',
      buttons: [{
        title: 'ADD',
        onClick(text) {
          dispatch(addRemember(text));
        }
      }]
    });
  }

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
            <span className='icon icon-plus light'
            onClick={this.todoModal}></span>
          </div>
          <TodoList todos={todos} dispatch={dispatch}/>
          <div className='item-with-icon just-hover-icon'>
            <h4>Remember</h4>
            <span className='icon icon-plus light'
            onClick={this.rememberModal}></span>
          </div>
          <ul className='subitem'>
            <RememberList remembers={remembers} dispatch={dispatch}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
