import React, { Component } from 'react';
import { removeRemember, editRemember, showModal } from '../actions';

export default class extends Component {
  constructor() {
    super();
    this.removeRemember = this.removeRemember.bind(this);
    this.editRemember = this.editRemember.bind(this);
  }

  removeRemember(id) {
    this.props.dispatch(removeRemember(id));
  }

  editRemember(text, id) {
    this.props.dispatch(showModal({
      title: 'Edit Remember',
      defaultValue: text,
      buttons: [{
        title: 'EDIT',
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
            onClick={() => { this.removeRemember(item.id); }}>
            </span>
            <span className="icon light icon-pencil"
            onClick={() => this.editRemember(item.text, item.id)}></span>
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
