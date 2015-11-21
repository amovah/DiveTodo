import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export default class AddTodo extends Component {
  handleClick(dispatch) {
    let node = this.refs.input;
    dispatch(addTodo(node.value));
    node.value = '';
  }

  closeModal() {
    this.refs.modal.classList.remove('active');
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div className='modal' id='addTodo-modal' ref='modal'>
        <div className='modal-content'>
          <input type='text' placeholder='What is your todo?' ref='input'/>
        </div>
        <div className='modal-footer'>
          <button onClick={() => this.handleClick(dispatch)}>ADD</button>
          <button onClick={() => this.closeModal()}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default connect()(AddTodo);
