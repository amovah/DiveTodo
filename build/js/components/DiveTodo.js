'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Daypicker = require('./Daypicker');

var _Daypicker2 = _interopRequireDefault(_Daypicker);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiveTodo = function (_Component) {
  _inherits(DiveTodo, _Component);

  function DiveTodo() {
    _classCallCheck(this, DiveTodo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DiveTodo).call(this));

    _this.showDaypicker = _this.showDaypicker.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    return _this;
  }

  _createClass(DiveTodo, [{
    key: 'showDaypicker',
    value: function showDaypicker() {
      this.refs.daypicker.classList.add('active');
    }
  }, {
    key: 'onSelect',
    value: function onSelect(e, date) {
      _reactRouter.hashHistory.push('/app/' + (0, _moment2.default)(date).startOf('day').valueOf());
      this.refs.daypicker.classList.remove('active');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'item-with-icon' },
          _react2.default.createElement(
            'h4',
            null,
            (0, _moment2.default)(+this.props.params.date).format('Do MMMM YYYY')
          ),
          _react2.default.createElement('span', { className: 'icon icon-calendar', onClick: this.showDaypicker })
        ),
        this.props.children,
        _react2.default.createElement(
          'div',
          { id: 'daypicker', ref: 'daypicker' },
          _react2.default.createElement(_Daypicker2.default, { onSelect: this.onSelect })
        ),
        _react2.default.createElement(_Modal2.default, null)
      );
    }
  }]);

  return DiveTodo;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return { date: state.date };
})(DiveTodo);
module.exports = exports['default'];