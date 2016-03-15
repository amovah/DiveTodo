import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos';
import Remembers from './Remembers';
import { showModal, addTodo, addRemember } from '../actions';

class DoRemember extends Component {
  constructor() {
    super();
    this.todoModal = this.todoModal.bind(this);
    this.rememberModal = this.rememberModal.bind(this);
  }

  todoModal() {
    this.props.dispatch(showModal({
      title: 'Add Todo',
      placeholder: 'Todo',
      buttons: [{
        title: 'ADD',
        onClick: (input => {
          this.props.dispatch(addTodo(input.value, this.props.params.date));
        }).bind(this)
      }]
    }));
  }

  rememberModal() {
    this.props.dispatch(showModal({
      title: 'Add Remember',
      placeholder: 'Remember',
      buttons: [{
        title: 'ADD',
        onClick: (input => {
          this.props.dispatch(addRemember(input.value, this.props.params.date));
        }).bind(this)
      }]
    }));
  }

  render() {
    const todos = this.props.todos.filter(
      item => item.date === this.props.params.date
    );
    const remembers = this.props.remembers.filter(
      item => item.date === this.props.params.date
    );

    return (
      <div className="subitem">
        <div className="item-with-icon just-hover-icon">
          <h4>Do</h4>
          <span className="icon icon-plus light"
            onClick={this.todoModal}></span>
        </div>
        <Todos todos={todos} dispatch={this.props.dispatch}/>

        <div className="item-with-icon just-hover-icon">
          <h4>Remember</h4>
          <span className="icon icon-plus light"
            onClick={this.rememberModal}></span>
        </div>
        <Remembers remembers={remembers} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

export default connect(state => state)(DoRemember);
