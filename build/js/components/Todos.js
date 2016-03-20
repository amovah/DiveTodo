'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));

    _this.toggleComplete = _this.toggleComplete.bind(_this);
    _this.editTodo = _this.editTodo.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleComplete',
    value: function toggleComplete(completed, id) {
      completed ? this.props.dispatch((0, _actions.uncompleteTodo)(id)) : this.props.dispatch((0, _actions.completeTodo)(id));
    }
  }, {
    key: 'editTodo',
    value: function editTodo(text, id) {
      var _this2 = this;

      this.props.dispatch((0, _actions.showModal)({
        title: 'Edit Todo',
        defaultValue: text,
        buttons: [{
          title: 'Edit',
          onClick: function (input) {
            _this2.props.dispatch((0, _actions.editTodo)(input.value, id));
          }.bind(this)
        }]
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var todos = this.props.todos.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { className: 'item-with-icon hover-icon', key: index },
          _react2.default.createElement(
            'p',
            { onClick: function onClick() {
                _this3.toggleComplete(item.completed, item.id);
              },
              style: {
                textDecoration: item.completed ? 'line-through' : 'none'
              } },
            item.text
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', { className: 'icon light icon-x',
              title: 'Remove',
              onClick: function onClick() {
                _this3.props.dispatch((0, _actions.removeTodo)(item.id));
              } }),
            _react2.default.createElement('span', { className: 'icon light icon-pencil',
              title: 'Edit',
              onClick: function onClick() {
                _this3.editTodo(item.text, item.id);
              } }),
            _react2.default.createElement('span', { className: 'icon light icon-arrow-left',
              title: 'Move to previous day',
              onClick: function onClick() {
                _this3.props.dispatch((0, _actions.moveTodo)(item.id, -1));
              } }),
            _react2.default.createElement('span', { className: 'icon light icon-arrow-right',
              title: 'Move to next day',
              onClick: function onClick() {
                _this3.props.dispatch((0, _actions.moveTodo)(item.id, 1));
              } })
          )
        );
      });

      return _react2.default.createElement(
        'ul',
        { className: 'subitem', id: 'todos' },
        todos
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
module.exports = exports['default'];