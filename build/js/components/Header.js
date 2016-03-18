'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));

    _this.toggleApp = _this.toggleApp.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleApp',
    value: function toggleApp() {
      this.props.location.pathname === '/settings' ? _reactRouter.hashHistory.push('/app/' + (0, _utils.getPureDate)((0, _moment2.default)()).valueOf()) : _reactRouter.hashHistory.push('/settings');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
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
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', { className: 'icon icon-bars', onClick: this.toggleApp })
          )
        ),
        this.props.children
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
module.exports = exports['default'];