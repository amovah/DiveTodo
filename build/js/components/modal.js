'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttons = this.props.buttons.map(function (item, index) {
        return _react2.default.createElement(
          'button',
          { key: index, onClick: function onClick() {
              item.onClick(_this2.refs.input);
            } },
          item.title
        );
      }).concat(_react2.default.createElement(
        'button',
        {
          key: 'close',
          onClick: function onClick() {
            _this2.props.dispatch(_this2.props.hideModal());
          } },
        'CLOSE'
      ));

      return _react2.default.createElement(
        'div',
        { className: this.props.className, ref: 'modal' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h4',
            null,
            this.props.title
          ),
          _react2.default.createElement('input', { type: 'text', placeholder: this.props.placeholder, ref: 'input',
            defaultValue: this.props.defaultValue, key: Math.random() })
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          buttons
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state.modal;
}, function (dispatch) {
  return {
    dispatch: dispatch,
    hideModal: _actions.hideModal
  };
})(Modal);
module.exports = exports['default'];