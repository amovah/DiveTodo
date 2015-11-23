'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'closeModal',
    value: function closeModal() {
      var _this2 = this;

      this.refs.modal.classList.remove('active');
      setTimeout((function () {
        (0, _reactDom.unmountComponentAtNode)(_this2.refs.modal.parentNode);
      }).bind(this), 400);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      // I don't why, but I need this little timeout function for it's animation

      setTimeout((function () {
        _this3.refs.modal.classList.add('active');
      }).bind(this), 50);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(action) {
      var node = this.refs.input;
      action(node.value);
      node.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var options = this.props.options;

      var buttons = options.buttons.map(function (item, index) {
        return _react2.default.createElement(
          'button',
          { key: index, onClick: function onClick() {
              return _this4.handleClick(item.onClick);
            } },
          item.title
        );
      }).concat(_react2.default.createElement(
        'button',
        { key: 'close', onClick: function onClick() {
            return _this4.closeModal();
          } },
        'CLOSE'
      ));

      return _react2.default.createElement(
        'div',
        { className: 'modal', ref: 'modal' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h4',
            null,
            options.title
          ),
          _react2.default.createElement('input', { type: 'text', placeholder: options.placeholder, ref: 'input',
            value: options.value })
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
})(_react.Component);

exports.default = Modal;
