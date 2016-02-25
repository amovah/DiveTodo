import React, { Component } from 'react';
import Remember from './remember';

export default class RememberList extends Component {
  render() {
    return (
      <ul className='subitem'>
      {
        this.props.remembers.map((item, index) =>
          <Remember key={index} index={index} dispatch={this.props.dispatch}>
            {item}
          </Remember>
        )
      }
      </ul>
    );
  }
}
