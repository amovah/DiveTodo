'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _store = require('../store');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'exportDB',
    value: function exportDB() {
      _electron.remote.dialog.showSaveDialog(function (path) {
        (0, _utils.readDatabase)().then(function (database) {
          (0, _utils.write)(path, JSON.stringify(database)).then(function () {
            _electron.remote.dialog.showMessageBox({
              title: '',
              message: 'Successfully',
              detail: 'Database exported successfully on ' + path,
              buttons: [],
              type: 'info'
            });
          }).catch(function (err) {
            _electron.remote.dialog.showErrorBox('Faild, Can not write file', err.toString());
          });
        });
      });
    }
  }, {
    key: 'importDB',
    value: function importDB() {
      _electron.remote.dialog.showOpenDialog({ properties: ['openFile'] }, function (path) {
        (0, _utils.read)(path[0], 'utf8').then(function (file) {
          var database = JSON.parse(file);
          (0, _utils.loadAll)(_store.dispatch, database).then(function () {
            _electron.remote.dialog.showMessageBox({
              title: '',
              message: 'Successfully',
              detail: 'Database imported successfully from ' + path,
              buttons: [],
              type: 'info'
            });
          });
        }).catch(function (err) {
          _electron.remote.dialog.showErrorBox('Faild, Can not read database', err.toString());
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Export & Import Settings and Database'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn no-background',
              onClick: function onClick() {
                _this2.exportDB();
              } },
            'Export'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn no-background',
              onClick: function onClick() {
                _this2.importDB();
              } },
            'Import'
          )
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
module.exports = exports['default'];