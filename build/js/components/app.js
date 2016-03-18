'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _DiveTodo = require('./DiveTodo');

var _DiveTodo2 = _interopRequireDefault(_DiveTodo);

var _DoRemember = require('./DoRemember');

var _DoRemember2 = _interopRequireDefault(_DoRemember);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Settings = require('./Settings');

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _Header2.default },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/app', component: _DiveTodo2.default },
        _react2.default.createElement(_reactRouter.Route, { path: '/app/:date', component: _DoRemember2.default })
      ),
      _react2.default.createElement(_reactRouter.Route, { path: '/settings', component: _Settings2.default })
    )
  );
};

module.exports = exports['default'];