'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTodo = (function (_Component) {
  _inherits(AddTodo, _Component);

  function AddTodo() {
    _classCallCheck(this, AddTodo);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodo).apply(this, arguments));
  }

  _createClass(AddTodo, [{
    key: 'handleClick',
    value: function handleClick(dispatch) {
      var node = this.refs.input;
      dispatch((0, _actions.addTodo)(node.value));
      node.value = '';
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.refs.modal.classList.remove('active');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dispatch = this.props.dispatch;

      return _react2.default.createElement(
        'div',
        { className: 'modal', id: 'addTodo-modal', ref: 'modal' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement('input', { type: 'text', placeholder: 'What is your todo?', ref: 'input' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.handleClick(dispatch);
              } },
            'ADD'
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.closeModal();
              } },
            'CLOSE'
          )
        )
      );
    }
  }]);

  return AddTodo;
})(_react.Component);

exports.default = AddTodo;
exports.default = (0, _reactRedux.connect)()(AddTodo);
