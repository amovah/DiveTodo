import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

class Modal extends Component {
  render() {
    const buttons = this.props.buttons.map((item, index) => {
      return (
        <button
          className="btn no-background"
          key={index}
          onClick={() => { item.onClick(this.refs.input); }}>
          {item.title}
        </button>
      );
    }).concat(
      <button
        className="btn no-background"
        key="close"
        onClick={() => {
          this.props.dispatch(this.props.hideModal());
        }}>
        CLOSE
      </button>
    );

    return (
      <div className={this.props.className} ref="modal">
        <div className="modal-content">
          <h4>{this.props.title}</h4>
          <input type="text" placeholder={this.props.placeholder} ref="input"
          defaultValue={this.props.defaultValue} key={Math.random()}/>
        </div>
        <div className="modal-footer">
          {buttons}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.modal,
  dispatch => ({
    dispatch,
    hideModal
  })
)(Modal);
