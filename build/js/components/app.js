'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _todolist = require('./todolist');

var _todolist2 = _interopRequireDefault(_todolist);

var _rememberlist = require('./rememberlist');

var _rememberlist2 = _interopRequireDefault(_rememberlist);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _daypicker = require('./daypicker');

var _daypicker2 = _interopRequireDefault(_daypicker);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.todoModal = this.todoModal.bind(this);
      this.rememberModal = this.rememberModal.bind(this);
      this.showCalendar = this.showCalendar.bind(this);
      this.onSelect = this.onSelect.bind(this);
    }
  }, {
    key: 'todoModal',
    value: function todoModal() {
      var dispatch = this.props.dispatch;

      (0, _modal2.default)({
        title: 'Add todo',
        placeholder: 'What is your todo?',
        buttons: [{
          title: 'ADD',
          onClick: function onClick(text) {
            dispatch((0, _actions.addTodo)(text));
          }
        }]
      });
    }
  }, {
    key: 'rememberModal',
    value: function rememberModal() {
      var dispatch = this.props.dispatch;

      (0, _modal2.default)({
        title: 'Add remember',
        placeholder: 'What do you want to remember?',
        buttons: [{
          title: 'ADD',
          onClick: function onClick(text) {
            dispatch((0, _actions.addRemember)(text));
          }
        }]
      });
    }
  }, {
    key: 'showCalendar',
    value: function showCalendar() {
      this.refs.calendar.classList.add('active');
    }
  }, {
    key: 'onSelect',
    value: function onSelect(e, date) {
      this.props.dispatch((0, _actions.changeDate)(date.getTime()));
      this.refs.calendar.classList.remove('active');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dispatch = _props.dispatch;
      var todos = _props.todos;
      var remembers = _props.remembers;
      var date = _props.date;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'item-with-icon' },
          _react2.default.createElement(
            'h4',
            null,
            date
          ),
          _react2.default.createElement('span', { className: 'icon icon-calendar', onClick: this.showCalendar })
        ),
        _react2.default.createElement(
          'div',
          { className: 'subitem' },
          _react2.default.createElement(
            'div',
            { className: 'item-with-icon just-hover-icon' },
            _react2.default.createElement(
              'h4',
              null,
              'Do'
            ),
            _react2.default.createElement('span', { className: 'icon icon-plus light',
              onClick: this.todoModal })
          ),
          _react2.default.createElement(_todolist2.default, { todos: todos, dispatch: dispatch }),
          _react2.default.createElement(
            'div',
            { className: 'item-with-icon just-hover-icon' },
            _react2.default.createElement(
              'h4',
              null,
              'Remember'
            ),
            _react2.default.createElement('span', { className: 'icon icon-plus light',
              onClick: this.rememberModal })
          ),
          _react2.default.createElement(_rememberlist2.default, { remembers: remembers, dispatch: dispatch })
        ),
        _react2.default.createElement(
          'div',
          { id: 'daypicker', ref: 'calendar' },
          _react2.default.createElement(_daypicker2.default, { onSelect: this.onSelect })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(App);