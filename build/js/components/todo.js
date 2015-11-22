'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = (function (_Component) {
  _inherits(Todo, _Component);

  function Todo() {
    _classCallCheck(this, Todo);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).apply(this, arguments));
  }

  _createClass(Todo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'item-with-icon hover-icon' },
        _react2.default.createElement(
          'p',
          null,
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'icon light icon-x' }),
          _react2.default.createElement('span', { className: 'icon light icon-pencil' })
        )
      );
    }
  }]);

  return Todo;
})(_react.Component);

var TodoList = (function (_Component2) {
  _inherits(TodoList, _Component2);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'subitem' },
        this.props.todos.map(function (item, index) {
          return _react2.default.createElement(
            Todo,
            { key: index },
            item.text
          );
        })
      );
    }
  }]);

  return TodoList;
})(_react.Component);

exports.default = TodoList;
