import React, { Component } from 'react';
import Remember from './Remember';

export default class extends Component {
  render() {
    return (
      <ul className="subitem">
      {
        this.props.remembers.map((item, index) =>
          <Remember key={index} dispatch={this.props.dispatch}>
            {item.text}
          </Remember>
        )
      }
      </ul>
    );
  }
}
