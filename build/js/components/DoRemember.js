'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Todos = require('./Todos');

var _Todos2 = _interopRequireDefault(_Todos);

var _Remembers = require('./Remembers');

var _Remembers2 = _interopRequireDefault(_Remembers);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoRemember = function (_Component) {
  _inherits(DoRemember, _Component);

  function DoRemember() {
    _classCallCheck(this, DoRemember);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DoRemember).call(this));

    _this.todoModal = _this.todoModal.bind(_this);
    _this.rememberModal = _this.rememberModal.bind(_this);
    return _this;
  }

  _createClass(DoRemember, [{
    key: 'todoModal',
    value: function todoModal() {
      var _this2 = this;

      this.props.dispatch((0, _actions.showModal)({
        title: 'Add Todo',
        placeholder: 'Todo',
        buttons: [{
          title: 'ADD',
          onClick: function (input) {
            _this2.props.dispatch((0, _actions.addTodo)(input.value, _this2.props.params.date));
          }.bind(this)
        }]
      }));
    }
  }, {
    key: 'rememberModal',
    value: function rememberModal() {
      var _this3 = this;

      this.props.dispatch((0, _actions.showModal)({
        title: 'Add Remember',
        placeholder: 'Remember',
        buttons: [{
          title: 'ADD',
          onClick: function (input) {
            _this3.props.dispatch((0, _actions.addRemember)(input.value, _this3.props.params.date));
          }.bind(this)
        }]
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var todos = this.props.todos.filter(function (item) {
        return item.date === +_this4.props.params.date;
      });
      var remembers = this.props.remembers.filter(function (item) {
        return item.date === +_this4.props.params.date;
      });

      return _react2.default.createElement(
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
        _react2.default.createElement(_Todos2.default, { todos: todos, dispatch: this.props.dispatch }),
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
        _react2.default.createElement(_Remembers2.default, { remembers: remembers, dispatch: this.props.dispatch })
      );
    }
  }]);

  return DoRemember;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(DoRemember);
module.exports = exports['default'];