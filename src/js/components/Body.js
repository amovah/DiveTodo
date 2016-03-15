import React from 'react';

export default props => {
  return (
    <div>
      <header>
        <h3>DiveTodo</h3>
        <p>Your day is yours</p>
      </header>

      {props.children}
    </div>
  );
};
