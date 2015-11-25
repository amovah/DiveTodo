import React, { Component } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

class Modal extends Component {
  closeModal() {
    this.refs.modal.classList.remove('active');
    setTimeout((() => {
      unmountComponentAtNode(this.refs.modal.parentNode);
    }).bind(this), 400);
  }

  componentWillMount() {
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // I don't why, but I need this little timeout function for it's animation

    setTimeout((() => {
      this.refs.modal.classList.add('active');
    }).bind(this), 50);
  }

  handleClick(action) {
    let node = this.refs.input;
    action(node.value, this.closeModal);
    node.value = '';
  }

  render() {
    const { options } = this.props;

    const buttons = options.buttons.map((item, index) => {
      return (
        <button key={index} onClick={() => this.handleClick(item.onClick)}>
        {item.title}</button>
      );
    }).concat(
      <button key='close' onClick={() => this.closeModal()}>CLOSE</button>
    );

    return (
      <div className='modal' ref='modal'>
        <div className='modal-content'>
          <h4>{options.title}</h4>
          <input type='text' placeholder={options.placeholder} ref='input'
          defaultValue={options.value}/>
        </div>
        <div className='modal-footer'>
          {buttons}
        </div>
      </div>
    );
  }
}

export default (options) => {
  render(
    <Modal options={options} />,
    document.getElementById('modal')
  );
};
