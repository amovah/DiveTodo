'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _maintodo = require('./components/maintodo');

var _maintodo2 = _interopRequireDefault(_maintodo);

var _addtodo = require('./components/addtodo');

var _addtodo2 = _interopRequireDefault(_addtodo);

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _stores2.default },
  _react2.default.createElement(_maintodo2.default, null)
), document.getElementById('todo-section'));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _stores2.default },
  _react2.default.createElement(_addtodo2.default, null)
), document.getElementById('modal'));
