'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'h3',
        null,
        'DiveTodo'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Your day is yours'
      )
    ),
    props.children
  );
};

module.exports = exports['default'];