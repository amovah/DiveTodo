import React, { Component } from 'react';
import {
  removeRemember,
  editRemember,
  showModal,
  moveRemember
} from '../actions';

export default class extends Component {
  constructor() {
    super();
    this.editRemember = this.editRemember.bind(this);
  }

  editRemember(text, id) {
    this.props.dispatch(showModal({
      title: 'Edit Remember',
      defaultValue: text,
      buttons: [{
        title: 'Edit',
        onClick: (input => {
          this.props.dispatch(editRemember(input.value, id));
        }).bind(this)
      }]
    }));
  }

  render() {
    const remembers = this.props.remembers.map((item, index) => {
      return (
        <li className="item-with-icon hover-icon" key={index}>
          <p>{item.text}</p>
          <div>
            <span className="icon light icon-x"
              title="Remove"
              onClick={() => {
                this.props.dispatch(removeRemember(item.id));
              }}></span>
            <span className="icon light icon-pencil"
              title="Edit"
              onClick={() => { this.editRemember(item.text, item.id); }}></span>
            <span className="icon light icon-arrow-left"
              title="Move to previous day"
              onClick={() => {
                this.props.dispatch(moveRemember(item.id, -1));
              }}></span>
            <span className="icon light icon-arrow-right"
              title="Move to next day"
              onClick={() => {
                this.props.dispatch(moveRemember(item.id, 1));
              }}></span>
          </div>
        </li>
      );
    });
    return (
      <ul className="subitem">
        {remembers}
      </ul>
    );
  }
}
