import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todolist';
import RememberList from './rememberlist';
import modal from './modal';
import { addTodo, addRemember, changeDate } from '../actions';
import Calendar from 'rc-calendar';

export class App extends Component {
  componentWillMount() {
    this.todoModal = this.todoModal.bind(this);
    this.rememberModal = this.rememberModal.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.onSelect = this.onSelect.bind(this);
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

  showCalendar() {
    this.refs.calendar.classList.add('active');
  }

  onSelect(date) {
    this.props.dispatch(changeDate(date.getTime()));
    this.refs.calendar.classList.remove('active');
  }

  render() {
    const { dispatch, todos, remembers, date } = this.props;
    return (
      <div>
        <div className='item-with-icon'>
          <h4>{date}</h4>
          <span className='icon icon-calendar' onClick={this.showCalendar}>
          </span>
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
        <div id='datepicker' ref='calendar'>
          <Calendar onSelect={this.onSelect}/>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
