import React, { Component } from 'react';

export class Remember extends Component {
  render() {
    return (
      <li className='item-with-icon hover-icon'>
        <p>{this.props.children}</p>
        <div>
          <span className='icon light icon-x'></span>
          <span className='icon light icon-pencil'></span>
        </div>
      </li>
    );
  }
}

export class RememberList extends Component {
  render() {
    return (
      <ul className='subitem'>
        {this.props.remembers.map((item, index) => {
          return (
            <Remember key={index}>
              {item}
            </Remember>
          );
        })}
      </ul>
    );
  }
}
