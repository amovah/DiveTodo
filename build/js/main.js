'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _stores2.default },
  _react2.default.createElement(_app2.default, null)
), document.getElementById('app'));

var date = new Date();

function notify() {
  var now = date.toString().split(' ').slice(1, 4).join(' '),
      todos = require(__dirname.split('/').slice(0, -1).join('/') + '/database.json')[now].todos;

  if (!todos.every(function (item) {
    return item.completed;
  })) {
    var uncompletedTodos = todos.filter(function (item) {
      return !item.completed;
    }).length;
    new Notification('DiveTodo', {
      body: 'Hurry up, You have ' + uncompletedTodos + ' uncompleted todo(s) :('
    });
  }
}

setTimeout(notify, (20 - date.getHours()) * 1000 * 60 * 60);
