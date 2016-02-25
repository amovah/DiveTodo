'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Remember = function (_Component) {
  _inherits(Remember, _Component);

  function Remember() {
    _classCallCheck(this, Remember);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Remember).apply(this, arguments));
  }

  _createClass(Remember, [{
    key: 'editRemember',
    value: function editRemember(dispatch) {
      var _this2 = this;

      (0, _modal2.default)({
        title: 'Edit remember',
        value: this.props.children,
        buttons: [{
          title: 'EDIT',
          onClick: function (text, closeModal) {
            dispatch((0, _actions.editRemember)(text, _this2.props.index));
            closeModal();
          }.bind(this)
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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
          _react2.default.createElement('span', { className: 'icon light icon-x',
            onClick: function onClick() {
              return _this3.props.dispatch((0, _actions.removeRemember)(_this3.props.index));
            } }),
          _react2.default.createElement('span', { className: 'icon light icon-pencil',
            onClick: function onClick() {
              return _this3.editRemember(_this3.props.dispatch);
            } })
        )
      );
    }
  }]);

  return Remember;
}(_react.Component);

exports.default = Remember;
module.exports = exports['default'];